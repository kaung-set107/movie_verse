import Sidebar from "../../components/Sidebar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Badge,
  Button,
} from "@nextui-org/react";
import Nav from "../../components/Navbar/index";
import apiInstance from "../../util/api";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../components/Navbar/footer";
import Logo from "../../assets/ms2.png";
export default function Dashboard() {
  const MovieId = useLocation().pathname.split("/")[2];
  const [link, setLink] = useState("");
  console.log(parseInt(MovieId) === 940721, "id");
  const [empList, setEmpList] = useState([]);
  const [movie, setMovie] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getEmployeeLists = async () => {
      await apiInstance
        .get(`movie/${MovieId}/videos?language=en-US`)
        .then((response) => {
          console.log(response.data.results, "here");
          setEmpList(response.data.results.slice(0, 8));
        });
    };

    const getMovieDetail = async () => {
      await apiInstance
        .get(`movie/${MovieId}?language=en-US`)
        .then((response) => {
          console.log(response.data, "detail");
          setMovie(response.data);
          //   setEmpList(response.data.results);
          setLink(
            parseInt(MovieId) === 940721
              ? "https://flixhq.to/movie/watch-godzilla-minus-one-104032"
              : ""
          );
        });
    };

    const getImage = async () => {
      await apiInstance.get(`movie/${MovieId}/images`).then((response) => {
        console.log(response.data.backdrops, "jojo");
        setImages(response.data.backdrops.slice(0, 1));
        //   setEmpList(response.data.results);
      });
    };
    getImage();
    getMovieDetail();
    getEmployeeLists();
  }, []);
  return (
    <div className='flex m-10'>
      <div className=' flex-grow'>
        <Card className='p-10'>
          <div className='flex flex-row place-content-between'>
            <img src={Logo} width='200' height='100' />
          </div>
        </Card>
        <div className='body py-1 grid grid-cols-5 gap-2'>
          <Card className='py-4'>
            <CardHeader className='flex flex-row font-semibold rounded-3 justify-center text-2xl'>
              Movie Detail
            </CardHeader>
            <Divider></Divider>
            <CardBody>
              <a href={link} className='ring ring-rose-400 hover:ring-rose-500'>
                <img
                  src={"http://image.tmdb.org/t/p/w500" + movie.poster_path}
                  className='movie-poster'
                />
              </a>
              <div className='py-5'>
                <div>Genres</div>

                <div className='grid grid-cols-2 gap-1 py-3 text-cyan-50'>
                  {console.log(movie, "gen")}
                  {movie.genres?.map((i) => (
                    <Button variant='bordered' key={i.id}>
                      {i.name}
                    </Button>
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className='rounded-md shadow-md py-4 col-span-4'>
            <CardHeader className='flex flex-row font-semibold rounded-3 text-2xl justify-center'>
              {movie.title}
            </CardHeader>

            <Divider></Divider>
            {/* <Card >
{images.map((item)=>(
   <div key={item.id} className='object-fill h-48 w-96'>
           <img
        src={"http://image.tmdb.org/t/p/w500"+item.file_path}
   
        className="movie-poster"
      />
            </div>
   
))}
   
</Card> */}

            <CardBody className='grid grid-cols-3 gap-2 '>
              {empList.map((item, i) => (
                <div className='block'>
                  <div
                    className='w-10 md:w-32 lg:w-48 shadow-sm '
                    key={item.key}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${item.key}`}
                      title={item.name}
                      allowFullScreen
                      className='aspect-square'
                      // style={{ width:'1400px',height:'500px' }}
                    ></iframe>
                  </div>

                  <div
                    key={item.key}
                    className='mt-3 text-center sm:text-left w-41 h-12 overflow-hidden'
                  >
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
            <CardFooter className='justify-center'>
              <Footer />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
