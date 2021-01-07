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

router.delete("/:id", async (req, res) => {
    try {
      const galleryId = req.params.id
      const toDelete = await ArtWork.findByPk(galleryId)

      if(!toDelete) {
        res.status(404).send("art work not found")
      }
  
      const deleted = await toDelete.destroy()
      res.json(deleted)
    } catch (error) {
      next(error)
    }
  })

module.exports = router;
