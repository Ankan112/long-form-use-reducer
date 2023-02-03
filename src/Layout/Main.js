import React from 'react';
import ResponsiveDrawer from '../Pages/Drawer/Drawer';
import Navigation from '../Pages/Navigation/Navigation';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <ResponsiveDrawer></ResponsiveDrawer>
        </div>
    );
};

export default Main;