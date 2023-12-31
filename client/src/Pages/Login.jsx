import { Link } from "react-router-dom";

const LoginPage = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [redirect, setRedirect] = useState(false);

  // const handleLoginUser = async (ev) => {
  //   ev.preventDefault();
  //   try {
  //     const UserInfo = await axios.post(
  //       "/login",
  //       { email, password },
  //       { withCredentials: true }
  //     );
  //     setUser(UserInfo.data);
  //     alert("Login Successful");

  //     setRedirect(true);
  //   } catch (error) {
  //     alert("Login Failed");
  //     console.log(error);
  //   }
  // };

  // if (redirect) {
  //   return <Navigate to={"/"} />;
  // }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email here"
            // value={email}
            // onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="Enter you password here"
            // value={password}
            // onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Dont have an account yet?
            <Link className="underline text-black" to={"/register"}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
