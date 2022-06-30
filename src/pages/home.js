import { Topbar } from "../component/Topbar";
import { useState, useEffect, useCallback } from "react";
import CardDetail from "../component/CardDetail";
import { Footer } from "../component/Footer";
import Like from "../component/Like";
import { Card } from "../component/Card";

export function Home() {
  const [data, setData] = useState(null);
  const [openDetails, setOpenDetails] = useState(false);
  const [singleCard, setSingleCard] = useState();
  const [favCards, setFavCards] = useState([]);
  const [openLike, setOpenLike] = useState(false);
  const [cartAnimal, setCartAnimal] = useState();
  const [inputText, setInputText] = useState("");
  const [serchAnimal, setSerchAnimal] = useState([]);
  const [filterSerchData, setFilterSerchData] = useState([]);

  const inputHandler = useCallback(
    (e) => {
      let serchAnimals = e.target.value;
      setInputText(serchAnimal);
      let newFilter = data.filter((value) => {
        return value.name.toLowerCase().includes(serchAnimals.toLowerCase());
      });
      if (serchAnimals === "") {
        setFilterSerchData([]);
      } else {
        setFilterSerchData(newFilter);
      }
    },
    [data, serchAnimal]
  );
  const clearInput = useCallback(() => {
    setFilterSerchData([]);
    setInputText("");
  }, []);

  useEffect(() => {
    fetch(`https://zoo-animal-api.herokuapp.com/animals/rand/${8}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setSerchAnimal(data);
      });
  }, []);

  const handleDetail = useCallback((singleCard) => {
    setOpenDetails(true);
    setSingleCard(singleCard);
  }, []);
  const closeDetail = useCallback(() => {
    setOpenDetails(false);
  }, []);

  const likeOpen = useCallback((animal) => {
    setOpenLike(true);
    setCartAnimal(animal);
  }, []);

  const closeLike = useCallback(() => {
    setOpenLike(false);
  }, []);

  const addToLike = useCallback(
    (animal) => {
      const control = favCards.find((animals) => animals.id === animal.id);
      if (control === undefined) {
        setFavCards(() => [...favCards, { ...animal }]);
      } else {
        setFavCards(favCards.filter((animals) => animal.id !== animals.id));
      }
    },
    [favCards]
  );

  const removeToLike = useCallback(
    (animalToRemove) => {
      setFavCards(favCards.filter((animal) => animal.id !== animalToRemove.id));
    },
    [favCards]
  );

  const setBg = openDetails || openLike ? "bg-change" : "";
  console.log(data);

  return (
    <div className={"bg-[#3c3c3c] h-[100%]"}>
      <Topbar
        filterSerchData={filterSerchData}
        likeOpen={likeOpen}
        singleCard={singleCard}
        like={favCards}
        inputHandler={inputHandler}
        data={serchAnimal}
        inputText={inputText}
        clearInput={clearInput}
        handleDetail={handleDetail}
        openDetails={openDetails}
      />
      {openLike && (
        <Like
          favCards={favCards}
          closeLike={closeLike}
          removeToLike={removeToLike}
        />
      )}

      {data && (
        <div className="flex flex-wrap flex justify-between h-[85%] ">
          {data.map((animal) => (
            <Card handleDetail={handleDetail} key={animal.id} animal={animal} />
          ))}
        </div>
      )}

      <div
        onClick={openDetails ? closeDetail : openLike ? closeLike : null}
        id="bg-cards"
        className={setBg}
      ></div>
      {openDetails && (
        <CardDetail
          like={favCards}
          singleCard={singleCard}
          addToLike={addToLike}
          closeDetail={closeDetail}
        />
      )}
      <Footer />
    </div>
  );
}
