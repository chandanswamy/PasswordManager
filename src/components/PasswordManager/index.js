import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

const colorList = ['yellow', 'green', 'orange', 'brown', 'blue']

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    isShow: false,
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  showPassword = event => {
    if (event.target.checked) {
      this.setState({isShow: true})
    } else {
      this.setState({isShow: false})
    }
  }

  onAddPassword = event => {
    event.preventDefault()

    const {website, username, password} = this.state
    const color = colorList[Math.floor(Math.random() * 5)]
    const initial = website.slice(0, 1).toUpperCase()

    const createPasswordItem = {
      id: uuidv4(),
      initialValue: initial,
      websiteName: website,
      userName: username,
      passWord: password,
      colorValue: color,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, createPasswordItem],
      website: '',
      username: '',
      password: '',
    }))
  }

  deletePasswordItem = id => {
    const {passwordsList} = this.state
    const getUpdatedPasswordList = passwordsList.filter(
      eachPasswordItem => eachPasswordItem.id !== id,
    )

    this.setState({passwordsList: getUpdatedPasswordList})
  }

  render() {
    const {
      passwordsList,
      website,
      username,
      password,
      isShow,
      searchInput,
    } = this.state

    const FilteredPasswordList = passwordsList.filter(eachPasswordItem =>
      eachPasswordItem.websiteName
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    const noPasswords = FilteredPasswordList.length > 0
    const passwordsCount = FilteredPasswordList.length

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
            <form className="password-form" onSubmit={this.onAddPassword}>
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
                  value={website}
                  type="text"
                  className="input-element"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
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
                  value={username}
                  type="text"
                  className="input-element"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
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
                  value={password}
                  type="password"
                  className="input-element"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
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
                  <p className="password-count">{passwordsCount}</p>
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
                    onChange={this.onSearchInput}
                  />
                </div>
              </div>
            </div>
            <hr className="break-line" />
            <div className="checkbox-container">
              <input
                id="check"
                className="checkbox"
                type="checkbox"
                onChange={this.showPassword}
              />
              <label htmlFor="check" className="show-password">
                Show Passwords
              </label>
            </div>
            {!noPasswords && (
              <div className="no-passwords-image-container">
                <img
                  className="no-passwords-image"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
                <p className="form-title">No Passwords</p>
              </div>
            )}
            {noPasswords && (
              <div>
                <ul className="password-items-container">
                  {FilteredPasswordList.map(eachPasswordItem => (
                    <PasswordItem
                      key={eachPasswordItem.id}
                      passwordItemDetails={eachPasswordItem}
                      deletePasswordItem={this.deletePasswordItem}
                      isPasswordVisible={isShow}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
