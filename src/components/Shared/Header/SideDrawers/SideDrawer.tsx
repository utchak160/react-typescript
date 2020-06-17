import React from 'react';
import ReactDOM from 'react-dom';

const SideDrawer = (props: any) => {
    let el;
    el = document.createElement('drawerRoot');
    const drawer = <aside>
        {props.children}
    </aside>;

    return ReactDOM.createPortal(drawer, el);
};

export default SideDrawer;
