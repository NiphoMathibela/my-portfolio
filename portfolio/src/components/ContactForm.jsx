import React, { useState } from 'react'
import loader from "../assets/loader.gif"
import Alert from './Alert'

const ContactForm = props => {

  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [isLoading, setIsLoading] = useState(false)
  const [errMessage, setErrMessage] = useState(false)

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
    if (formInput.name || formInput.email || formInput.subject || formInput.message != "") {
      setIsLoading(true)
      console.log({ formInput });
      const response = await fetch("https://nipho-mailapi.onrender.com/send", {
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
            alert("Message Sent")
            setErrMessage(false)

            setIsLoading(false)
          } else if (resData.status === "failed") {
            alert("Message failed to send");
            setIsLoading(false)
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
    } else {
      setErrMessage(true)
      console.log("Thats tuff")
    }
  };

  const handleSubmit = () => {
    if (formInput.name || formInput.email || formInput.subject || formInput.message != "") {
      submitEmail()
    } else {
      console.log(formInput.name, formInput.email, formInput.message, formInput.subject)

    }
  }



  return (
    <div className='z-20 m-auto h-68 w-full bg-black bottom-28 rounded-lg p-2 max-w-[630px]'>

      {errMessage ? <div classNmae="w-full mx-auto text-center my-4"><p className="text-green text-lg">Please fill in all the input boxes</p></div> : ""}
      <input type="text" name="name" placeholder='Enter your full name' value={formInput.name} onChange={formData} className="w-full rounded-lg h-full bg-transparent p-2 mr-auto block border-solid border-gray border-2 mb-4 focus:outline-none focus:border-green" />


      <input type="email" name="email" placeholder="Enter your email" value={formInput.email} onChange={formData} className="w-full rounded-lg h-full bg-transparent p-2 mr-auto block border-solid border-gray border-2 mb-4 focus:outline-none focus:border-green" />


      <input type="text" name="subject" placeholder='Enter your subject' value={formInput.subject} onChange={formData} className="w-full rounded-lg h-full bg-transparent p-2 mr-auto block border-solid border-gray border-2 mb-4 focus:outline-none focus:border-green" />


      <textarea type="text" name="message" placeholder='Enter your message' value={formInput.message} onChange={formData} className="w-full rounded-lg h-full bg-transparent p-2 mr-auto block border-solid border-gray border-2 mb-4 focus:outline-none focus:border-green" />

      <button className="min-w-16 max-w-36 h-10 rounded-xl p-2 bg-green text-black m-4 font-bold animation-pulse" onClick={submitEmail} disabled={isLoading}>
        {isLoading ? <span><img src={loader} className="h-6 w-6 inline-block mx-auto mr-2" />Sending...</span> : "Send"}
      </button>
    </div>
  )
}

export default ContactForm