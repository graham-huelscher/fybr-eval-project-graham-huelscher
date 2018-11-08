import React from 'react'

import styles from './SubList.scss';

const SubList = props => {
    const subItemsJSX = props.subItems.map(item => 
        <div key={item.id}>
            <button className={styles.accordion} onClick={()=>props.onClickSubitem(item.id)}>{item.name}</button>
        </div>)
    return (
        <div>
            {subItemsJSX}
        </div>
    )
}

export default SubList