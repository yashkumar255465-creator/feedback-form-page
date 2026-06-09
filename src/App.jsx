import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            message,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);

      setName("");
      setMessage("");
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="container">
      <h1  className="Yash"> Feedback Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          placeholder="Enter Feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;