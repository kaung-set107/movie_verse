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


export default function Dashboard() {
    const MovieId=useLocation().pathname.split('/')[2]
    console.log(MovieId,'id')
  const [empList, setEmpList] = useState([]);
  useEffect(() => {
    const getEmployeeLists = async () => {
      await apiInstance
        .get(`movie/${MovieId}/videos?language=en-US`)
        .then((response) => {
          console.log(response.data.results, "here");
          setEmpList(response.data.results.slice(0,6));
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
            <div className='container'>

            </div>
<Divider></Divider>
            <CardBody className="grid grid-cols-3 gap-4 ">
              {empList.map((item, i) => (
                <div className='rounded-xl' key={item.key}>
                 <iframe
            width="400"
            height="245"
            src={`https://www.youtube.com/embed/${item.key}`}
            title={item.name}
            allowFullScreen
      
          ></iframe>


                  <div key={item.key} className="block mt-3">
                    {item.name}
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
