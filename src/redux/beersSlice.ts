import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
}

interface BeerState {
  beers: Beer[];
  loading: boolean;
  error: string | null;
}

const initialState: BeerState = {
  beers: [],
  loading: false,
  error: null,
};

// Fetch 10 random beers using createAsyncThunk
export const fetchRandomBeers = createAsyncThunk(
  "beer/fetchRandom",
  async (_, thunkAPI) => {
    try {
      const beerPromises = Array.from({ length: 10 }, async () => {
        const response = await fetch("https://api.punkapi.com/v2/beers/random");
        if (!response.ok) throw new Error("Failed to fetch beer");
        const data = await response.json();
        return data[0]; // API returns an array, so take the first item
      });

      const beers = await Promise.all(beerPromises);
      return beers;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error fetching beer data");
    }
  }
);

const beerSlice = createSlice({
  name: "beer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomBeers.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log(true);
      })
      .addCase(fetchRandomBeers.fulfilled, (state, action) => {
        state.loading = false;
        state.beers = action.payload;
      })
      .addCase(fetchRandomBeers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default beerSlice.reducer;
