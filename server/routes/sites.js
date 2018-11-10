const router = require('express').Router();
const sites = require('../db/mock/sites.json');

module.exports = (db) => {
  router.get('/', (request, response, next) => {
    db('SELECT * FROM sites')
    .then(sites => db('SELECT * FROM trees')
      .then(trees => {

        sitesObject = {
          byId: {},
          ids : sites.map(site => site.id)
        }

        sites.forEach(site => sitesObject.byId[site.id] = {
          ...site,
          trees: []
        })

        trees.forEach(tree => sitesObject.byId[tree.site_id].trees.push(tree.id))

        response.json(sitesObject);
      }))
});

  return router;
}
