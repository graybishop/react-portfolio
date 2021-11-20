import { useState } from "react";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let newValues = formValues
    newValues[name] = value

    setFormValues({...newValues})
  }

  return(
    <section>
      <h2 className="text-3xl">Contact Me</h2>
      <form action="">
        <label htmlFor="name">Your Name:</label>
        <input type="text" name="name" value={formValues.name}  onChange={handleInputChange} required/>
        <label htmlFor="email">Your Name:</label>
        <input type="email" name="email" id="" value={formValues.email}  onChange={handleInputChange} required/>
        <label htmlFor="message">Leave a message:</label>
        <textarea name="message" id="" value={formValues.message} onChange={handleInputChange}/>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default Contact