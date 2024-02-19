const router = require("express").Router()
const Category = require("../model/category")

router.post("/", async (req, res) => {
  const newCat = new Category(req.body)
  try {
    const savedCat = await newCat.save()
    res.status(200).json(savedCat)
  } catch (error) {
    res.status(500).json(error)
  }
})
/* {
    "name":"sport" 
} */

// get all cat
router.get("/", async (req, res) => {
  try {
    const cat = await Category.find()
    res.status(200).json(cat)
  } catch (error) {
    res.status(500).json(error)
  }
})
router.get("/:id", async (req, res) => {
  try {
    console.log(req.params.id)
    const posts = await Post.find({categories:id})
    console.log(posts)
    res.status(200).json(posts)
  } catch (error) {
    res.status(404).json(error)
  }
})
module.exports = router
