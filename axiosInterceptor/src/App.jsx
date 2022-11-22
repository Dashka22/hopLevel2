import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState, useRef } from "react";
import { UserBox } from "./components/UserBox";
import { useInstance } from "./hooks/useInstance";
import { SpinnerCustomized } from "./components/Spinner";

export default function App() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    setIsLoading(true);
    const rosponse = await useInstance.get(`user`);
    setData(rosponse.data.data);
    setIsLoading(false);
  };

  const getDataById = async () => {
    const rosponse = await useInstance.get(`user/${id}`);
    setData([rosponse.data]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <input type="text" onChange={(e) => setId(e.target.value)}></input>
      <button onClick={getDataById}>Get</button>

      {isLoading ? (
        <SpinnerCustomized />
      ) : (
        data.map((user, id) => {
          return <UserBox key={id} user={user} />;
        })
      )}
    </div>
  );
}
