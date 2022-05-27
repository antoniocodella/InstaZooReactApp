import { Topbar } from "../component/Topbar";
import Cards from "../component/Cards";
import { useState, useEffect, useCallback } from "react";
import CardDetail from "../component/CardDetail";
import { Footer } from "../component/Footer";
import Like from "../component/Like";

export function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://zoo-animal-api.herokuapp.com/animals/rand/${8}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  const [openDetails, setOpenDetails] = useState(false);
  const [singleCard, setSingleCard] = useState();

  const handleDetail = (singleCard) => {
    setOpenDetails(true);
    setSingleCard(singleCard);
  };
  const closeDetail = () => {
    setOpenDetails(false);
  };

  const [newArray, setNewArray] = useState([]);
  const [openLike, setOpenLike] = useState(false);
  const [cartAnimal, setCartAnimal] = useState();

  const likeOpen = useCallback((animal) => {
    setOpenLike(true);
    setCartAnimal(animal);
  }, []);

  const closeLike = useCallback(() => {
    setOpenLike(false);
  }, []);

  const addToLike = (animal) => {
    const control = newArray.find((animals) => animals.name === animal.name);
    if (control === undefined) {
      setNewArray(() => [...newArray, { ...animal }]);
    } else {
      setNewArray(newArray.filter((animals) => animal.name !== animals.name));
    }
  };

  const removeToLike = (animalToRemove) => {
    setNewArray(newArray.filter((animal) => animal !== animalToRemove));
  };

  const setBg = openDetails || openLike ? "bg-change" : "";
  console.log(data);

  return (
    <div className={"bg-[#3c3c3c] h-[100%]"}>
      <Topbar likeOpen={likeOpen} singleCard={singleCard} like={newArray} />
      {openLike && (
        <Like
          newArray={newArray}
          closeLike={closeLike}
          removeToLike={removeToLike}
        />
      )}

      {data && (
        <Cards
          singleCard={singleCard}
          handleDetail={handleDetail}
          data={data}
        />
      )}
      <div
        onClick={openDetails ? closeDetail : openLike ? closeLike : null}
        id="bg-cards"
        className={setBg}
      ></div>
      {openDetails && (
        <CardDetail
          like={newArray}
          singleCard={singleCard}
          addToLike={addToLike}
          closeDetail={closeDetail}
        />
      )}
      <Footer />
    </div>
  );
}
