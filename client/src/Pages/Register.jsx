import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`http://localhost:9000/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response);
    } catch (error) {
      console.log("Register: ", error);
    }
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Ankit Shah"
            value={user.username}
            onChange={handleInput}
          />
          <input
            type="email"
            placeholder="Enter your email here"
            name="email"
            id="email"
            value={user.email}
            onChange={handleInput}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter you password here"
            value={user.password}
            onChange={handleInput}
          />
          <button className="primary" type="submit">
            Register
          </button>
          <div className="text-center py-2 text-gray-500">
            Already a member?{" "}
            <Link className="underline text-black" to={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
