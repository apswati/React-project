import React from "react";
import img7 from "./images/img7.png"
import img15 from "./images/img15.jpg"
import { NavLink } from "react-router-dom";
import "E:/programming/react/Project/myproject/src/style.css"


const  About=()=>{
    return(
<>
<div className="heading text-center bg-primary">
    <h1>Best Development</h1>
</div>
<div className="container-fluid">
<div className="container mt-5">
  <div className="row">
    <div className="col-sm-4 ">
    <img className="h-100 w-100" src={img15} />
      <h3>Mission</h3>
     
      <p className="my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>  
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div className="col-sm-6 ">
      <h3 className="text-capitalize">Business Values</h3>
      <p class="text-justify text-capitalize  text-left">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere.
       Cras mattis iudicium purus sit amet fermentum.</p>
       <p class="font-weight-bold">Light weight text.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div className="col-sm-4 ">
      <h3>Experiences</h3>        
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
  </div>
</div>



</div>

</>
    );
};
export default About;