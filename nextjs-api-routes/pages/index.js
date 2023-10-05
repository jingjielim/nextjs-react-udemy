import { useRef } from "react";

function HomePage() {
  const emailInputRef = useRef(); // create a reference to the input field
  const feedbackInputRef = useRef(); // create a reference to the textarea

  function submitFormHandler(event) {
    event.preventDefault(); // prevent the page from reloading after submitting the form
    const enteredEmail = emailInputRef.current.value; // get the value of the input field
    const enteredFeedback = feedbackInputRef.current.value; // get the value of the textarea

    const reqBody = { email: enteredEmail, text: enteredFeedback };
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    // send the email and feedback to the server
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your email address</label>
          <input id="email" type="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
