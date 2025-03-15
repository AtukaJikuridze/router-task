import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IDrink {
  idDrink: string;
  strDrink: string;
  strAlcoholic: string;
  strDrinkThumb: string;
}

export const drinksAPI = createApi({
  reducerPath: "drinksAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.thecocktaildb.com/api/json/v1/1/" }),
  tagTypes: ["Drinks"],
  endpoints: (builder) => ({
    fetchDrinks: builder.query<{ drinks: IDrink[] }, void>({
      query: () => "filter.php?c=Cocktail",
    }),
  }),
});

export const { useFetchDrinksQuery } = drinksAPI;
