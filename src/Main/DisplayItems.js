import React, {Component} from 'react';
import './main.css';

// Food Items Section *********************

const FoodItems = (props) => {

    return(
        <div className="item-div">
            <a href="#">
               <img src={props.image} alt="Item-image" className="item-image"/>
                <p className="item-discription">{props.discription}</p>
            </a>
             <button className="item-button" onClick="#item-section">Order</button>
        </div>


    )

};







//Display Items ***************************

export default class DisplayItems extends Component {

    constructor(props){
        super(props)
    }


    render(){

        return(
            <section id="item-section" className="section section-items">
                <div className="section-title">Things To Order</div>

                <FoodItems image="http://a1pizzamillersville.com/jsimages/Pizza1.jpg"
                discription="A-1 Pizza & Subs in
                Millersville, MD is a local restaurant
                offering pizza and subs for dine in,
                carry out or delivery."/>






            </section>

        )
    }


}