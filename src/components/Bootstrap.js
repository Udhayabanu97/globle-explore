import React, { useEffect } from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";

const Bootstrap = () => {
  useEffect(() => {
    const data = async () => {
      const response = fetch("https://jsonplaceholder.typicode.com/posts");
      console.log("response", response);
      console.log("object");
    };
    data();
  }, []);
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                Features
              </a>
              <a class="nav-link" href="#">
                About Us
              </a>
              <a class="nav-link active" aria-active="true">
                Benifits
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <p className="text-info fs-3">Be the first</p>
            <h1 className="text-primary">
              Are you a freelancer or looking for a performer?
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit Ipsum
              cumque voluptas
            </p>
            <button className="btn btn-primary active">
              Be the first to know
            </button>
          </div>
          <div className="col-md-3">
            <img
              src={image1}
              alt="No image found"
              className="img-fluid d-flex justify-contents-center"
              style={{ height: "220px" }}
            />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-4">
            <p className="text-info fs-4">Our advantages</p>
            <h1 className="text-primary">What we can do</h1>
            <img src={image2} alt="No image found" className="img-fluid" />
          </div>
          <div className="col-md-8">
            <p className="text-info fs-4 my-4">Our motive</p>
            <h1 className="text-primary">
              This platform will usefull for many parties
            </h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              ducimus corporis voluptates asperiores incidunt suscipit deleniti
              repellat dicta ad aut.ducimus. Facere facilis excepturi iste quasi
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <p className="text-info fs-4">Our goal</p>
            <h1 className="text-primary">
              Coorporation of business with specialists
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est earum
              aliquam fugit laborum ducimus. Facere facilis excepturi iste quasi
            </p>
          </div>
          <div className="col-md-4 my-2">
            <img
              src={image3}
              alt="No image found"
              className="img-fluid"
              style={{ height: "180px" }}
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-4">
            <img
              src={image4}
              alt="No image found"
              className="img-fluid"
              style={{ height: "190px" }}
            />
          </div>
          <div className="col-md-8">
            <p className="text-info fs-3">Be the first</p>
            <h1 className="text-primary">
              We will announce the launch of the platform
            </h1>
            <form className="form-group">
              <div className="input-group">
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Enter your email"
                  className="form-control"
                />
                <button type="submit" className="btn btn-primary active">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-dark text-light"
        style={{ height: "212px" }}
      >
        <footer className="row">
          <div className="col-md-12 mt-4">
            <ul
              className="list-group list-group-horizontal"
              style={{ listStyle: "none" }}
            >
              <li className="list-group-items mx-5 pe-5 fs-3">Find</li>
              <li className="list-group-items pe-5 my-2">About Us</li>
              <li className="list-group-items pe-5 my-2">Benifits</li>
              <li className="list-group-items pe-5 my-2">Registration</li>
              <li className="list-group-items pe-5 my-2">Privacy Policy</li>
              <li className="list-group-items pe-5 my-2">Contacts</li>
            </ul>
            <h6 className="mt-5 d-flex justify-content-center">
              <span className="text-secondary">
                For more details* contact us!--
              </span>

              <span className="text-danger"> banumadhiudhaya@gamil.com</span>
            </h6>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Bootstrap;
