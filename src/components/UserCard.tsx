import React, { useEffect, useState } from 'react';

type Props = {
  userInfo:{
    name: string;
    age: number;
    email: string;
  }[];
};
type UserInfo={
	name: string;
	age: number;
	email: string;
}
const UserCard = ({ userInfo }:Props) => {
  return (
    <>
      <h1>User Info</h1>
      {
       userInfo && userInfo?.map((user:UserInfo)=>{
          return (
            <div key={user.name}>
              <h1>{user.name}</h1>
              <h2>{user.email}</h2>
              <h3>{user.age}</h3>
            </div>
          );
       })
      
      }
      
    </>
  );
};
export default UserCard;
