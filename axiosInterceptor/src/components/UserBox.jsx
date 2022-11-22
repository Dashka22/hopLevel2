export const UserBox = ({ user }) => {
  return (
    <div style={{ border: "1px solid red" }}>
      <p>{user.title}</p>
      <p>
        {user.firstName} {user.lastName}
      </p>
      <p>{user.id}</p>
    </div>
  );
};
