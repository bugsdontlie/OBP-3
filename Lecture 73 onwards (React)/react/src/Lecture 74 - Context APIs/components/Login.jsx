import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  });
  return (
    <>
      <button onClick={() => setLoggedIn((loggedIn) => !loggedIn)}>
        {loggedIn ? "Log Out" : "Login"}
      </button>
    </>
  );
}

export default Login;
