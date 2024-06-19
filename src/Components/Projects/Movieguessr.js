import React from 'react'
import { useState } from "react";
import guessthemovie from "../../Images/guess-the-movie.webp";
import "./Movieguessr.css";


const Movieguessr = () => {
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
                    <b>Brain Tumor Diagnosis using Explainable AI</b>
                  </h5>
                  <p className="ff text-black mb-2 whitefont">
                  Developed a CNN model enhanced with explainable AI (XAI) techniques for brain tumor diagnosis using TensorFlow, Keras, Grad-CAM etc. The model architecture consists of multiple convolutional layers, followed by fully connected layers for classification. The integration of XAI techniques like Grad-CAM and its variants enables the generation of the significant regions in the input images, thereby making the model's decisions interpretable.
                  </p>
                </div>
              </div>
  
              {Show ? (
                <div className="animate-card">
                  {/* <iframe
                  loading="lazy"
                    className="rounded-t-lg"
                    width="100%"
                    height="450"
                    src="https://chirag2907.github.io/Guess-the-movie/"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Text Analyzer"
                  ></iframe> */}
                  
                  <div className="bg-white txtasum rounded-b">
                  <div className="but ff text-black">
                    {/* <div className="gotoweb" onClick={()=>window.open('https://chirag2907.github.io/Guess-the-movie/', '_blank')}>
                      Visit Website
                    </div> */}
                    <div className="gotoweb" onClick={()=>window.open('https://github.com/codingmaniac1214/Brain_tumor_diagnosis_with_explainable_ai', '_blank')}>
                      Go to Github
                    </div>
                  </div>
                  </div>
                </div>
              ) : null}
      </div>
    )
  }

export default Movieguessr