import React,{Component} from "react";


class OrderForm extends Component {

   constructor(props){
       super(props);


       this.state = {

          form: {

              name: "",
              phone: 0,
              address: "",

          }
       };


       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleChangeName = this.handleChangeName.bind(this);

   }


// handle Functions

   handleSubmit = (event) => {

    alert("your order was sumbit", this.state.form.name);

       event.preventDefault();
   };

   handleChangeName = (data) => {

    this.setState({form: data.target.form.name})

   };


    handleChangePhone = (data) => {

        this.setState({form: data.target.form.phone})

    };


    handleChangeAddress = (data) => {

        this.setState({form: data.target.form.address})

    };





// render method

    render() {

    return(
        <form className="order-form" action="/public/index.html" onSubmit={this.handleSubmit}  >
        <label>Name
            <input type="text" placeholder="Enter your name"   onChange={this.handleChangeName} />

        </label>
        <label>Phone Number:
            <input type="number" placeholder="Enter your number"   onChange={this.handleChangePhone}/>
        </label>

        <label>Enter Address
            <input type="text" placeholder="Enter your address"  onChange={this.handleChangeAddress}/>
        </label>

        <input type="submit" name="Order" />

        </form>


    )

   }
}










//Order information ********************

export default class OrderInformation extends Component {

    constructor(props){
        super(props)
    }



    render(){

        return(
           <section className="section order-section">
            <OrderForm />

           </section>

        )
    }


}