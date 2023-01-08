import React from "react";
import "E:/programming/react/Project/myproject/src/style.css";
import img1 from "./images/img1.jpg"
const Service=()=>{
    return(
        <>
       <div className="my-5">
        <h1 className="text-center">Our Services</h1>
       </div>
       <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-4">
                    <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
  <img src={img1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Custom Software Development</h5>
    <p className="card-text">Use a reliable help desk and customer self-services to respond to clients faster and relieve employees of routine work.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
  <img src={img1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Web Application Development</h5>
    <p className="card-text">Firebase provides tools to grow your app and business, for startups & global enterprises. </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
  <img src={img1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Mobile Application Development</h5>
    <p className="card-text">Low Cost. Expert Team Members. Flexible Payment Plans. Timely Deliver, Affordable Prices. Shopping Apps, Educational App.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
  <img src={img1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Software Prototyping</h5>
    <p className="card-text">Software prototyping is the activity of creating prototypes of software applications, i.e., incomplete versions of the software program being developed</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
  <img src={img1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Cloud Consulting</h5>
    <p className="card-text">Cloud consulting is the process where an organization leverages cloud consultants to build, operate, manage and maintain an optimal cloud environment.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                    </div>
                    <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
  <img src={img1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Quality Assurance</h5>
    <p className="card-text">Quality assurance (QA) is the term used in both manufacturing and service industries to describe the systematic efforts taken to ensure that the product(s) </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
                    </div>
                </div>
            </div>
        </div>
       </div>
           
        </>
 );
            };
export default Service;