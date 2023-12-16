import "./creditCardSide.css"

import cardLogo from "../../images/card-logo.svg"

const CreditCardSide = ( {formData}) => {
  return (
    <div className="credit-side-container">
      <div className="card-back-wrapper">
        <span className="cvc-span">{formData.cvc || "000"}</span>
      </div>
      <div className="card-front-wrapper">
        <img src={cardLogo} className="card-logo" alt="card" />
        <span className="number-span">{formData.number || "0000 0000 0000 0000"}</span>
        <div className="name-expire-wrapper">
          <span className="name-span">{formData.name || "Jane Applesed"}</span>
          <span className="expire-span">{`${formData.month || "00"} / ${formData.year || "00"}`}</span>
        </div>
      </div>
    </div>
  )
}

export default CreditCardSide