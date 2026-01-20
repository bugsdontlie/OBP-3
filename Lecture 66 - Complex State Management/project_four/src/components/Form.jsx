import { useState } from "react";

function Form({ setUsers }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState([]);

  function validateForm() {
    let errors = false;
    setError((error) => []);
    if (!name) {
      setError((error) => [...error, "Name is empty"]);
      errors = true;
    }
    if (!age) {
      setError((error) => [...error, "Invalid age!"]);
      errors = true;
    } else {
      setAge(parseInt(age));
    }
    if (!phone) {
      setError((error) => [...error, "Invalid phone number"]);
      errors = true;
    }
    //if no errors, then save the current user to users array, using setUser
    if (!errors) {
      setUsers((users) => [
        ...users,
        {
          name: name,
          age,
          phone,
        },
      ]);
      setName("");
      setAge(0);
      setPhone("");
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <span>{error.join(", ")}</span>
      <button onClick={validateForm}>Submit</button>
    </>
  );
}

export default Form;
