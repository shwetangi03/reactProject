import React from 'react';

const ExpenseDetails=(props)=> {
    const amount = props.amount
    const location = props.location
    const title = props.title

    return (
        <div>
            <div>{amount}</div>
            <div>{location}</div>
            <div>{title}</div>
        </div>
    )
}

export default ExpenseDetails