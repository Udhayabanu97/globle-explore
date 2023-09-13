import React from "react";
import { useState } from "react";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [comments, setComments] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", {
      firstName,
      lastName,
      email,
      country,
      comments,
      agree,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setCountry("");
    setComments("");
    setAgree(false);
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setCountry("");
    setComments("");
    setAgree(false);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h1 className="text-center">
              <span>C</span>ontact <span>U</span>s
            </h1>
            <form className="contact-control" onSubmit={handleSubmit}>
              <label className="form-label mx-1 mt-3">First Name :</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="form-control input-sizing mt-2 pt-3"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Enter Your First Name"
              />
              <label className="form-label mt-3 mx-1">Last Name :</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="form-control input-sizing mt-2 pt-3"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Enter Your Last Name"
              />
              <label className="form-label mt-3 mx-1">Email :</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control input-sizing mt-2 pt-3"
                aria-describedby="inputGroup-sizing-lg"
                placeholder="Enter Your Email"
              />
              <label className="form-label mt-3 mx-1">Country :</label>
              <select
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="form-select input-sizing form-select-lg mb-3"
                aria-label="Large select example"
              >
                <option value="" selected className="text-secondary fs-5">
                  Enter Your Country
                </option>
                <option value="1">Australia</option>
                <option value="2">Albania</option>
                <option value="3">Algeria</option>
                <option value="4">Argentina</option>
                <option value="5">Belgium</option>
                <option value="6">Brazil</option>
                <option value="7">China</option>
                <option value="8">Colombia</option>
                <option value="9">Denmark</option>
                <option value="10">Egypt</option>
                <option value="11">Finland</option>
                <option value="12">France</option>
                <option value="13">Germary</option>
                <option value="14">Greece</option>
                <option value="15">Hungary</option>
                <option value="16">India</option>
                <option value="17">Indonasia</option>
                <option value="18">Japan</option>
                <option value="19">Korea</option>
                <option value="20">Maldives</option>
                <option value="21">Malaysia</option>
                <option value="22">New Zealand</option>
                <option value="23">Philipines</option>
              </select>
              <div className="my-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <label className="form-label mx-1">Comments :</label>
              <textarea
                cols="80"
                rows="5"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="form-control input-sizing my-2 pt-3"
                placeholder="Enter Your comments"
              ></textarea>
              <div className="my-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Please tick this box if you agree all the above details
                </label>
              </div>
              {/* <div className="d-grid gap-4 d-md-block mb-3"> */}
              <button className="btn btn-primary mb-4" type="submit">
                Submit Details
              </button>
              <button
                className="btn btn-primary mb-4 mx-3"
                type="reset"
                onClick={handleReset}
              >
                Reset
              </button>
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
