import './index.css'

const PasswordItem = props => {
  const {passwordItemDetails, deletePasswordItem, isPasswordVisible} = props
  const {
    id,
    initialValue,
    websiteName,
    userName,
    passWord,
    colorValue,
  } = passwordItemDetails

  const onDeletePasswordItem = () => {
    deletePasswordItem(id)
  }

  return (
    <li className="password-item">
      <div className="password-item-display">
        <div className={`initial-container ${colorValue}`}>
          <h1 className="initial">{initialValue}</h1>
        </div>
        <div className="password-item-entities">
          <p className="password-item-entity">{websiteName}</p>
          <p className="password-item-entity">{userName}</p>
          {!isPasswordVisible && (
            <img
              className="stars"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
          {isPasswordVisible && (
            <p className="password-item-entity">{passWord}</p>
          )}
        </div>
        <div className="delete-button-container">
          <button
            type="button"
            data-testid="delete"
            className="delete-button"
            onClick={onDeletePasswordItem}
          >
            <img
              className="delete-image"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default PasswordItem
