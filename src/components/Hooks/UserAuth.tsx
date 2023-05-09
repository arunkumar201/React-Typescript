/** @format */

import React, { useState } from "react";
function UserAuth() {
  const msg = "Plaese Login Now";
  const AuthUser = {
    name: "Arun Kumar",
    Email: "arun.karma@gmail.com",
    
  };
  type AuthUserType = {
    name: string;
    Email: string;
  };
  const [isLoggedIn, setIsedLoggedIn] = useState(false);
	const [GreetMsg,setGreetMsg] = useState<AuthUserType | null>({} as AuthUserType );
  const LoginHandler = () => {
    setIsedLoggedIn(true);
    setGreetMsg(AuthUser);
  };
  const LogoutHandler = () => {
    setIsedLoggedIn(false);
    setGreetMsg(null);
  };
  return (
    <>
      <div>
      {isLoggedIn && <button onClick={LogoutHandler}>Logout</button>}
        {!isLoggedIn && <button onClick={LoginHandler}>Login Now</button>}
        <h1>{GreetMsg?.name}</h1>
		{!isLoggedIn && <h1>{msg}</h1>}
        <h1>{GreetMsg?.Email}</h1>
        
      </div>
    </>
  );
}

export default UserAuth;
