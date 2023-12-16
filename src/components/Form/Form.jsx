import { useState } from "react"
import "./form.css"

const Form = ({formData, setFormData, setSuccessful}) => {
  const [errors,setErrors] = useState({})
  
  const updateFromData = (e) => {
    e.preventDefault()
    let propName = e.target.name
    let value = e.target.type === "number" ?  parseInt(e.target.value) || "" : e.target.value

    if (e.target.name === "number") {
      value = value.trim()
      const valueNoSpace = value.replace(/ /g,"")
    
      if (valueNoSpace.length > 16 || isNaN(valueNoSpace)) return 

      if (e.target.name === "number" && valueNoSpace.length % 4 === 1 && valueNoSpace > 1){
        value = `${value.slice(0, -1)} ${value[value.length - 1]}`
      }
    }

    if (propName === "month" && `${value}`.length > 2) return 
    if (propName === "year" && `${value}`.length > 2) return 
    if (propName === "cvc" && `${value}`.length > 3) return

    setFormData(prev =>({...prev,[propName]: value}))
  }
  const handleSubmit = () => {
    const errorsObject = {}

    Object.entries(formData).forEach(([key, value]) => {
      if (!value) return errorsObject[key] = "Can't be empty"
    });
    
    if (!errorsObject["name"]) {
      if (! /^[A-Za-z\s]+$/.test(formData.name.replace(/ /g,""))) errorsObject["name"] = "Wrong format, letters only"
    }
    if (!errorsObject["number"]) {
      if (formData.number.replace(/ /g,"").length < 16) errorsObject["number"] = "Card number must have 16 digits"
    }
    if (!errorsObject["month"]) {
      if (`${formData.month}`.length <2) errorsObject["month"] = "Month should have 2 digits"
      if (formData.month > 12 || formData.month < 1) errorsObject["month"] = "Invalid month value"
    }
    if (!errorsObject["year"]) {
      if (`${formData.year}`.length <2) errorsObject["year"] = "Year should have 2 digits"
      if (formData.year > 50 || formData.year < 23) errorsObject["year"] = "Invalid year value"
    }
    if (!errorsObject["cvc"]) {
      if (`${formData.cvc}`.length <3) errorsObject["cvc"] = "CVC should have 3 digits"
    }

    setErrors(errorsObject)

    if (! Object.keys(errorsObject).length) setSuccessful(true)
  }

  console.log(errors)
  return (
 <div className="form-wrapper">
    <div className="input-wrapper">
      <label htmlFor="holder-name">Cardholder name</label>
      <input onChange={updateFromData} id="holder-name" name="name" value={formData.name} placeholder="e.g Jane Appleseed" />
      {errors.name && <span className="error-span">{errors.name}</span>}
    </div>
    <div className="input-wrapper">
      <label htmlFor="card-number">Card number</label>
      <input onChange={updateFromData} id="card-number" name="number" value={formData.number} placeholder="e.g 1234 5678 9123 0000" />
      {errors.number && <span className="error-span">{errors.number}</span>}
    </div>
    <div className="input-wrapper">
      <label htmlFor="card-details-wrapper">exp. date (mm/yy) cvc</label>
      <div id="card-details-wrapper">
        <input type="number" onChange={updateFromData} className="date-input" name="month" value={formData.month} placeholder="MM" />
        <input type="number" onChange={updateFromData} className="date-input" name="year" value={formData.year} placeholder="YY" />
        <input type="number" onChange={updateFromData} className="cvc-input" name="cvc" value={formData.cvc} placeholder="e.g 123" />
      </div>
      {(errors.month || errors.year || errors.cvc) && 
        <div className="card-details-error-wrapper">
          <span className="error-span">{errors.month || errors.year || ""}</span>
          <span className="cvc-error-span">{errors.cvc || ""}</span>
        </div>
      }
    </div>
    <button onClick={handleSubmit} className="confirm-button">Confirm</button>
  </div>
  )
}


export default Form