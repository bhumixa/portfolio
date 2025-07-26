const express = require("express");
const router = express.Router();

const {
  addCategory,
  updateCategory,
  deleteCategory,
  getAllCategory,
  getCategoryById,
} = require('../handlers/category-handler.js');

// create new category 
router.post('/create', async (req, res) => {
 if (!req.body.name) {
  res.status(404).send("Category name required")
 }
   try {
     let addRes = addCategory(req.body.name);
     res.status(200).send({
       message: 'Category created successfully.',
       data: addRes,
     });
   } catch (err) {
    console.log(err);
     res.status(500).json({ message: 'Internal Server' });
   }  
});

//update category by ID
router.put('/:id', async (req, res) => {
 const categoryId = req.params.id;
 const name = req.body.name;
 try {
   if (!name) {
     res.status(404).send('Category is missing');
   }
   if (!categoryId) {
     res.status(404).send('CategoryId is missing');
   }
  updateCategory(categoryId, name);
   res.status(200).send({ message: 'Category Updated' });
  
 } catch (err) {
   console.log(err);
   res.status(500).send("Internal Server Errror")
 }

})

//delete category by ID
router.delete('/:id', async (req, res) => {
  const categoryId = req.params.id;
  try {    
    if (!categoryId) {
      res.status(404).send('CategoryId is missing');
    }
    deleteCategory(categoryId);
    res.status(200).send({ message: 'Category Deleted' });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Errror');
  }
});

//get all category
router.get('', async (req, res) => {
 try {
  let categories = await getAllCategory()
  console.log(categories);
  res.status(200).send({message: 'Categories fetched',  "data": categories });
 } catch (err) {
  console.log(err);
  res.status(500).send("Internal Server Error.")
 }
})

router.get('/:id', async (req, res) => {
  const categoryId = req.params.id;
  try {
    let category = await getCategoryById(categoryId);
    res.status(200).send({ message: 'Category fetched', data: category });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error.');
  }
})


module.exports = router;