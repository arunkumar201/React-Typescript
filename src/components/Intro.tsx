/** @format */

import React, { useState } from "react";
import UserCard from "./UserCard";
import Status from "./Status";
import Heading from "./Heading";
import Heading1 from "./Heading1";
import MyButton from "./MyButton";
import StyleContainer from "./StyleContainer";
type Props = {
  GreetMsg: string;
  StudentInfo: StudentInfo;
};
type StudentInfo = {
  name: string
  city: string
  Age: number
ZipCode: number
};
interface UserInfo{
  name: string;
  age: number;
  email: string;

}
const userInfo: UserInfo[] = [
  {
    name: "Alice",
    age: 24,
    email: "alice@example.com",
  },
  {
    name: "Bob",
    age: 32,
    email: "bob@example.com",
  },
  {
    name: "Charlie",
    age: 18,
    email: "charlie@example.com",
  },
];


export default function Intro({ StudentInfo,GreetMsg }: Props) {
	const [Input,setInput] = useState<string>('');
	const [Msg,setMsg] = useState<string>("");
	const ClickHandler=()=>{
		setMsg(Input);
	}
  return (
    <>
      <div>
        <strong>{GreetMsg}</strong>
        <h1>Student Age {StudentInfo.Age}</h1>
        <h1>Zip Code {StudentInfo.ZipCode}</h1>
        <h1>Name {StudentInfo.name}</h1>
        <h1>City Name {StudentInfo.city}</h1>
        <input
          type="text"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={ClickHandler}>Show Msg</button>
        <h1>{Msg}</h1>

        <div>
          <UserCard userInfo={userInfo} />
          <Status Status={("loading")} />
          <Heading>Hi My Name is Arun How Are You?</Heading>
          <Heading1>
          <Heading>
              THis is the second Heading in the Intro.tsx
          </Heading>
          </Heading1>
          <MyButton HandleClick={(event,id)=>{
            console.log(event,"Hi My Name is Arun How Are Youu",id);
          }} />
          <StyleContainer Styles={{color:'blue',fontSize:'22px',lineHeight:'1.9rem'}} />
        </div>
      </div>
    </>
  );
}
