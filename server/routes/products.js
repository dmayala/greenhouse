import ProductCollection from '../collections/products';

export async function findAll(req, res) {
  let items = await ProductCollection.forge().fetch();
  res.send(items);
}
