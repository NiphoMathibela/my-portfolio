import React, { useState } from 'react'

const ContactForm = props => {

  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const formData = (e) => {
    setFormInput(prevData => {
      return {
        ...prevData, [e.target.name]: e.target.value
      }
    })

    console.log(formInput)
  }

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ formInput });
    const response = await fetch("http://localhost:3000/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ formInput }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "sent") {
          alert("Message Sent");
        } else if (resData.status === "failed") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setFormInput({
          email: "",
          name: "",
          message: "",
          subject: ""
        });
      });
  };
 
 

  return (
    <div className='z-20 m-auto h-68 w-full bg-black bottom-28 rounded-lg p-2 max-w-[630px]'>

      <input type="text" name="name" placeholder='Enter your full name' value={formInput.name} onChange={formData} className="w-full rounded-lg h-full bg-transparent p-2 mr-auto block border-solid border-gray border-2 mb-4 focus:outline-none focus:border-green" />


      <input type="email" name="email" placeholder="Enter your email" value={formInput.email} onChange={formData} className="w-full rounded-lg h-full bg-transparent p-2 mr-auto block border-solid border-gray border-2 mb-4 focus:outline-none focus:border-green" />


      <input type="text" name="subject" placeholder='Enter your subject' value={formInput.subject} onChange={formData} className="w-full rounded-lg h-full bg-transparent p-2 mr-auto block border-solid border-gray border-2 mb-4 focus:outline-none focus:border-green" />


      <textarea type="text" name="message" placeholder='Enter your message' value={formInput.message} onChange={formData} className="w-full rounded-lg h-full bg-transparent p-2 mr-auto block border-solid border-gray border-2 mb-4 focus:outline-none focus:border-green" />

      <button className="max-w-36 h-10 rounded-xl p-2 bg-green text-black m-4 font-bold animation-pulse" onClick= {submitEmail}>
        Send
      </button>
    </div>
  )
}

export default ContactForm