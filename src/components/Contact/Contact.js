import { useState } from "react";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let newValues = formValues;
    newValues[name] = value;

    setFormValues({ ...newValues });
  };

  return (
    <section className="bg-black-coffee-dark text-timberwolf container mx-auto pb-6">
      <div className='headerDiv'>
        <div>
          <h2>Contact Me</h2>
          <i class="far fa-comment-dots"></i>

        </div>
      </div>
      <form action="" className="flex flex-col gap-2 p-4">
        <div>
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" value={formValues.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" id="" value={formValues.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="message">Leave a message</label>
          <textarea name="message" id="" value={formValues.message} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;