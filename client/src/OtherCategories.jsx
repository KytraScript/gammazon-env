import React from 'react';

const OtherCategories = (props) => {

    return (
        props.categories.map( (cat, key) => (
            <span className='otherCategories' id={'category' + key}>{cat}</span>
        ))
    )
};

export default OtherCategories;