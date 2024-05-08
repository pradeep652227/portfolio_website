import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true })); //body-parser enabled
app.use(express.json()); //parsing JSON (stringified) objects in the request bodies

/*POST Requests*/
app.post("/post-form", async (req, res) => {
  const formData = req.body;
  let transporter = nodemailer.createTransport({
    port:465,
    host:"smtp-mail.outlook.com",
    secure:true,
    auth: {
      user: String(process.env.USER),
      pass: String(process.env.PASSWORD),
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
});

  let mailOptions = {
    from: "Pradeep Gaur<ps652227@hotmail.com>",
    to: "ps652227@gmail.com",
    subject: "Portfolio Website Message",
    text: `Name= ${formData.name}\nEmail= ${formData.email}\nMessage= ${formData.message}`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err);
            reject(err);
        } else {
            console.log(info);
            resolve(info);
        }
    });
});

res.send(true);

  // transporter.sendMail(mailOptions, (err, info) => {
  //   if (err) {
  //     console.log("Error in sending email", err);
  //     return false;
  //   } else {
  //     console.log("Email sent", info.response);
  //     return true;
  //   }
  // });

});

/*GET Requests */
app.get("/", (req, res) => {
  res.send("Hi, Server is running");
});

app.listen(PORT, () => {
  console.log("Server is up and running on PORT=", PORT);
});

export default app;
