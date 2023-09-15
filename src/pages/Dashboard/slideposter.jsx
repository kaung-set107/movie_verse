
 import React, { Component,useState,useEffect } from 'react';
import apiInstance from "../../util/api";
import Slider from '../../components/Slider/slider'
export default function CarouselTransition({MovieId}) {
      const [empList, setEmpList] = useState([]);

  useEffect(() => {
    const getEmployeeLists = async () => {
      await apiInstance
        .get(`movie/${MovieId}/images`)
        .then((response) => {
          

          setEmpList(response.data.results);
          console.log(response.data.results, "hello");
  
        });
    };
    getEmployeeLists();
  }, []);

  const Image="http://image.tmdb.org/t/p/w500"+empList
  return (
   <>

   {console.log(empList.map((i)=>(i)),'img')}

   

    {empList.map((item, i) => (
               
                
                <div className='flex flex-row w-full justify-center '  key={item.id}>
                    <img src={"http://image.tmdb.org/t/p/w500"+item.backdrop_path} style={{width:'380px'}}/>
                
                </div> 

               
              ))}
        
</>

  );
}