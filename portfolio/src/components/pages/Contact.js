import React from 'react'


const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Sending Now!')
    const { name, email, message } = e.target.elements
    let formContact = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(formContact)
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-2">Contact Me</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-2">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-success" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default Contact