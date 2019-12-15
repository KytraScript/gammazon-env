import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";

class Engine extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            scripts: ["http://buyboxfeature.us-west-2.elasticbeanstalk.com", "http://amazon.us-east-2.elasticbeanstalk.com/bundle.js",
                'http://gammazonreviews.us-east-2.elasticbeanstalk.com/bundle.js', "http://carousel.us-east-2.elasticbeanstalk.com/bundle.js",
                "http://display.us-east-2.elasticbeanstalk.com/bundle.js", "https://tbbundle.s3.us-east-2.amazonaws.com/bundle.js", 'https://bbbundle.s3.us-east-2.amazonaws.com/bundle.js']

        }
    }

    componentDidMount(){
        let script;
        this.state.scripts.forEach( element => {
            script = document.createElement("script");
            script.src = '' + element;
            script.async = true;
            document.body.appendChild(script);
        })
    }


    render() {
            return (
                <div>
                    <Router>
                        <Page/>
                    </Router>
                </div>
            )
        }
}

function Page()  {
    //display HTML for Gammazon

    return (
        <div className="gammazoncontainer">
            <div id="topBar">TOP NAV BAR AND SEARCH</div>
            <div className="outerrow">
                <div className="innercolumn">
                    <div className="gammazonmain">
                        <div id="b2_root">IMAGES</div>
                        <div id="root">PRODUCT INFORMATION</div>
                    </div>
                    <div id="tsReviewContainer">REVIEWS WIDGET</div>
                </div>
                <div id="cart">SHOPPING CART</div>
            </div>
            <div id="b1_root">SIMILAR PRODUCTS WIDGET</div>
            <div id='bb'>FOOTER BAR</div>
        </div>
    )
}

ReactDOM.render(<Engine/>, document.getElementById('gammazon'));