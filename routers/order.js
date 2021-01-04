const { Router } = require("express")
const Order = require("../models").order
const ArtWork = require("../models").artWork
const User = require("../models").user
const Gallery = require("../models").gallery

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
            attributes: ["name"],
            },
            User
        ],
        })
        res.status(200).send({message: "ok", orders})
    } catch (error) {
        next(error)
    }
})

module.exports = router;
