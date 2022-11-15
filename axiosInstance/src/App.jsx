import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState({});
  const [id, setId] = useState(1);

  const instance = axios.create({
    baseURL: "https://dummyapi.io/data/v1/",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "app-id": "63104c3120f6e665ecf628ba",
    },
  });

  //hereglegchdin data awj bga

  const getData = async () => {
    const rosponse = await instance.get(`user`);
    console.log(rosponse);
    setData(rosponse.data);
  };

  // const postData = async () => {
  //   const rosponse = await instance.post("", {});
  //   console.log(rosponse);
  // };

  // const updateData = async () => {
  //   const rosponse = await instance.patch("", {});
  //   console.log(rosponse);
  // };

  // const deleteData = async () => {
  //   const rosponse = await instance.delete("");
  //   console.log(rosponse);
  // };

  return (
    <div>
      <input type="number" onChange={(e) => setId(e.target.value)}></input>
      <button onClick={getData}>Get</button>
      <button onClick={postData}>Post</button>
      <button onClick={deleteData}>Delete</button>
      <button onClick={updateData}>Update</button>
      {/* Hereglegchdin medeelel-g bugdin end haruulna

      firstName
      lastName
      picture
      title */}

      {/* Hereglegch burtguuleh
        firstName, lastName, email zaawal oruulna
      */}

      {/* Hereglegch update hiih
        firstName, lastName
      */}

      {/* Hereglegch ustgah
       */}
    </div>
  );
}
