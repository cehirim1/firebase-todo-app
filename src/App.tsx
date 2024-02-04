import { useState } from "react";
import { useEmailSignupMutation } from "./store/API/userAuthAPI";

const App = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const [emailSignup, { isLoading, isError, isSuccess }] =
    useEmailSignupMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailSignup({
      email: data.email,
      password: data.password,
    });
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error occured...</h1>;
  if (isSuccess) return <h1>Account Created Successfully</h1>;

  return (
    <form className="container mx-auto max-w-8xl" onSubmit={handleSubmit}>
      <input
        type="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <br />
      <input
        type="password"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <button type="submit">Create User</button>
    </form>
  );
};

export default App;
