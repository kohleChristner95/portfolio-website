import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xknyjnww");

  if (state.succeeded) {
    return (
      <div className="center-screen empty-color yellow-font full-height">
        <p>
          Thanks for the message! I'll get back to you within 1-2 business days.
        </p>
      </div>
    );
  }

  return (
    <div className="center-screen empty-color yellow-font">
      <form
        style={{ width: "80vw" }}
        className="empty-color center"
        onSubmit={handleSubmit}
      >
        <div className="form-group my-3">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            style={{
              backgroundColor: "#181a1b",
              borderColor: "#454b4e",
              color: "#b9cbb0",
            }}
            id="name"
            type="name"
            name="name"
            placeholder="John Doe"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="form-group my-3">
          <label htmlFor="email">E-mail</label>
          <input
            className="form-control yellow-font"
            style={{
              backgroundColor: "#181a1b",
              borderColor: "#454b4e",
              color: "#b9cbb0",
            }}
            id="email"
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="form-group my-3">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            style={{
              backgroundColor: "#181a1b",
              borderColor: "#454b4e",
              color: "#b9cbb0",
              height: "100px",
            }}
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
            className="btn btn-outline-secondary my-4"
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
