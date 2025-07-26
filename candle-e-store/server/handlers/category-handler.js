const Category = require("../database/category")

function addCategory(name) {
  let category = new Category({
    name: name,
  });
  category.save();
  return category.toObject();
}

async function updateCategory(categoryId,name) {
  await Category.findOneAndUpdate(
    {
      _id: categoryId,
    },
    { name: name }
  );
  return;
}

async function deleteCategory(categoryId) {
  await Category.findByIdAndDelete(categoryId);
  return;
}

async function getCategoryById(categoryId) {
  let categoryData = await Category.findById(categoryId);
  return categoryData;
}

async function getAllCategory() {
  let collection = await Category.find();
  return collection;
}

module.exports = {
  addCategory,
  updateCategory,
  deleteCategory,
  getAllCategory,
  getCategoryById,
};