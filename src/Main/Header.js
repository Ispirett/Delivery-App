import React, {Component } from 'react';
import './main.css'
//NavBar******************************

 const AppNavBar = () => {

     return(
         <nav>
             <ul>
                <li><a href="#">Your Orders</a></li>
                 <li><a href="#">Information</a></li>
                 <li><a href="#">About</a></li>

             </ul>
         </nav>

     )


};

// Header*****************************

class AppHeader extends Component {
    constructor(props){

        super(props)
    }



    render() {
        return(
           <header>
               <div id="app-name">
               <h1>{this.props.appName}</h1>
               </div>
               <AppNavBar/>

           </header>

        )
    }
}

export default AppHeader;