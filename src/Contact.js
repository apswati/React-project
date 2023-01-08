import React, { useState } from "react";

const Contact=()=>{
    const[data,setData]=useState({
        fullname:'',
        phone:'',
        email:'',
        message:''
    });
    const InputEvent=(Event)=>{
        const{ name,value}=Event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                 [name]:value,
            };
        });
    };
    const formSubmit=()=>{};
    return(
        <>
       <div className="my-5 bg-info ">
        <h1 className="text-center">Contact Us</h1>
       
       <div className="container contact_div ">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text"
   className="form-control" 
  id="exampleFormControlInput1"
name="fullname"
value={data.fullname}
onChange={InputEvent}
   placeholder="Enter Your Name"
   />
  </div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
  <input type="Number" className="form-control" 
  id="exampleFormControlInput1"
  name="phone"
  value={data.phone}
  onChange={InputEvent}
   placeholder="Mobile Number"
   />
  </div>
  <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
  <input type="email" className="form-control" 
  id="exampleFormControlInput1"
  name="email"
value={data.email}
onChange={InputEvent}
   placeholder="Enter Your Email"
   />
  </div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
  name="message"
  value={data.message}
  onChange={InputEvent}
  ></textarea>
</div>
<div className="col-12">
    <button className="btn btn-outline-primary " type="submit">Submit form</button>
  </div>
                </form>
            </div>
            </div>
        </div>
       
       </div>
      
        </>
    );
};

export default Contact;