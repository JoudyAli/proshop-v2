import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; // Import RTK Query functions
import { BASE_URL } from '../constants'; // Import base URL constant

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL }); // Define base query with the base URL

export const apiSlice = createApi({
  baseQuery, // Use base query for requests
  tagTypes: ['Product', 'User', 'Order'], // Define cache tags for invalidation
  endpoints: () => ({})
});
