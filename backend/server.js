import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true })); //body-parser enabled
app.use(express.json()); //parsing JSON (stringified) objects in the request bodies

async function sendData(formData){
  let transporter = nodemailer.createTransport({
    service: "hotmail",
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

  // transporter.sendMail(mailOptions, (err, info) => {
  //   if (err) {
  //     console.log("Error in sending email", err);
  //     return false;
  //   } else {
  //     console.log("Email sent", info.response);
  //     return true;
  //   }
  // });
}
/*POST Requests*/
app.post("/post-form", (req, res) => {
  const formData = req.body;
  const returnVal=sendData(formData);
  res.send(returnVal);
});

/*GET Requests */
app.get("/", (req, res) => {
  res.send("Hi, Server is running");
});

app.listen(PORT, () => {
  console.log("Server is up and running on PORT=", PORT);
});

export default app;
