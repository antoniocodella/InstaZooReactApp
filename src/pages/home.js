import { Topbar } from "../component/Topbar";
import Cards from "../component/Cards";
import { useState, useEffect } from "react";

export function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://zoo-animal-api.herokuapp.com/animals/rand/${8}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  console.log(data);

  return (
    <div>
      <Topbar />
      {data && <Cards animals={data}/>}
      
    </div>
  );
}
