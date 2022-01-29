import { useForm, ValidationError } from "@formspree/react";
import Home from "./Home";

const Contact = () => {
  const [state, handleSubmit] = useForm("xknyjnww");
  if (state.succeeded) {
    return <p>Thanks for the message!</p>;
  }
  return (
    <div className="center-screen empty-color">
      <form className="empty-color row center" onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            id="name"
            type="name"
            name="name"
            placeholder="John Doe"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="form-group row">
          <label htmlFor="email">E-mail</label>
          <input
            className="form-control"
            id="email"
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="form-group row">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            placeholder="Type your message here."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            className="btn btn-outline-secondary"
            disabled={state.submitting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
