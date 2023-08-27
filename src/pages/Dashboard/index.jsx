import Sidebar from "../../components/Sidebar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";
import Nav from "../../components/Navbar/index";
import apiInstance from "../../util/api";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [empList, setEmpList] = useState([]);
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
    <div className="flex m-10">
      <div className="py-2 flex-grow">
        <div className="rounded-lg shadow-md px-10">
          {" "}
          <Nav />
        </div>
        <div className="body py-1">
          <Card className="rounded-md shadow-md py-5">
            <CardHeader className="flex flex-row font-semibold rounded-3">
              Choose Your Movies
            </CardHeader>
<Divider></Divider>
            <CardBody className="grid grid-cols-6 gap-4">
              {empList.map((item, i) => (
                <div className="">
                <Link to={'/detail/'+item.id}>
                  <Image
                    isBlurred
                    width={240}
                    src={"http://image.tmdb.org/t/p/w500" + item.poster_path}
                    alt="NextUI Album Cover"
                    classNames="m-5"
                  />
</Link>
                  <div key={item.id} className="block">
                    {item.title}
                  </div>
                </div>
              ))}
            </CardBody>
            <Divider></Divider>
            <CardFooter className="justify-center">
              Copyright © 2023-2024 <b className="text-cyan-600">KSH</b> .All
              rights reserved.
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
