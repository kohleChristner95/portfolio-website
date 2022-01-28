const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
      <div className="center-screen empty-color">
        <form className="empty-color row center">
          <div className="form-group row">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              id="name"
              type="name"
              placeholder="John Doe"
            ></input>
          </div>
          <div className="form-group row">
            <label htmlFor="email">E-mail</label>
            <input
              className="form-control"
              id="email"
              type="email"
              placeholder="johndoe@gmail.com"
            ></input>
          </div>
          <div className="form-group row">
            <label htmlFor="message">Message</label>
            <input
              className="form-control"
              id="message"
              type="message"
              placeholder="Type your message here"
            ></input>
          </div>
          <button type="submit" className="btn btn-outline-secondary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
