import { useState } from "react";
import Form from "./Form";

function Survey() {
  const [submissions, setSubmissions] = useState([]);

  function handleSubmit(submission) {
    setSubmissions((prev) => [submission, ...prev]);
  }

  return (
    <main className="survey">
      <section className="survey__list">
        <h2>Answers list</h2>

        {submissions.length === 0 ? (
          <p>No answers yet.</p>
        ) : (
          <ul className="answers">
            {submissions.map((s, i) => (
              <li key={s.submittedAt + i} className="answer">
                <p><strong>{s.username || "Some dude"} said:</strong></p>

                <p><em>What would you say that are the best features of your rubber duck?</em><br />
                  {s.bestFeatures?.length ? s.bestFeatures.join("\n") : "—"}
                </p>

                <p><em>What would you say that are the worst bits of your rubber duck?</em><br />
                  {s.worstBits?.length ? s.worstBits.join("\n") : "—"}
                </p>

                <p><em>How do you rate your rubber duck consistency?</em><br />
                  {s.consistency || "—"}
                </p>

                <p><em>How do you rate your rubber duck colour?</em><br />
                  {s.color || "—"}
                </p>

                <p><em>How do you rate your rubber duck logo?</em><br />
                  {s.logo || "—"}
                </p>

                <p><em>How do you like to spend time with your rubber duck?</em><br />
                  {s.spendTime?.length ? s.spendTime.join("\n") : "—"}
                </p>

                <p><em>What else have you got to say about your rubber duck?</em><br />
                  {s.review || "—"}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="survey__form">
        <Form onSubmit={handleSubmit} />
      </section>
    </main>
  );
}

export default Survey;
