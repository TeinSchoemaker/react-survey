import PropTypes from "prop-types";
import RadioButtons from "./RadioButtons";
import Checkboxes from "./Checkboxes";

export default function Form({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    const submission = {
      bestFeatures: data.getAll("best-features"),
      worstBits: data.getAll("worst-bits"),
      consistency: data.get("consistency") || "",
      color: data.get("color") || "",
      logo: data.get("logo") || "",
      spendTime: data.getAll("spend-time"),
      review: data.get("review") || "",
      username: data.get("username") || "",
      email: data.get("email") || "",
      submittedAt: new Date().toISOString(),
    };

    console.log("Survey submission:", submission);
    onSubmit?.(submission);
    e.target.reset();
  }

  const ratingOptions = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
  ];

  const yesOptions = [
    { label: "It's yellow!", value: "yellow" },
    { label: "It squeaks!", value: "squeaks" },
    { label: "It has a logo!", value: "logo" },
    { label: "Its big!", value: "big" },
  ];

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>

      <Checkboxes
        name="best-features"
        legend="What would you say that are the best features of your rubber duck?"
        options={yesOptions}
      />

      <Checkboxes
        name="worst-bits"
        legend="What would you say that are the worst bits of your rubber duck?"
        options={yesOptions}
      />

      <RadioButtons
        name="consistency"
        legend="How do you rate your rubber duck consistency?"
        options={ratingOptions}
      />

      <RadioButtons
        name="color"
        legend="How do you rate your rubber duck colour?"
        options={ratingOptions}
      />

      <RadioButtons
        name="logo"
        legend="How do you rate your rubber duck logo?"
        options={ratingOptions}
      />

      <Checkboxes
        name="spend-time"
        legend="How do you like to spend time with your rubber duck"
        options={[
          { label: "Swimming", value: "swimming" },
          { label: "Bathing", value: "bathing" },
          { label: "Chatting", value: "chatting" },
          { label: "I don't like to spend time with it", value: "noTime" },
        ]}
      />

      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10"></textarea>
      </label>

      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" defaultValue="" />
      </label>

      <label>
        Leave us your email pretty please??
        <input type="email" name="email" defaultValue="" />
      </label>

      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};
