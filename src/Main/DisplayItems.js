import React, {Component} from 'react';
import './main.css';

// Food Items Section *********************

const FoodItems = (props) => {

    return(
        <div className="item-div">
            <a href="#order-section">
                <h3 className="item-title">{props.title}</h3>
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
            <section id="item-section" className="section">
                <div className="section-title">Things To Order</div>
                <div className="section-items">

                <FoodItems title="Pizza" image="http://a1pizzamillersville.com/jsimages/Pizza1.jpg"
                discription="A-1 Pizza & Subs in
                Millersville, MD is a local restaurant
                offering pizza and subs for dine in,
                carry out or delivery."/>


                <FoodItems title="Pizza" image="http://a1pizzamillersville.com/jsimages/Pizza1.jpg"
                           discription="A-1 Pizza & Subs in
                Millersville, MD is a local restaurant
                offering pizza and subs for dine in,
                carry out or delivery."/>

                <FoodItems title="Pizza" image="http://a1pizzamillersville.com/jsimages/Pizza1.jpg"
                               discription="A-1 Pizza & Subs in
                Millersville, MD is a local restaurant
                offering pizza and subs for dine in,
                carry out or delivery."/>

                <FoodItems title="Pizza" image="http://a1pizzamillersville.com/jsimages/Pizza1.jpg"
                               discription="A-1 Pizza & Subs in
                Millersville, MD is a local restaurant
                offering pizza and subs for dine in,
                carry out or delivery."/>





            </div>














            </section>

        )
    }


}