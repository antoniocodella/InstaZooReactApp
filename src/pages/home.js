import { Topbar } from "../component/Topbar";
import Cards from "../component/Cards";
import { useState, useEffect, useCallback } from "react";
import CardDetail from "../component/CardDetail";
import { Footer } from "../component/Footer";
import Like from "../component/Like";

export function Home() {
  const [data, setData] = useState(null);
  const [openDetails, setOpenDetails] = useState(false);
  const [singleCard, setSingleCard] = useState();
  const [newArray, setNewArray] = useState([]);

  const [openCart, setOpenCart] = useState(false);
  const [cartProducts, setCartProducts] = useState();

  const cartOpen = useCallback((products) => {
    setOpenCart(true);
    setCartProducts(products);
  }, []);
  const closeCart = useCallback(() => {
    setOpenCart(false);
  }, []);

  const addToCart = (product) => {
    setNewArray(() => [...newArray, ...product]);
  };

  const removeToCart = (productToRemove) => {
    setNewArray(newArray.filter((product) => product !== productToRemove));
  };

  const handleDetail = (singleCard) => {
    setOpenDetails(true);
    setSingleCard(singleCard);
  };
  const closeDetail = () => {
    setOpenDetails(false);
  };

  useEffect(() => {
    fetch(`https://zoo-animal-api.herokuapp.com/animals/rand/${8}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  const setBg = openDetails ? "bg-change" : "";
  console.log(data);

  return (
    <div className="bg-[#3c3c3c] h-[100%] ">
      <Topbar cartOpen={cartOpen} singleCard={singleCard} like={newArray} />
      {openCart && (
        <Like
          newArray={newArray}
          closeCart={closeCart}
          removeToCart={removeToCart}
        />
      )}

      {data && (
        <Cards
          singleCard={singleCard}
          handleDetail={handleDetail}
          data={data}
        />
      )}
      <div id="bg-cards" className={setBg}></div>
      {openDetails && (
        <CardDetail
          singleCard={singleCard}
          addToCart={addToCart}
          closeDetail={closeDetail}
        />
      )}
      <Footer />
    </div>
  );
}
