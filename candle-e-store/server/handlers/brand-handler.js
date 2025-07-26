const Brand = require("../database/brand");


async function getAllBrands() {
 let brands = Brand.find();
 return brands
}

async function getBrandById(id) {
 let brand = Brand.findById(id);
 return brand.toObject();
}

async function addBrand(name) {
 let brand = new Brand({
   name: name,
 });
  await brand.save()
  return brand.toObject();
}

async function updateBrand(name, id) {
 await Brand.findByIdAndUpdate(id, name); 
}

async function deleteBrand(id) {
 await Brand.findByIdAndDelete(id); 
}

module.exports = {
  getAllBrands,
  getBrandById,
  addBrand,
  updateBrand,
  deleteBrand
};