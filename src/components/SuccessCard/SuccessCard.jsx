import "./successCard.css"

import iconComplete from "../../images/icon-complete.svg"

const SuccessCard = () => {
  return (
    <div className="success-container">
      <img src={iconComplete} alt="complete" className="success-logo" />
      <div className="succes-text-container">
        <span className="success-big-text">Thank you!</span>
        <span className="success-small-text">We've added your card details</span>
      </div>
      <button>Continue</button>
    </div>
  )
}


export default SuccessCard