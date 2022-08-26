import React, { useState } from "react";
import axios from "axios";

const Post = () => {
  const [name, setName] = useState({
    firstName: " ",
    lastName: " ",
    phoneNumber:" ",
  })
  const { firstName, lastName, phoneNumber } = name;

  const Change = (e) => {
    setName ({ ...name, [e.target.name]: e.target.value });
  }

  const Submit = (e) => {

    e.preventDefault();
    axios.post("http://localhost:5000/name", name);
    console.log(name);  
  }

  return (
    <div class="mt-5">
      <form onSubmit ={Submit}>
        <input type="text" name="firstName" value={firstName} onChange={Change} /><br/><br />
        <input type="text" name="lastName" value={lastName} onChange={Change} /><br/><br />
        <input type="text" name="phoneNumber" value={phoneNumber} onChange={Change} /><br/><br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Post;
