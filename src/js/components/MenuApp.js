import  React from 'react';
import MenuCreater from './MenuCreater';
import VisibleMenuList from '../containers/VisibleMenuList';

console.log('componentを統括するMenuApp');
class MenuApp extends React.Component{
    constructor(props) {
        super(props);
    } 
    render() {
        return (
            <div>
                <MenuCreater />,
                <VisibleMenuList/>
            </div>
       );
    }
}

export default MenuApp