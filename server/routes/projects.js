const router = require('express').Router();
const projects = require('../db/mock/projects.json');

module.exports = (db) => {
  router.get('/', (request, response, next) => {
    db('SELECT * FROM projects')
      .then(projects => db('SELECT * FROM sites')
        .then(sites => {

          projectsObject = {
            byId: {},
            ids : projects.map(project => project.id)
          }

          projects.forEach(project => projectsObject.byId[project.id] = {
            ...project,
            sites: []
          })

          sites.forEach(site => projectsObject.byId[site.project_id].sites.push(site.id))

          response.json(projectsObject);
        }))
  });

  return router;
}
