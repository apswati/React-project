import React from "react";
import img7 from "./images/img7.png"
import { NavLink } from "react-router-dom";
import "E:/programming/react/Project/myproject/src/style.css"

const Home = () => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>

                                        Grow your business with
                                        <strong className="brand-name"> Anyatam</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        We are the team of talented devloper making websites
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to="/service" className="btn-get-started">Get Started</NavLink>
                                    </div>
                                </div>
                                <div className="col-6  order-1 order-lg-2 header-img">
                                    <div className="row">
                                        <div class="shadow-sm p-3 mb-5 bg-white rounded">Small shadow</div>

                                    <img src={img7} className="img-fluid-animated" alt="Home-img" />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;