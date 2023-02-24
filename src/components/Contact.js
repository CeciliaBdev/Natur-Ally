import React from 'react'

function Contact() {
  return (
    <div className="form_contact" id="form_contact">
      <div className="form_content" id="contact">
        <form
          className="contact"
          method="POST"
          name="contact"
          data-netlify="true"
          // onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">Nom: </label>
          <input type="text" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />

          <label>Message:</label>
          <textarea name="message"></textarea>

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
