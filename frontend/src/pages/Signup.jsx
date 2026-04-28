import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSignup = async () => {
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (data.id) {
      alert("Signup successful");
      window.location = "/";
    } else {
      alert(data.msg || "Signup failed");
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