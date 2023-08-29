import Sidebar from "../../components/Sidebar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";
import Slide from './slideposter'
import Nav from "../../components/Navbar/index";
import apiInstance from "../../util/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import star from "../../assets/star.png";
import Footer from "../../components/Navbar/footer";

export default function Dashboard(props) {
  const [empList, setEmpList] = useState([]);
  // console.log(props.movieSearchList,'se')

  useEffect(() => {
    const getEmployeeLists = async () => {
      await apiInstance
        .get("movie/now_playing?language=en-US&page=1")
        .then((response) => {
          console.log(response.data.results, "here");

          setEmpList(response.data.results);
        });
    };
    getEmployeeLists();
  }, []);
  return (
    <div className="flex">
      <div className="py-2 flex-grow">
        <div className="rounded-2xl  shadow-3xl px-10">
          {" "}
          <Nav />
        </div>
        <div className="body px-6 py-5">
        <Card className='rounded-md mb-10'>
<Slide />
        </Card>

 

    
          <Card className="rounded-md shadow-md py-5">
            <CardHeader className="flex flex-row font-semibold rounded-2 text-xl">
              Choose Your Movies
            </CardHeader>
            <Divider></Divider>
            <CardBody className="grid grid-cols-3 gap-2 lg:grid-cols-4 xl:grid-cols-6">
              {empList.map((item, i) => (
                <div className="block" key={item.id}>
                  <div className="w-20 md:w-32 lg:w-48 shadow-sm">
                    <Link to={"/detail/" + item.id}>
                      <Image
                        isBlurred
                        width={240}
                        src={
                          "http://image.tmdb.org/t/p/w500" + item.poster_path
                        }
                        alt="NextUI Album Cover"
                        classNames="m-5"
                      />
                    </Link>
                  </div>
                  <div className="flex flex-row mt-1">
                    <b>{item.vote_average}</b>
                    <img src={star} style={{ width: "20px", height: "20px" }} />
                  </div>
                  <div
                    key={item.id}
                    className="sm:text-left lg:w-40 h-12 overflow-hidden mt-1">
                    {item.title}

                    <br />
                    {item.release_date}
                  </div>
                </div>
              ))}
            </CardBody>
            <Divider></Divider>
            <CardFooter className="justify-center">
              <div className="text-center sm:text-left">
                <Footer />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
