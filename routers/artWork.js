const { Router } = require("express")
const ArtWork = require("../models").artWork
const Gallery = require("../models").gallery

const router = new Router()

router.get("/", async (req, res, next) => {
    try {
        const galleries = await Gallery.findAll({
            include: [ArtWork],
            order: [[ArtWork, "createdAt", "DESC"]]
        })
        res.status(200).send({message: "ok", galleries})
    } catch (error) {
        next(error)
    }
})

module.exports = router;
