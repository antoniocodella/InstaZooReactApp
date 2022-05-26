import { Topbar } from "../component/Topbar";
import Cards from "../component/Cards";
import { useState, useEffect ,useCallback } from "react";
import CardDetail from "../component/CardDetail";

export function Home() {
  const [data, setData] = useState(null);
  const [openDetails, SetOpenDetails] = useState(false);
  const [product, setProduct] = useState();

   const handleDetail =(product) => {
    SetOpenDetails(true);
    setProduct(product);
  };
    const closeDetail =() => {
    SetOpenDetails(false);
  };

  useEffect(() => {
    fetch(`https://zoo-animal-api.herokuapp.com/animals/rand/${8}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
    const setBg = openDetails  ? "bg-change" : "";
  console.log(data);

  return (
    <div className="bg-[#3c3c3c]">
      <Topbar />
      {data && <Cards product={product} handleDetail={handleDetail} data={data} />}
          <div
        id='bg-cards'
        className={setBg} 
      ></div>
          {openDetails && (
        <CardDetail
          product={product}
          closeDetail={closeDetail}
        />
      )}
    </div>

  );
}
