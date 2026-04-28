export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="navbar">
      <h1>Task Manager</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}