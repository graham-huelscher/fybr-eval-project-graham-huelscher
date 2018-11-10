const router = require('express').Router();
const trees = require('../db/mock/trees.json');

module.exports = (db) => {
  router.get('/', (request, response, next) => {
    db('SELECT * FROM trees')
    .then(trees => {

        treesObject = {
          byId: {},
          ids : trees.map(tree => tree.id)
        }

        trees.forEach(tree => treesObject.byId[tree.id] = {
          ...tree,
        })

        response.json(treesObject);
      })
});

  return router;
}
