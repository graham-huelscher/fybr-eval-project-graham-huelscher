import React, { Component } from 'react';

import SubList from './SubList'

import styles from './List.scss';

 class List extends Component {
   state = {
     openItems: []
   }

   onClick = (id) => {
    //component level state for which tabs are open
    const openItemsCopy = [...this.state.openItems]
    const index = openItemsCopy.indexOf(id)
    index > -1 ?  openItemsCopy.splice(index, 1) : openItemsCopy.push(id)
    this.setState({
      openItems: openItemsCopy
    })
   }

   render() {
    //map the main items to the sidebar, with logic in place to open the sub-items should the user click the appropriate main item
    const mainListJSX = this.props.items.map(item => 
      <div key={item.id}>
        <button className={styles.accordion} onClick={()=>this.onClick(item.id)}>{item.name}</button>
          {this.state.openItems.includes(item.id) ? <SubList subItems={item.items} onClickSubitem={this.props.onClickSubitem}/> : ''}
      </div>)
    return (
      <div>
        {mainListJSX}
      </div>
    );
  }
 }

export default List
