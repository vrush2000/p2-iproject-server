if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()    
}
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors');
const router = require('./routes/indexRouter.js');
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}));

cloudinary.config({
    cloud_name: "djqiyp5ws",
    api_key: "535698599114548",
    api_secret: "EhS9PYhZH2eFAuufI7DkzLziaHU",
  });

  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "hariistimewa",
    },
  });

  const upload = multer({ storage: storage });
  
  app.post("/", upload.single("image"), async (req, res) => {
    
    let imgUrl = req.file.path 
    let data = await IdentityUser.create({
        image : imgUrl,
        phoneNumber,
        TransactionId
      })
      res.status(201).json(data)

  });


app.use(router)


app.listen(port, () => {
    console.log(`Server run on port ${port}`)
})