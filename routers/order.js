const { Router } = require("express")
const Order = require("../models").order
const ArtWork = require("../models").artWork

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

module.exports = router;
