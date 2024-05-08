import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true })); //body-parser enabled
app.use(express.json()); //parsing JSON (stringified) objects in the request bodies

/*POST Requests*/
app.post("/post-form", (req, res) => {
  const formData = req.body;
  let transporter = nodemailer.createTransport({
    service:"hotmail",
    auth: {
      user: String(process.env.USER),
      pass: String(process.env.PASSWORD),
    },
  });

  let mailOptions = {
    from: "Pradeep Gaur<ps652227@hotmail.com>",
    to: "ps652227@gmail.com",
    subject: "Portfolio Website Message",
    text: `Name= ${formData.name}\nEmail= ${formData.email}\nMessage= ${formData.message}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("Error in sending email", err);
      res.send(false);
    } else {
      console.log("Email sent", info.response);
      res.send(true);
    }
  });
});

app.listen(PORT, () => {
  console.log("Server is up and running on PORT=",PORT);
});
