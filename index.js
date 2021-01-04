const express = require("express");
const corsMiddleware = require("cors")
const authRouter = require("./routers/auth")
const galleryRouter = require("./routers/gallery")
const orderRouter = require("./routers/order")
const artWorkRouter = require("./routers/artWork")
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 4000;


const app = express()

app.use(corsMiddleware())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

if (process.env.DELAY) {
    app.use((req, res, next) => {
      setTimeout(() => next(), parseInt(process.env.DELAY));
    });
  }

  app.use("/", authRouter);
  app.use("/gallery", galleryRouter)
  app.use("/order", orderRouter)
  app.use("/work", artWorkRouter)

// default is port 4000
  app.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}`)
  })