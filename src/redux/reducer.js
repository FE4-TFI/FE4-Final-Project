import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Membuat reducer api dengan helper createApi RTK
export const ArtikelApi = createApi({
    // Nama reducer
    reducerPath: "ArtikelApi",
    // Base URL Api
    baseQuery: fetchBaseQuery({ baseUrl: "https://6488bd9b0e2469c038fe4981.mockapi.io/" }),
    // Endpoint Api
    endpoints: (builder) => ({
        // Query mengambil semua data artikel
        getAllArtikel: builder.query({
            query: () => "articles",
        }),
        // Query mengambil data artikel by id
        getArtikelById: builder.query({
            query: (id) => `articles/${id}`
        }),
        getAllVideos: builder.query({
            query: () => "videos"
        })
    })
})

// Export helper
export const { useGetAllArtikelQuery, useGetArtikelByIdQuery, useGetAllVideosQuery } = ArtikelApi