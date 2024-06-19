import React from "react";
import { useState} from "react";
import guessthemovie from "../../Images/weather.webp";
import "./Weather.css";

const Weather = () => {
  const [Show, setShow] = useState(false);

  const textAnalyzerClicked = () => {
    setShow(!Show);
  };

  return (
    <div>
      {Show ? (
        <div onClick={textAnalyzerClicked} className="blurMe"></div>
      ) : null}
      <div onClick={textAnalyzerClicked} class="cardd rounded max-w-sm ">
        {/* <img
          loading="lazy"
          className="rounded-t w-full"
          src={guessthemovie}
          width={100}
          alt="Sunset in the mountains"
        /> */}
        <div className="p-3">
          <h5 className="ff font-black text-gray-900 text-xl font-medium mb-2 fontweight">
            <b>VyamShala Fitness</b>
          </h5>
          <p className="ff text-black mb-2 whitefont">
          Developed VyamShala Fitness wellness site emphasizing brand and fitness accessibility
Technologies Used: HTML, CSS, JavaScript, React.js, Node.js
Implemented front-end development to ensure an engaging user experience. (click to view live link)

          </p>
        </div>
      </div>

      {Show ? (
        <div className="animate-card-weather">
          {/* <iframe
            loading="lazy"
            className="rounded-t-lg"
            width="100%"
            height="450"
            src="https://chirag2907.github.io/weather-forecast/"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Text Analyzer"
          ></iframe> */}

          <div className="bg-white txtasum rounded-b">
            <div className="but ff text-black">
              <div
                className="gotoweb"
                onClick={() =>
                  window.open(
                    "https://vyayamshalafitness.com/",
                    "_blank"
                  )
                }
              >
                Visit Website
              </div>
              <div
                className="gotoweb"
                onClick={() =>
                  window.open(
                    "https://github.com/codingmaniac1214/gym-fitness.git",
                    "_blank"
                  )
                }
              >
                Go to Github
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
