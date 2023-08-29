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
import { Link ,useLocation} from 'react-router-dom';
import Footer from '../../components/Navbar/footer'


export default function Dashboard() {
    const MovieId=useLocation().pathname.split('/')[2]
    console.log(MovieId,'id')
  const [empList, setEmpList] = useState([]);
  const [movie,setMovie]=useState([])
  useEffect(() => {
    const getEmployeeLists = async () => {
      await apiInstance
        .get(`movie/${MovieId}/videos?language=en-US`)
        .then((response) => {
          console.log(response.data.results, "here");
          setEmpList(response.data.results.slice(0,8));
        });
    };

     const getMovieDetail = async () => {
      await apiInstance
        .get(`movie/${MovieId}?language=en-US`)
        .then((response) => {
          console.log(response.data, "jojo");
          setMovie(response.data)
        //   setEmpList(response.data.results);
        });
    };
    getMovieDetail();
    getEmployeeLists();
  }, []);
  return (
    <div className="flex m-10">
      <div className=" flex-grow">
        <div className="rounded-lg shadow-md px-10">
          {" "}
          <Nav />
        </div>
        <div className="body py-1">
          <Card className="rounded-md shadow-md py-5">
            <CardHeader className="flex flex-row font-semibold rounded-3">
              Movies Trailer
            </CardHeader>
            <div className='container'>

            </div>
<Divider></Divider>
            <CardBody className='grid grid-cols-4 gap-4'>
            {/* <div>
           <img
        src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
        alt={`${movieInfo.title} Poster`}
        className="movie-poster"
      />
            </div> */}
   
              {empList.map((item, i) => (
                <div className='block'>
                <div className='w-10 md:w-32 lg:w-48 shadow-sm' key={item.key}>
                 <iframe

            src={`https://www.youtube.com/embed/${item.key}`}
            title={item.name}
            allowFullScreen
            className='aspect-square'
            // style={{ width:'1400px',height:'500px' }}
      
          ></iframe>
</div>

                  <div key={item.key} className="mt-3 text-center sm:text-left w-49 h-12 overflow-hidden">
                    {item.name}
                  </div>
        </div>
              ))}

              {/* <div>
                <p>
                    {movie.overview}
                </p>
              </div> */}
       
            </CardBody>
            <Divider></Divider>
            <CardFooter className="justify-center">
            <Footer/>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
