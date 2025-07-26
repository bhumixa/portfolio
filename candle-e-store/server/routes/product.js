const express = require("express")
const {
  getAllBrands,
  getBrandById,
  updateBrand,
  deleteBrand,
  addBrand,
} = require('../handlers/brand-handler');
const router = express.Router();

router.get('', async (req, res) => {
  try {
    let brands = await getAllBrands();
    res.status(200).send({ message: 'Brands fetched', data: brands });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error.');
  }
});

router.get('/:id', async (req, res) => {
  try {
    let brand = await getBrandById(req.params.id);
    res.status(200).send({ message: 'Brand fetched', data: brand });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error.');
  }
});

router.put('/:id', async (req, res) => {
  try {
    let brand = await updateBrand(req.params.id, res.body.name);
    res.status(200).send({ message: 'Brand Updated' });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error.');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let brand = await deleteBrand(req.params.id);
    res.status(200).send({ message: 'Brand Deleted' });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error.');
  }
});

router.post('', async (req, res) => {
  try {
    await addBrand(req.body.name);
    res.status(200).send({ message: 'Brand Added' });
  } catch {
    console.log(err);
    res.status(500).send('Internal Server Error.');
  }
});


module.exports = router;