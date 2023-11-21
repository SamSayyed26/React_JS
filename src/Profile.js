import { useState } from "react";

function Profile() {
  //   const [loggedIn, setLoggedIn] = useState(false);

  //   return <div>{loggedIn ? <h3>Welcome Sam</h3> : <h3>Welcome Guest</h3>}</div>;

  const [loggedIn, setLoggedIn] = useState(3);

  return (
    <div>
      {loggedIn === 1 ? (
        <h3>Welcome User1</h3>
      ) : loggedIn === 2 ? (
        <h3>Welcome User2</h3>
      ) : (
        <h3>Wlecome User3</h3>
      )}
    </div>
  );
}

export default Profile;
