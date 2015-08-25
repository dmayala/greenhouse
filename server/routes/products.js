import express from 'express';
import ProductCollection from '../entities/collections/products';
import ProductModel from '../entities/models/product';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';

const router = express.Router();

router.get('/', async (req, res) => {
  let products = await ProductCollection.forge().fetch();
  res.send(products);
});

router.get('/:id', async (req, res) => {
  let id = req.params.id;

  let expansions = req.query.expand;
  let withRelated = expansions ? expansions.split(',') : [];

  try {
    let product = await ProductModel.forge({ id }).fetch();

    if (product) {

      if (_.includes(withRelated, 'nutrition')) {
        let nutixReq = await fetch(`https://api.nutritionix.com/v1/item/${product.get('nutix_id')}?appId=${'insert appId'}&appKey=${ 'insert appKey' }`); 
        let nutixData = await nutixReq.json();
        product.set('nutrition', nutixData);
      }

      res.send(product);
    } else {
      res.status(500).send({ 'error': `There is no Product ${id}` });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ 'error': 'An error has occurred' });
  }
});

module.exports = router;
