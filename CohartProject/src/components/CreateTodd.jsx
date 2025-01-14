import React from "react";
import { useState } from "react";

const CreateTodd = () => {
  const [tital, setTital] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        style={{
          padding: 10,
          margin: 5,
        }}
        onChange={(e) => {
          const val = e.target.value;
          setTital(val);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="description"
        style={{
          padding: 10,
          margin: 5,
        }}
        onChange={(e) => {
          const val = e.target.value;
         
          
          setDescription((val));
        }}
      />
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              tital,
               description,
            }),
            headers:{
                'content-type':"application/json"
            }
        }
          ).then(async (res)=>{
             const ans= await res.json();
             console.log(ans);
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default CreateTodd;
