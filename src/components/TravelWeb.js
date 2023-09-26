import React, { useState } from "react";
import "./TravelWeb.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faUtensils,
  faHotel,
  faBullhorn,
  faEarthAsia,
  faPlane,
  faPersonHiking,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faYoutube,
  faInstagram,
  faPinterest,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import image6 from "../images/image6.jpeg";
import image7 from "../images/image7.jpeg";
import image8 from "../images/image8.jpeg";
import image9 from "../images/image9.jpeg";
import image10 from "../images/image10.jpeg";
import image11 from "../images/image11.jpeg";
import image12 from "../images/image12.jpeg";
import image13 from "../images/image13.jpeg";
import image14 from "../images/image14.jpeg";
import image15 from "../images/image15.jpeg";
import image16 from "../images/image16.jpeg";
import image17 from "../images/image17.jpeg";
import image18 from "../images/image18.jpeg";
import { Link } from "react-router-dom";

function TravelWeb() {
  const [place, setPlace] = useState("");
  const [members, setMembers] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      place,
      members,
      startDate,
      endDate,
      details,
    });
    setPlace("");
    setMembers("");
    setStartDate("");
    setEndDate("");
    setDetails("");
  };

  const handleClick = (cardTitle) => {
    alert(`Congrats! Your package for ${cardTitle} is Booked`);
  };

  return (
    <>
      <div className="container-fluid p-0 m-0">
        <div className="row content">
          <div className="col-md-12 text-center my-3 py-5 fs-3 display-1">
            <h1>Welcome to World</h1>
            <h3 className="text-success pt-3">Visit many places</h3>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              nobis!
            </p>
            <button type="submit" className="btn btn-primary fs-4 mt-2">
              Browse now
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5 className="text-center travel-title">
              <span>B</span>ook
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              src={image6}
              className="img-fluid mt-4"
              alt="error"
              style={{ width: "100%", height: "550px" }}
            />
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="Place"
                name="Place"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="form-control mt-4 pt-2"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Enter Place"
              />
              <input
                type="text"
                id="members"
                name="Members"
                value={members}
                onChange={(e) => setMembers(e.target.value)}
                className="form-control mt-4 pt-3"
                placeholder="How Many"
              />
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="form-control mt-4 pt-3"
              />
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="form-control mt-4 pt-3"
              />
              <textarea
                cols="80"
                rows="8"
                id="details"
                name="details"
                className="form-control mt-4 pt-3"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Enter your Name and Details"
              ></textarea>
              <button type="submit" className="btn btn-primary mt-3">
                Book Now
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <h5 className="text-center travel-title my-5">
            <span>P</span>ackages
          </h5>
        </div>
        <div className="row packages">
          <div className="col-md-4">
            <div className="card">
              <img src={image7} alt="error" />
              <div className="card-body">
                <div className="card-title fs-3">United Kingdom</div>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Obcaecati, sapiente
                </p>
                <h5>price: $500</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick("United Kingdom")}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={image8} alt="error" />
              <div className="card-body">
                <div className="card-title fs-3">France</div>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Obcaecati, sapiente
                </p>
                <h5>price: $500</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick("France")}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={image9} alt="error" />
              <div className="card-body">
                <div className="card-title fs-3">Pakistan</div>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Obcaecati, sapiente
                </p>
                <h5>price: $500</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick("Pakistan")}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 packages">
          <div className="col-md-4">
            <div className="card">
              <img src={image10} alt="error" />
              <div className="card-body">
                <div className="card-title fs-3">Italy</div>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Obcaecati, sapiente
                </p>
                <h5>price: $500</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick("Italy")}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={image11} alt="error" />
              <div className="card-body">
                <div className="card-title fs-3">India</div>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Obcaecati, sapiente
                </p>
                <h5>price: $500</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick("India")}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={image12} alt="error" />
              <div className="card-body">
                <div className="card-title fs-3">United States</div>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Obcaecati, sapiente
                </p>
                <h5>price: $500</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick("United State")}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h5 className="text-center travel-title my-5">
              <span>S</span>ervices
            </h5>
          </div>
        </div>
        <div className="row services">
          <div className="col-md-4">
            <div className="card">
              <FontAwesomeIcon className="services-icon" icon={faHotel} />
              <div className="card-body text-center">
                <h3>Affortable Hotel</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <FontAwesomeIcon className="services-icon" icon={faUtensils} />
              <div className="card-body text-center">
                <h3>Food and Drink</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <FontAwesomeIcon className="services-icon" icon={faBullhorn} />
              <div className="card-body text-center">
                <h3>Safety Guide</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 services">
          <div className="col-md-4">
            <div className="card">
              <FontAwesomeIcon className="services-icon" icon={faEarthAsia} />
              <div className="card-body text-center">
                <h3>Around The World</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <FontAwesomeIcon className="services-icon" icon={faPlane} />
              <div className="card-body text-center">
                <h3>Fastest Travel</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <FontAwesomeIcon
                className="services-icon"
                icon={faPersonHiking}
              />
              <div className="card-body text-center">
                <h3>Adventures</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h5 className="text-center travel-title my-5">
              <span>G</span>allery
            </h5>
          </div>
        </div>
        <div className="row gallery">
          <div className="col-md-4">
            <div className="card">
              <img src={image13} alt="error" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={image14} alt="error" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={image15} alt="error" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="row my-5 gallery">
          <div className="col-md-4">
            <div className="card">
              <img src={image16} alt="error" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={image17} alt="error" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={image18} alt="error" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row footer ">
          <div className="col-md-12 text-center py-4">
            <h2>Travel</h2>
            <div className="py-2 rounded-circle">
              <FontAwesomeIcon
                icon={faTwitter}
                className="brand-icon rounded-circle"
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className="brand-icon rounded-circle"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="brand-icon rounded-circle"
              />
              <FontAwesomeIcon
                icon={faPinterest}
                className="brand-icon rounded-circle"
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="brand-icon rounded-circle"
              />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae, omnis.
            </p>
            <p className="logo-shadow d-block fs-5">
              <FontAwesomeIcon
                className="text-dark fs-5"
                icon={faArrowRightLong}
              />
              <Link to="/contact" style={{ color: "green" }}>
                <span className="text-danger"> G</span>lobe
                <span className="text-danger"> E</span>xplore
              </Link>
            </p>
            <p className="text-warning">
              &copy; Copyright. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TravelWeb;
