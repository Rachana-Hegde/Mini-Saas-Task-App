import { useState } from "react";
import { loginUser } from "../services/api";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // Basic validation
    if (!form.email || !form.password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const data = await loginUser(form);

      console.log("Login response:", data);

      // If no token login failed
      if (!data.token) {
        alert(data.msg || "Login failed");
        return;
      }

      // Save token
      localStorage.setItem("token", data.token);

      // Redirect to dashboard
      window.location.href = "/dashboard";

    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
     <div className="auth-container">
    <div className="auth-box">
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl mb-4 font-semibold text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3 rounded"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4 rounded"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="bg-blue-500 text-white w-full p-2 rounded hover:bg-blue-600"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
          <p className="text-sm text-center mt-3">
            Don’t have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => (window.location = "/signup")}
            >
              Signup
            </span>
          </p>
        <button onClick={() => (window.location = "/signup")}>
          Create Account
        </button>

      </div>
    </div>
     </div>
  </div>
  );
}