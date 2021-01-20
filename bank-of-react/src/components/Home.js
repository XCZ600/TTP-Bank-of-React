//done
import '../App.css';
import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <img src="https://cdn.iconscout.com/icon/free/png-256/bank-2648216-2196657.png"
                alt="banklogo" width="200"></img>
                <h1>Bank of React</h1>

                <AccountBalance accountBalance={this.props.accountBalance} />

                <br />
                <Link to="/UserProfile">User Profile</Link>
                <br /><br />
                <Link to="/Debit">Debit</Link>
                <br /><br />
                <Link to="/Credit">Credit</Link>

            </div>
        );
    }
}