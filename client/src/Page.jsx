import React from 'react';

const Page = () => {
    //display HTML for Gammazon

    return (
        <div className="container">
            <div className="top-nav">TOP NAV BAR AND SEARCH</div>
            <div className="outerrow">
                <div className="innercolumn">
                    <div className="main">
                        <div id="b2_root">IMAGES</div>
                        <div id="root">PRODUCT INFORMATION</div>
                    </div>
                    <div id="tsReviewContainer">REVIEWS WIDGET</div>
                </div>
                <div id="cart">SHOPPING CART</div>
            </div>
            <div id="b1_root">SIMILAR PRODUCTS WIDGET</div>
            <div className="footer-nav">FOOTER BAR</div>
        </div>
    )
};

export default Page;