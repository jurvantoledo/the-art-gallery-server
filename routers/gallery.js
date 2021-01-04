const { Router } = require("express");
const User = require("../models").user
const Gallery = require("../models").gallery

const router = new Router();

router.get("/", async (req, res, next) => {
    try {
        const galleries = await Gallery.findAll({
            include: [User],
            order: [[User, "createdAt", "DESC"]]
        })
        res.status(200).send({message: "ok", galleries})
        
    } catch (error) {
        next(error)
    }
})

module.exports = router;
