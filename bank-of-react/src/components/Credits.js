import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

export default class Credits extends Component {
    constructor() {
        super()
        this.state = {
            credits: {
                id: "",
                description: "",
                amount: 0,
                date: ""
            }
        }
    }

    render() {
        let creditList = [];

        for (let i in this.props.credit) {
            creditList.push(<div>{this.props.credit[i].description}</div>)
            creditList.push(<div>Amount: {this.props.credit[i].amount}</div>)
            creditList.push(<div>Date: {this.props.credit[i].date}</div>)
            creditList.push(<br />)
            creditList.push(<br />)


        }
        return (
            <div className="container">
                <Link to="/">Home</Link>

                <h1>Credit</h1>

                {creditList}

                <h1>AccountBalance</h1>
                {this.props.account}
            </div>
        )
    }
}