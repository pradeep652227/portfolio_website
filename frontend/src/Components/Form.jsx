"use client"

import { useState, useEffect } from "react"
import { Button } from "./imports-components"
import emailjs from "@emailjs/browser"

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  useEffect(() => {
    emailjs.init(String(import.meta.env.VITE_EMAIL_PUBLIC_KEY))
  }, [])

  const inputClasses = "border-2 border-slate-400 rounded-md p-2 block w-11/12 sm:w-2/3 md:w-1/3"
  return (
    <form className="space-y-2 flex flex-col items-center" onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Name..."
        name="name"
        value={formData.name}
        onChange={(e) => handleChange(e)}
        className={inputClasses}
        required
      />
      <input
        type="email"
        placeholder="Email..."
        name="email"
        value={formData.email}
        onChange={(e) => handleChange(e)}
        className={inputClasses}
        required
      />
      <textarea
        placeholder="Message..."
        rows="3"
        cols="10"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className={`${inputClasses}`}
      ></textarea>
      <Button className="w-3/12 mx-auto">Submit</Button>
    </form>
  )
  function handleChange(e) {
    const { name, value } = e.target
    console.log(`name= ${name} and value= ${value}`)
    setFormData((prevVal) => ({ ...prevVal, [name]: value }))
  }

  async function submitForm(e) {
    e.preventDefault()
    const serviceId = String(import.meta.env.VITE_SERVICE_ID)
    const templateId = String(import.meta.env.VITE_TEMPLATE_ID)
    try {
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        user_email: formData.email,
        message: formData.message,
      })
      alert("email successfully sent check inbox")
    } catch (error) {
      alert(error.message)
    }
    // try {
    //   const result = await axios.post("/post-form", formData);
    //   if (result) {
    //     console.log("Success!!", result);
    //     window.alert("/Form Details Sent!!");
    //   } else {
    //     window.alert("/Backend Server Error!!");
    //   }
    // } catch (error) {
    //   window.alert(error.message);
    // }
  }
}

