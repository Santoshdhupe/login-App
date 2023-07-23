// Write your code here

import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  changeStatus = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    let messageElement
    let buttonElement
    if (isLoggedIn === true) {
      messageElement = <Message content="Welcome User" />
      buttonElement = <Login changeStatus={this.changeStatus} />
    } else {
      messageElement = <Message content="Please Login" />
      buttonElement = <Logout changeStatus={this.changeStatus} />
    }
    return (
      <div className="bgContainer">
        <div className="userCard">
          {messageElement}
          {buttonElement}
        </div>
      </div>
    )
  }
}

export default Home
