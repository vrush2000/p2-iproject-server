const nodemailer = require("nodemailer");

function sendEmail(email) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "hariistimewa.com@gmail.com",
            pass: "uzudccrwuzdxrgtm",
        },
    });

    let mailOptions = {
        from: "hariistimewa.com@gmail.com",
        to: email,
        subject: "Welcome | Hariistimewa.com",
        html: `
        <h1  style="margin:auto; margin-bottom: 10px; width: 100%; text-align: center; white-space: nowrap">
        Sebarkan hari istimewa mu dengan <br> mudah hanya dalam hitungan detik <br> menggunakan undangan digital.
      </h1> 
      <div style="background-image: url('https://hariistimewa.com/_exclusive/themes/standar/thumbnail.jpg'); height: 500px;  width: 600px;
      background-position: center; 
      background-repeat: no-repeat; 
      background-size: cover;
      border-radius: 25px;
      margin:auto;
      ">    
      </div>
    `,
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) throw err;
        console.log("Email sent: " + info.response);
    });
}

module.exports = { sendEmail };
