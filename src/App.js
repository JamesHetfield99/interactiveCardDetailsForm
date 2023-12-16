import { useState } from "react"

import "./app.css"
import CreditCardSide from "./components/CreditCardSide/CreditCardSide"
import Form from "./components/Form/Form"
import SuccessCard from "./components/SuccessCard/SuccessCard"

const App = () => {
  const [successful,setSuccessful] = useState(false)
  const [formData,setFormData] = useState({name:"",number:"",month:"",year:"",cvc:""})

  return (
    <main>
      <CreditCardSide formData={formData} />
      <div className="wrapper">
        {successful
          ? <SuccessCard /> 
          : <Form formData={formData} setFormData={setFormData} setSuccessful={setSuccessful}/>
        }
      </div>
    </main>
  )
}

export default App