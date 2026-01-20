function DisplayUsers({ users }) {
  return (
    <>
      {users.map((user, ind) => {
        return (
          <div key={ind}>
            <h1>{user.name}</h1>
            <span>{user.age}</span>
            <p>{user.phone}</p>
          </div>
        );
      })}
    </>
  );
}

export default DisplayUsers;
