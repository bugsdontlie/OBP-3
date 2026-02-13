import { useContext } from "react";
import { AuthContext, useAuthContext } from "../context/AuthContext";
import { useState } from "react";

function SignUp() {
  //   const {signUp} = useAuthContext(); This is also fine
  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();

  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Phone"
        onChange={(e) => setPhone(e.target.value)}
      />

      <button
        onClick={() => {
          console.log(signUp({ name, email, phone, password }));
        }}
      >
        Submit
      </button>
    </>
  );
}

export default SignUp;
