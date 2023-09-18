import React, { useState } from "react";
import image19 from "../images/image19.jpg";

function About() {
  const [readMore, setReadMore] = useState(false);

  const handleClick = () => {
    setReadMore(true);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={image19}
              alt="No image"
              className="img-fluid mt-4"
              style={{ width: "100%", height: "450px" }}
            />
          </div>
          <div className="col-md-6 mt-5 pt-5">
            <h1>
              <span>H</span>ow <span>T</span>ravel <span>A</span>gency{" "}
              <span>W</span>orks
            </h1>
            <p className="mt-3 fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              minima nostrum deleniti laudantium quasi esse magni recusandae a,
              fugit quaerat, non aliquid, incidunt in optio ipsa repellat
              dolorum at sed facilis cupiditate nihil. Corrupti tempora sunt,
              delectus est incidunt fugiat nulla beatae, iusto iure possimus
              ullam quos, consequuntur autem? Magnam veritatis suscipit minima,
            </p>
            {readMore ? (
              <div>
                <h1>
                  <span>H</span>ere <span>I</span>s <span>O</span>ur
                  <span> A</span>dditional
                  <span> C</span>ontent
                </h1>
                <p className="mt-3 fs-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  minima nostrum deleniti laudantium quasi esse magni recusandae
                  a, fugit quaerat, non aliquid, incidunt in optio ipsa repellat
                  dolorum at sed facilis cupiditate nihil. Corrupti tempora
                  sunt, delectus est incidunt fugiat nulla beatae, iusto iure
                  possimus ullam quos, consequuntur autem? Magnam veritatis
                  suscipit minima,
                </p>
              </div>
            ) : (
              <button
                className="btn btn-warning text-light mt-3"
                onClick={handleClick}
              >
                Read More. . .
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
