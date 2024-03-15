import React from 'react';
import MenuList from "./menu-list.jsx";
import './styles.css'
function TreeView2({menus=[]}) {
    return (
        <div className='tree-view-container'>
            <MenuList list={menus} />
        </div>
    );
}

export default TreeView2;