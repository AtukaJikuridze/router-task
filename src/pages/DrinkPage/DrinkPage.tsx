import React from "react";
import { useFetchDrinksQuery } from "../../redux/drink.api";

const DrinksPage = () => {
  const { data, error, isLoading } = useFetchDrinksQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error fetching drinks</p>;

  const randomDrinks = [...(data?.drinks || [])]
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-3/4">
        <h1 className="text-2xl font-bold mb-4">Random Drinks</h1>
        <ul className="text-left">
          {randomDrinks.map((drink) => (
            <li key={drink.idDrink} className="p-2 border-b flex items-center">
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className="w-12 h-12 mr-4 rounded-full"
              />
              {drink.strDrink}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DrinksPage;
