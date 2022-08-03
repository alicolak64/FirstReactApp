import React from "react";
import PropTypes from "prop-types";

/*

// Function Component
const Card = (props) => {

    console.log(props);

    return (

      
        <div className="card w-100" >

          <img src={props.cardImage} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title"> {props.cardName} </h5>
            <p className="card-text"> {props.cardInformation}</p>
            <p className="card-text"><small className="text-muted">Location : {props.cardLocation}</small></p>
            <button type="button" className="btn btn-primary"> Delete a</button>
          </div>

        </div>
        

    )
}

export default Card;
*/

// Class Component
class Card extends React.Component {

  render() {

    return (

      
      <div className="card w-100" >

        <img src={this.props.cardImage} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title"> {this.props.cardName} </h5>
          <p className="card-text"> {this.props.cardInformation}</p>
          <p className="card-text"><small className="text-muted">Location : {this.props.cardLocation}</small></p>
        </div>

      </div>
      

  )
  }
}


Card.defaultProps = {
  cardImage: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  cardName: "Name",
  cardInformation: "Information",
  cardLocation: "Location"
}

Card.propTypes = {
  cardUrl: PropTypes.string,
  cardTitle : PropTypes.string,
  cardInformation : PropTypes.string,
  cardLocation : PropTypes.string
}

export default Card;




/*

First Class Function Components 

cont Test = function () {
    console.log("Test");
}

Test() 

*/
