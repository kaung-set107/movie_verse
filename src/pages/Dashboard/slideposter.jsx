
 import MS from '../../assets/ms.png'
 import MS1 from '../../assets/ms1.png'
 import React, { Component,useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import apiInstance from "../../util/api";
export default function CarouselTransition() {
      const [empList, setEmpList] = useState([]);

  useEffect(() => {
    const getEmployeeLists = async () => {
      await apiInstance
        .get("movie/now_playing?language=en-US&page=1")
        .then((response) => {
          console.log(response.data.results, "here");

          setEmpList(response.data.results.slice(0,3));
        });
    };
    getEmployeeLists();
  }, []);
  return (
   <>
    <Carousel autoPlay='true' className='py-8'>
    {empList.map((item, i) => (
               
                
                <div className='flex flex-row w-full justify-center '  key={item.id}>
                    <img src={"http://image.tmdb.org/t/p/w500"+item.backdrop_path} style={{width:'380px'}}/>
                
                </div> 

               
              ))}
               </Carousel>
</>

  );
}