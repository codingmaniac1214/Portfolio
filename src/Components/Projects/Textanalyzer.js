import React from "react";
import { useState } from "react";
import textAnalyzer from "../../Images/text-analyzer.webp";
import "./Textanalyzer.css";

const Textanalyzer = (props) => {
  const [Show, setShow] = useState(false);

  const textAnalyzerClicked = () => {
    setShow(!Show);
  };

  return (
    <div>
      {Show ? (
        <div onClick={textAnalyzerClicked} className="blurMe"></div>
      ) : null}
      <div onClick={textAnalyzerClicked} className="cardd rounded max-w-sm ">
        {/* <img
          loading="lazy"
          className="rounded-t w-full"
          src={textAnalyzer}
          width={100}
          alt="Sunset in the mountains"
        /> */}
        <div className="p-3">
          <h5 className="ff font-black text-gray-900 text-xl font-medium mb-2 fontweight">
            <b>Capital Conquest</b>
          </h5>
          <p className="ff text-black mb-2 whitefont">
          Developed a Monopoly-inspired game incorporating key economic concepts, 5+ featuring components such as the Game Board, Players, Houses, Hotels, Bank, and Chance Cards, with transaction and wealth management systems for immersive gameplay and educational value. Technologies Used: HTML, CSS, JavaScript.
          </p>
        </div>
      </div>

      {Show ? (
        <div className="showcard">
          {/* <iframe
            loading="lazy"
            className="rounded-t-lg"
            width="100%"
            height="450"
            src="https://chirag2907.github.io/Text-Analyzer/"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Text Analyzer"
          ></iframe> */}
          <div className="bg-white txtasum rounded-b">
            <div className="but ff text-black">
              {/* <div
                className="gotoweb"
                onClick={() =>
                  window.open(
                    "https://chirag2907.github.io/Text-Analyzer/",
                    "_blank"
                  )
                }
              >
                Visit Website
              </div> */}
              <div
                className="gotoweb"
                onClick={() =>
                  window.open(
                    "https://github.com/codingmaniac1214/Capital_Conquest",
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

export default Textanalyzer;
