import React from "react";
import ReactDOM from "react-dom";
import OtherCategories from "./OtherCategories.jsx";
import allProducts from './allProducts';

class Underbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            productsList: allProducts,
            currentID: 0,
            category: 0,
            categories: [   ['Sports & Outdoors', 'Sports & Fitness', 'Outdoor Recreation', 'Sports Fan Shop', 'Sports Deals', 'Outdoor Deals'],
                            ['Prime Pantry', 'Deals', 'Categories', 'Past Purchases', 'About Pantry'], ['Health & Personal Care', 'Household Supplies', 'Vitamins & Diet Supplements',
                             'Baby & Child Care', 'Health Care', 'Sports Nutrition', 'Sexual Wellness', 'Health & Wellness', 'Medical Supplies & Equipment', 'Sales & Special Offers'],
                            ['Amazon Fashion', 'Women', 'Men', 'Non-Binary', 'Sales & Deals', 'Baby', 'Luggage', 'New Arrivals']]
        }
    }

    componentDidMount(){
        this.getId();
    }

    getId() {
        let idText = window.location.search;
        let croppedId = idText.substring((idText.indexOf('=') + 1));

        croppedId = Number(croppedId);

        this.setState({
                currentID: croppedId
            },
            () => {
                if (this.state.productsList === {}) {
                    return null;
                } else {
                    this.state.productsList.forEach(e => {
                        if (e.primaryKey === this.state.currentID) {
                            if (e.group === 'Outdoors') {
                                this.setState({
                                    category: 0
                                })
                            } else if (e.group === 'Pantry') {
                                this.setState({
                                    category: 1
                                })
                            } else if (e.group === 'Health') {
                                this.setState({
                                    category: 2
                                })
                            } else if (e.group === 'Wardrobe') {
                                this.setState({
                                    category: 3
                                })
                            }

                        }
                    })
                }
            })
    }

    render() {
        return (
            <div className='cat-bar'>
                <div className='populate-bar'>
                <OtherCategories categories={this.state.categories[this.state.category]}/>
                </div>
                <div className='underbaradvert'></div>

            </div>
        )
    }
}

ReactDOM.render(<Underbar/>, document.getElementById('kytraunderbar'));