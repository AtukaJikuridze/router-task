import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
interface DashboardState {
  data: Comment[];
  loading: boolean;
  error: any;
}
const initialState: DashboardState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchDashboardData = createAsyncThunk(
  "dashboard/fetchData",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      return data.slice(0, 40);
    } catch (error) {
      return thunkAPI.rejectWithValue("Error fetching dashboard data");
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default dashboardSlice.reducer;
