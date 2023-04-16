import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [err,setError]=useState(null)

  const navigate =useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login")
    } catch (err) {
      setError(err.response.data)
    }
  };

  return (
    <div className="auth">
      <h1>注册</h1>
      <form>
        <input
          required
          type="text"
          placeholder="账号"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="邮箱"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="密码"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>注册</button>
        {err && <p>{err}</p>}
        <span>
          已经有账号<Link to="/login">去登录</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
