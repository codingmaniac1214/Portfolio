import React from "react";
import "./styles/ContactPage.css";
import { useState } from "react";
// import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = (props) => {
  const notify = () => toast("Thank you for reaching out! :)");

  const nameAlert = () => {
    toast("Enter your name!");
  };
  const emailAlert = () => {
    toast("Enter your email!");
  };

  function handleContact2(e) {
    let body = document.querySelector(".body");
    if (!body.classList.contains("active")) {
    } else {
      props.func();
    }
  }

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMsg, setNewMsg] = useState("");

  // const contactCollectionRef = collection(db, "contact");

  const handleSubmit = async () => {
    if (newName === "") {
      console.log("here");
      nameAlert();
      return;
    }
    if (newEmail === "") {
      emailAlert();
      return;
    }
    if(newMsg === ""){
      toast("Enter your message!");
      return;
    }
    // console.log(newName, newEmail, newMsg);
    // await addDoc(contactCollectionRef, {
    //   name: newName,
    //   email: newEmail,
    //   message: newMsg,
    //   date: new Date().toString().slice(0, 24).replace("GMT+0530 (India Standard Time)", "IST"),
    // });
    notify();
    setNewEmail("");
    setNewMsg("");
    setNewName("");
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

  let a = "aa",
    b = "bb",
    c = "cc",
    e = "ee",
    f = "fff",
    h = "hh",
    i = "ii",
    j = "jj",
    k = "kk",
    l = "ll";

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <main onClick={handleContact2} className="contact fourth">
        <div className="contact-bookmark rounded">
          <b>CONTACT</b>
        </div>
        <div className="contact-inner rounded">
          <h1 className="text-purple-400 ff font-bold  mt-10 h-16 font-mono heading">
            <span onMouseOver={() => letterBounce(a)} className="letter aa">
              G
            </span>
            <span onMouseOver={() => letterBounce(b)} className="letter bb">
              E
            </span>
            <span onMouseOver={() => letterBounce(c)} className="letter cc">
              T
            </span>
            <span>{"\u00A0"}</span>
            <span onMouseOver={() => letterBounce(e)} className="letter ee">
              I
            </span>
            <span onMouseOver={() => letterBounce(f)} className="letter fff">
              N
            </span>
            <span>{"\u00A0"}</span>
            <span onMouseOver={() => letterBounce(h)} className="letter hh">
              T
            </span>
            <span onMouseOver={() => letterBounce(i)} className="letter ii">
              O
            </span>
            <span onMouseOver={() => letterBounce(j)} className="letter jj">
              U
            </span>
            <span onMouseOver={() => letterBounce(k)} className="letter kk">
              C
            </span>
            <span onMouseOver={() => letterBounce(l)} className="letter ll">
              H
            </span>
          </h1>
          <div action="#" className="space-y-8 mx-auto w-1/3 formm ">
            <div>
              <label className="ff block mb-2 text-sm font-bold text-white dark:text-gray-300">
                Name<span className="text-red-400">*</span>
              </label>
              <input
                value={newName}
                onChange={(e) => {
                  setNewName(e.target.value);
                }}
                type="text"
                id="name"
                className="ff textf rounded p-2 text-black w-full"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="ff block mb-2 text-sm font-bold text-white dark:text-gray-300">
                Email<span className="text-red-400">*</span>
              </label>
              <input
                value={newEmail}
                onChange={(e) => {
                  setNewEmail(e.target.value);
                }}
                type="email"
                id="email"
                className="textf ff rounded p-2 text-black w-full"
                placeholder="Enter your Email ID"
                required
              />
            </div>
            <div className="ff sm:col-span-2">
              <label className="block mb-2 text-sm font-bold text-white dark:text-gray-300">
                Your message<span className="text-red-400">*</span>
              </label>
              <textarea
                value={newMsg}
                onChange={(e) => {
                  setNewMsg(e.target.value);
                }}
                id="message"
                rows="6"
                className="textf rounded p-2 text-black w-full"
                placeholder="Leave me a message..."
                required
              ></textarea>
            </div>
            <div className="w-full submit-button ">
              <button
                // onClick={handleSubmit}
                className="button mr-0 p-2 rounded w-24 hover:bg-purple-600 bg-purple-500"
              >
                Submit
              </button>
            </div>
            {/* <img className="contact-gif" src={gif} width={500} height={500} alt="img"></img> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
