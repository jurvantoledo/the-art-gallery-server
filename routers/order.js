const { Router } = require("express")
const Order = require("../models").order
const ArtWork = require("../models").artWork
const User = require("../models").user
const Gallery = require("../models").gallery
const OrderArtWork = require("../models").orderArtWork;


const router = new Router()

router.get("/", async (req, res, next) => {
    try {
        const orders = await Order.findAll({
            include: [ArtWork],
            order: [[ArtWork, "createdAt", "DESC"]]
        })
        res.status(200).send({message: "ok", orders})   

    } catch (error) {
        next(error)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const orders = await Order.findByPk(id, {
            include : [
            {
            model: ArtWork,
            include: [{ model: Gallery, attributes: ["name"] }],
            attributes: ["name", "image"],
            },
            User
        ],
        })
        res.status(200).send({message: "ok", orders})
    } catch (error) {
        next(error)
    }
})

router.post("/", async (req, res, next) => {
    try {
      // userId
      // what he's ordering? [1, 3, 7] = productsIds
      const { userId, artWorkIds } = req.body;
      console.log(req.body);
      const newOrder = await Order.create({ userId });
      // tying together this new order with the products it needs.
  
      const newOrderArtWorks = artWorkIds.map(
        async id =>
          await OrderArtWork.create({ artWorkId: id, orderId: newOrder.id })
      ); // [Promise, Promise, Promise]
  
      await Promise.all(newOrderArtWorks);
  
      res.send(newOrder);
    } catch (e) {
      next(e);
    }
  });

module.exports = router;
