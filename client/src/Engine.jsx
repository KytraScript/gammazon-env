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
            <div id="topBar"></div>
            <div className="outerrow">
                <div className="innercolumn">
                    <div className="gammazonmain">
                        <div id="b2_root"></div>
                        <div id="root"></div>
                    </div>
                    <div id="tsReviewContainer"></div>
                </div>
                <div id="kytrabuybox"></div>
            </div>
            <div id="b1_root"></div>
            <div id='bb'></div>
        </div>
    )
}

ReactDOM.render(<Engine/>, document.getElementById('gammazon'));