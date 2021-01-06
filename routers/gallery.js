const { Router } = require("express");
const User = require("../models").user
const Gallery = require("../models").gallery
const ArtWork = require("../models").artWork

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

router.get("/:id", async (req, res) => {
    const { id } = req.params;
  
    console.log(id);
    if (isNaN(parseInt(id))) {
      return res.status(400).send({ message: "gallery id is not a number" });
    }
  
    const galleries = await Gallery.findByPk(id, {
      include: [ArtWork],
      order: [[ArtWork, "createdAt", "DESC"]]
    });
  
    if (galleries === null) {
      return res.status(404).send({ message: "Gallery not found" });
    }
  
    res.status(200).send({ message: "ok", galleries });
  });

module.exports = router;
