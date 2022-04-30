import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {

    const { loginWithRedirect  } = useAuth0();

  return (
    <>
      <div>Profile Page</div>
      <button onClick={() => loginWithRedirect ()}>Login</button>
    </>
  );
};

export default Profile;
