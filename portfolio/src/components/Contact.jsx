import React, { useState } from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  //Hide and show form state
  const [show, setShow] = useState(false);

  //Toggle form state
  const toggleForm = (e) => {
    e.preventDefault()
    setShow((prev) => !prev);
  };
  return (
    <div className="bg-black w-10/12 h-38 m-auto rounded-xl text-white text-center p-4 items-center z-10 ">
      <div className="w-11/12 m-auto md:flex  md:items-center md:justify-center">
        <h2 className="font-bold text-xl md:text-3xl md:m-4">Get In Touch</h2>
        <p className="md:m-4">
          Interested in working together? We should queue up a time to chat.
        </p>
        <button className="max-w-36 h-10 rounded-xl p-2 bg-green text-black m-4 font-bold animation-pulse" onClick={toggleForm}>
          {show ? "Close Form" : "Contact me"}
        </button>
      </div>

      {show ? <ContactForm/> : ""}
    </div>
  );
};

export default Contact;
