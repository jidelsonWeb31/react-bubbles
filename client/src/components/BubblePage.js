import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth} from "./utils/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
 
  const getData = evt => {
    evt.preventDefault();
    axiosWithAuth()
    .get('/api/colors', colorList)
    .then(res =>{
        console.log(res)
        setColorList({
            
           colorList: res.data.data.map((colorList) => {
             return(
               <div>
                   <p>{colorList.username}</p>
                   <p>{colorList.password}</p>
               </div>
           )})
        })
     })
    .catch(err => {
        console.log(err)
    })
}


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
