import React from "react";
/*
// functional (arrow)  component
const Collapse = (props) => {

    console.log(props.children);

    return (
        <div>

            <a className="btn btn-primary w-100" data-toggle="collapse" href= {"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
                Hide
            </a>

            <div className="collapse show" id={props.href}>   Open Content When Click on Link   
                {props.children}
                {console.log("Click me")}
            </div>
        </div>
    )
}

export default Collapse;
*/

// State 
class Collapse extends React.Component {

    /*
    1 -> Arrow Functions
    2 -> Bind
    3 -> Constructor

    */

    // create a method

    
    /* method 1

    constructor() {  // this = Collapse
        super();
        this.state = {
            isOpen: true
        }


        // constructor method
        this.showCard = () => {
            this.setState({isOpen: !this.state.isOpen})
        }
        //


        // this.showCard = this.showCard.bind(this)  // bind method
    }

    */


    // method 2

    state = { isOpen : true}



    
    



    render() {

        /* bootstrap 4 
        return (
            <div>

                <a className="btn btn-primary w-100" data-toggle="collapse" href= {"#".concat(this.props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
                    {this.state.isOpen ? "Hide" : "Show"}
                </a>

                <div className="collapse show" id={this.props.href}>     
                    {this.props.children} 
                </div>
            </div>
        )
        */


        // state 
        return (    // This = Collapse
            <div>

                {/*
                <button className="btn btn-primary w-100" onClick= {() => {   // arrow method
                     this.setState({ isOpen: !this.state.isOpen })
                     }
                     }>   state changed 
                    {this.state.isOpen ? "Hide" : "Show"} 
                </button>
                { 
                this.state.isOpen ? (
                <div className="collapse show" id={this.props.href}>     
                    {this.props.children} 
                </div> ) : null
                }
                */


                }
                {/*
                <button className="btn btn-primary w-100" onClick={this.showCard}>   
                    {this.state.isOpen ? "Hide" : "Show"}
                </button>
                {
                    this.state.isOpen ? (
                        <div className="collapse show" id={this.props.href}>
                            {this.props.children}
                        </div>) : null

                }
                */
                }

                <button className="btn btn-primary w-100" onClick={() => {   // arrow method
                    this.setState({ isOpen: !this.state.isOpen })
                }
                }>   
                    {/*this.props.children.props.cardName*/}
                    {/*{this.state.isOpen ? "Hide" : "Show"}*/}
                    {React.Children.map(this.props.children, children => children.props.cardName)}
                </button>
                {
                    this.state.isOpen ? (
                        <div className="collapse show" id={this.props.href}>
                            {/*this.props.children*/}
                            {React.Children.map(this.props.children, children => children.props.cardName)}
                        </div>) : null
                }
            </div>
        )
    }

    /*
    showCard() {
        console.log(this)
        console.log("Click mne")
        this.setState({ isOpen: !this.state.isOpen })
    }
    */

    showCard() {
        console.log(this)
        console.log("Click mne")
        this.setState({ isOpen: !this.state.isOpen })
    }

    componentDidMount () {   // Executed only when the component is created
        console.log("Cretaed Component")
    }

    componentDidUpdate () {   // executed every time the render function is called
        console.log("Uptated Component ")
    }



}

export default Collapse;
