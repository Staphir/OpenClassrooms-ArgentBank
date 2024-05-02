import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => 'data',
    }),
  }),
});

export const { useGetDataQuery } = api;

export default api;
