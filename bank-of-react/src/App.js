import './App.css'
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import UserProfile from './components/userProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import Credits from './components/Credits';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
        loggedIn: false
      },

      debits: [],
      debitsAmount: 0,
      credit: [],
      creditsAmount: 0
    }

    //fetch info
    let debitsFetch = new XMLHttpRequest();
    debitsFetch.open("GET", "https://moj-api.herokuapp.com/debits", false);
    debitsFetch.send(null);
    this.state.debit = JSON.parse(debitsFetch.response)

    let creditsFetch = new XMLHttpRequest();
    creditsFetch.open("GET", "https://moj-api.herokuapp.com/credits", false);
    creditsFetch.send(null);
    this.state.credit = JSON.parse(creditsFetch.response)

    //add debits
    let debitsAmount = 0;
    for (let i in this.state.debit) {
      debitsAmount += this.state.debit[i].amount;
    }

    //add credits
    let creditAmount = 0;
    for (let i in this.state.credit) {
      creditAmount += this.state.credit[i].amount;
    }

    this.state.accountBalance = creditAmount - debitsAmount
    this.state.accountBalance = (Math.round(this.state.accountBalance * 100) / 100).toFixed(2)
  }

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser }
    newUser.userName = logInInfo.userName
    newUser.loggedIn = true
    this.setState({ currentUser: newUser })
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />)
    const UserProfileComponent = () => (<userProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />)
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props} />)
    const CreditComponet = () => (<Credits credit={this.state.credit} account={this.state.accountBalance} />)
    const DebitComponent = () => (<Debits debit={this.state.debit} account={this.state.accountBalance} />)

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/UsersProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/Credit" render={CreditComponet} />
          <Route exact path="/Debit" render={DebitComponent} />
        </Switch>
      </Router>
    );
  }
}

/* import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import UserProfile from './components/userProfile'
import LogIn from './components/Login'
import Debit from './components/Debits'
import Credit from './components/Credits'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },

      debits: [],
      debitsAmount: 0,
      credits: [],
      creditsAmount: 0
    }
  }

  componentsDidMount() {
    fetch(
      "https://moj-api.herokuapp.com/debits")
      .then((response) => response.json())
      .then((res) => this.debitsFetch(res));

    fetch("https://moj-api.herokuapp.com/credits")
      .then((response) => response.json())
      .then((res) => this.creditsFetch(res));
  }


  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser }
    newUser.userName = logInInfo.userName
    this.setState({ currentUser: newUser })
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />)
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />)
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props} />)

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
        </Switch>
      </Router>
    )
  }
} */