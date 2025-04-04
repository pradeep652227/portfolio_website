"use client"

import { useState } from "react"
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
const backendUrl = String(import.meta.env.VITE_BACKEND_URL);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [loading, setLoading] = useState(false) // ✅ Loader state

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError("")  
    setSuccessMessage("")  
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.")
      return
    }

    setLoading(true) // ✅ Show loader when submitting

    try {
      const response = await fetch(backendUrl+"/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
  
      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError("Failed to send the message.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false) // ✅ Hide loader when response is received
    }
  }

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Contact Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-indigo-700 mb-4">Let's Connect!</h3>
          <p className="text-gray-600 mb-6">
            Feel free to reach out for any inquiries, collaborations, or opportunities.
          </p>

          {/* Contact Info */}
          <div className="space-y-4">
            <p className="flex items-center space-x-3 text-gray-700">
              <FaEnvelope className="text-indigo-600" />
              <span>
                <a href="mailto:pradeepgaur205@gmail.com" className="hover:text-indigo-600">
                  pradeepgaur205@gmail.com
                </a>
              </span>
            </p>
            <p className="flex items-center space-x-3 text-gray-700">
              <FaMapMarkerAlt className="text-purple-600" />
              <span>Jaipur, Rajasthan, India</span>
            </p>
            <p className="flex items-center space-x-3 text-gray-700">
              <FaLinkedin className="text-indigo-600" />
              <a
                href="https://www.linkedin.com/in/pradeep-gaur-0384331a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                LinkedIn Profile
              </a>
            </p>
            <p className="flex items-center space-x-3 text-gray-700">
              <FaGithub className="text-gray-800" />
              <a
                href="https://github.com/pradeep652227"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                GitHub Profile
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-indigo-700 mb-4">Send a Message</h3>
          {error && <p className="text-red-500 mb-3">{error}</p>}
          {successMessage && <p className="text-green-500 mb-3">{successMessage}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-indigo-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-indigo-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-indigo-500"
                placeholder="Subject"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-indigo-500"
                rows="4"
                placeholder="Your Message"
                required
              />
            </div>

            {/* Button with Loader */}
            <button
              type="submit"
              className="w-full flex justify-center items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded hover:from-indigo-700 hover:to-purple-700 transition duration-300 disabled:opacity-50"
              disabled={loading} // Disable button when loading
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 mr-2 border-4 border-white border-t-transparent rounded-full" viewBox="0 0 24 24"></svg>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
