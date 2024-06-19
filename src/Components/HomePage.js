import React from "react";
import "./styles/HomePage.css";
import pic from "../Images/pic.webp";
import github from "../Images/github.webp";
import linkedin from "../Images/linkedin.webp";
import insta from "../Images/instagram.webp";

const HomePage = (props) => {
  const handleHome2 = (e) => {
    let body = document.querySelector(".body");
    if (!body.classList.contains("active")) {
    } else {
      props.func();
    }
  };

  const letterBounce = (x) => {
    let letter = document.querySelector("." + x);
    if (letter.classList.contains("jelly")) {
      return;
    }
    letter.classList.add("jelly");
    setTimeout(() => {
      letter.classList.remove("jelly");
    }, 1000);
  };
  let a = "a",
    b = "b",
    c = "c",
    d = "d",
    e = "e",
    f = "f",
    g = "g",
    h = "h",
    i = "i",
    j = "j",
    k = "k",
    l = "l",
    m = "m",
    n = "n",
    o = "o";

  return (
    <div>
      <main onClick={handleHome2} className="home first">
        <div className="home-bookmark rounded">
          <b>HOME</b>
        </div>
        <div className="home-inner">
          <div className="textt">
            <h1 className="title text-7xl mt-5">
              <span onMouseOver={() => letterBounce(a)} className="letter a">
                H
              </span>
              <span onMouseOver={() => letterBounce(b)} className="letter b">
                e
              </span>
              <span onMouseOver={() => letterBounce(c)} className="letter c">
                l
              </span>
              <span onMouseOver={() => letterBounce(d)} className="letter d">
                l
              </span>
              <span onMouseOver={() => letterBounce(e)} className="letter e">
                o
              </span>
              <span onMouseOver={() => letterBounce(f)} className="letter f">
                !
              </span>
              <span>{"\u00A0"}</span>
              <span
                onMouseOver={() => letterBounce(g)}
                className="letter g text-purple-400"
              >
                I
              </span>
              <span
                onMouseOver={() => letterBounce(h)}
                className="letter h text-purple-400"
              >
                '
              </span>
              <span
                onMouseOver={() => letterBounce(i)}
                className="letter i text-purple-400"
              >
                m
              </span>
              <span>{"\u00A0"}</span>
              <span
                onMouseOver={() => letterBounce(j)}
                className="letter j text-purple-400"
              >
                N
              </span>
              <span
                onMouseOver={() => letterBounce(k)}
                className="letter k text-purple-400"
              >
                i
              </span>
              <span
                onMouseOver={() => letterBounce(l)}
                className="letter l text-purple-400"
              >
                m
              </span>
              <span
                onMouseOver={() => letterBounce(m)}
                className="letter m text-purple-400"
              >
                i
              </span>
              <span
                onMouseOver={() => letterBounce(n)}
                className="letter n text-purple-400"
              >
                s
              </span>
              <span
                onMouseOver={() => letterBounce(o)}
                className="letter o text-purple-400"
              >
                h
              </span>
            </h1>

            <h4 className="tagline ff font-bold text-3xl text-purple-400">
              A web developer & Competitive Programmer{" "}
            </h4>
            <div className="ff text-xl  desc">
              I am an undergraduate student at Netaji Subhas University of
              Technology, pursuing bachelors in Information Technology.{" "}
              <br/>I'm a full-stack web developer and a competitive
              programmer.
              <br/>I also have a keen interest in Machine Learning and Data Science as well.
            </div>

            <div className="flex gap-4 icons mt-5 justify-center w-50">
              <img
                loading="eager"
                draggable={false}
                className="links"
                onClick={() =>
                  window.open("https://github.com/codingmaniac1214", "_blank")
                }
                src={github}
                width={40}
                alt="img"
              />
              <img
                loading="eager"
                draggable={false}
                className="links"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/nimish-gupta-45436629a/",
                    "_blank"
                  )
                }
                src={linkedin}
                width={40}
                alt="img"
              />
              <img
                loading="eager"
                draggable={false}
                className="links"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/nimish.gupta13/",
                    "_blank"
                  )
                }
                src={insta}
                width={40}
                alt="img"
              />
            </div>
          </div>
          <img
            draggable={false}
            loading="eager"
            className="border pfp rounded"
            src={pic}
            width={250}
            alt="pic"
          />
          <div className="rectangle border-solid border-2 border-purple-400  h-96 w-60"></div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
