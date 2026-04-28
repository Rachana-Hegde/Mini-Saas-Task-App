import { useState } from "react";
import { signupUser } from "../services/api";

export default function Signup() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSignup = async () => {
    const data = await signupUser(form);

    console.log("Signup response:", data);

    if (data.email) {
        alert("Signup successful");
        window.location.href = "/";
    } else {
        alert(data.message || "Signup failed");
    }
  };

  return (
    <div className="auth-container">
    <div className="auth-box">
    <div>
      <h1>Signup</h1>

      <input
        placeholder="Email"
        onChange={(e)=>setForm({...form,email:e.target.value})}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setForm({...form,password:e.target.value})}
      />

      <button onClick={handleSignup}>Signup</button>
    </div>
     </div>
  </div>
  );
}