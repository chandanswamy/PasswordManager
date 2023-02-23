import {Component} from 'react'
import './index.css'

class PasswordManager extends Component {
  render() {
    return (
      <div className="password-manager">
        <div className="password-manager-app">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
          <div className="section-one">
            <img
              className="password-manager-sm-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
            <img
              className="password-manager-lg-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
            <form className="password-form">
              <h1 className="form-title">Add new Password</h1>
              <div className="input-container">
                <div className="icon-container">
                  <img
                    className="input-element-icon"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                  />
                </div>
                <input
                  type="text"
                  className="input-element"
                  placeholder="Enter Website"
                />
              </div>
              <div className="input-container">
                <div className="icon-container">
                  <img
                    className="input-element-icon"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                  />
                </div>
                <input
                  type="text"
                  className="input-element"
                  placeholder="Enter Username"
                />
              </div>
              <div className="input-container">
                <div className="icon-container">
                  <img
                    className="input-element-icon"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                  />
                </div>
                <input
                  type="text"
                  className="input-element"
                  placeholder="Enter Password"
                />
              </div>
              <div className="add-button-container">
                <button className="add-button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="section-two">
            <div className="section-two-title-container">
              <div className="section-two-title-block">
                <h1 className="section-two-title">Your Passwords</h1>
                <div className="password-count-container">
                  <p className="password-count">0</p>
                </div>
              </div>
              <div>
                <div className="input-search-container">
                  <div className="search-icon-container">
                    <img
                      className="input-element-icon"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                      alt="search"
                    />
                  </div>
                  <input
                    type="search"
                    className="input-search-element"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
