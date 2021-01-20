import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

export default class Debits extends Component {
    constructor() {
        super()
        this.state = {
            debits: {
                id: "",
                description: "",
                amount: 0,
                date: ""
            }
        }
    }

    render() {
        let debitList = [];

        for (let i in this.props.debit) {
            debitList.push(<div>{this.props.debit[i].description}</div>)
            debitList.push(<div>Amount: {this.props.debit[i].amount}</div>)
            debitList.push(<div>Date: {this.props.debit[i].date}</div>)
            debitList.push(<br />)
            debitList.push(<br />)


        }

        return (

            <div>
                <Link to="/">Home</Link>

                <h1>Debits</h1>

                <div className="list">
                    {debitList}
                </div>

                <h1>AccountBalance</h1>
                {this.props.account}
            </div>
        )
    }
}