import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ArtikelApi = createApi({
    reducerPath: "ArtikelApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    endpoints: (builder) => ({
        getAllArtikel: builder.query({
            query: () => "artikel",
        }),
        getArtikelById: builder.query({
            query: (id) => `artikel/${id}`
        })
    })
})

export const { useGetAllArtikelQuery, useGetArtikelByIdQuery } = ArtikelApi