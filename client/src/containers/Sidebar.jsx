import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProjects, getSites } from '../model';

import { centerMapOnSite } from '../model/map';

import List from '../components/List';

class Sidebar extends Component {

  render() {
  //compile the items array such that each main item has a key named "items". This key then has an array of objects which are the sub-locations of the main item. 
   const projectList = this.props.projects;
    const items = projectList.map(project => {
      const subItems = project.sites.map(siteId => {
        let siteObject = this.props.sites.find(site => site.id === siteId)
         return {
           id: siteId,
           name: siteObject.name
         }
      })
      return {
        ...project,
        items: subItems
      }
    })

    return <List items={ items } onClickSubitem={ this.props.centerMapOnSite } />
  }
}

function mapStateToProps(state) {
  return {
    projects: getProjects(state),
    sites: getSites(state)
  };
}

const mapDispatchToProps = {
  centerMapOnSite
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
