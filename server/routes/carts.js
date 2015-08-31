import express from 'express';
import CartCollection from 'collections/carts';

const router = express.Router();

router.get('/', async (req, res) => {
  let expansions = req.query.expand;

  // let relations = {
  //   'creator': 'creator',
  //   'choices': 'choices',
  //   'votes': 'votes',
  //   'users': 'votes.user'
  // };

  let withRelated = expansions ? expansions.split(',') : [];

  let carts = await CartCollection.forge().fetch({ withRelated });
  res.send(carts);
});

module.exports = router;
