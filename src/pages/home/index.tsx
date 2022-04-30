import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { logout, user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div>Home Page</div>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
      {isAuthenticated && (
          <p>{user?.name}</p>
      )}
    </>
  );
};

export default Home;
