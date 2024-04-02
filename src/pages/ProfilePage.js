import { useSelector } from "react-redux";

export default function ProfilePage() {
  const login = useSelector((state) => state.login.login);
  return <h1>{login}</h1>;
}
