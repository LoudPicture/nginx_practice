import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const apiBase = process.env.NODE_ENV === "development"
      ? "http://localhost:8000"
      : "";

    fetch(`${apiBase}/api/hello`)
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => console.error("Error fetching:", err));
  }, []);

  return <h1>{msg || "Loading..."}</h1>;
}

export default App;
