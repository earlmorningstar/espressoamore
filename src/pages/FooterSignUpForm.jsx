import { useState } from "react";


export default function FooterSignUpForm() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSignup = () => {
    setEmail("");
  };
  return (
      <div className="signUp-style">
        <input
          type="email"
          placeholder="Input Email Address"
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={handleSignup}>Sign Up</button>
      </div>
  );
}
