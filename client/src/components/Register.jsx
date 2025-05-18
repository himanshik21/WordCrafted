import { useState } from "react";

export const Register = () => {
  // useState for store value in a state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    // console.log(response);
    if (response.status === 200) {
      alert("Registration Successful!");
    } else {
      alert("Register failed.");
    }
  }

  return (
    <form onSubmit={register}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Register</button>
    </form>
  );
};
