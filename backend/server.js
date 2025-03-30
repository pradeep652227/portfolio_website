import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true })); // Body-parser enabled
app.use(express.json()); // Parsing JSON (stringified) objects in the request bodies
app.use(cors());

app.use((req, res, next) => {
  console.info(`Request URL: ${req.protocol}://${req.get('host')}${req.originalUrl} | Method: ${req.method} | Time: ${new Date().toLocaleString()}`);
  next();
})

// Function to create mail transporter
const createTransporter = () => {
  return nodemailer.createTransport({
      service: "gmail",
      auth: {
          user: process.env.USER, // Your Gmail address
          pass: process.env.PASSWORD, // App Password (NOT your normal password)
      },
  });
};

// Function to verify transporter
const verifyTransporter = async (transporter) => {
  try {
      await transporter.verify();
      console.log("Server is ready to send emails");
  } catch (error) {
      console.error("Transporter verification failed:", error);
      throw error;
  }
};

// Function to send email
const sendMail = async (formData) => {
  let transporter = createTransporter();
  await verifyTransporter(transporter);

  let mailOptions = {
      from: `"Pradeep Gaur" <${process.env.USER}>`, // Sender name + email
      to: "ps652227@gmail.com",
      subject: "Portfolio Website Message",
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
  };

  return transporter.sendMail(mailOptions);
};

// POST request to send email
app.post("/send-email", async (req, res) => {
  try {
      const formData = req.body;
      await sendMail(formData);
      res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
      res.status(500).json({ success: false, message: "Failed to send email", error: error.message });
  }
});

// GET request for testing
app.get("/", (req, res) => {
  res.send("Hi, Server is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on PORT=${PORT}`);
});

export default app;