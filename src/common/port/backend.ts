import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CollectionResponse } from '../../collection/model/CollectionResponse';
import { Card, SetResponse } from '../model/SetResponse';
import { SetsResponse } from '../model/SetsResponse';

export const backendApi = createApi({
  reducerPath: 'backendApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  tagTypes: ['Backend'],
  endpoints: (build) => ({

    getAllSets: build.query<SetsResponse, void>({
      query: () => 'sets',
      providesTags: () => [{ type: 'Backend', id: 'SETS' }],
    }),

    getSetByCode: build.query<SetResponse, string>({
      query: (setCode) => `sets/${setCode}/cards`,
      providesTags: (response) => response ? [{ type: 'Backend', id: response.setCode }] : [],
    }),

    getCollection: build.query<CollectionResponse, void>({
      query: () => 'collection',
      providesTags: () => [{ type: 'Backend', id: 'COLLECTION' }],
    }),

    addToCollection: build.mutation<void, { card: Card, ownedFoil: boolean }>({
      query: ({ card, ownedFoil }) => ({
        url: `collection/${card.id}/add`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: ownedFoil,
      }),
      invalidatesTags: (_result, _error, { card }) => [
        { type: 'Backend', id: 'COLLECTION' },
        { type: "Backend", id: card.setCode },
      ],
    }),

    removeFromCollection: build.mutation<void, { card: Card, ownedFoil: boolean }>({
      query: ({ card, ownedFoil }) => ({
        url: `collection/${card.id}/remove`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: ownedFoil,
      }),
      invalidatesTags: (_result, _error, { card }) => [
        { type: 'Backend', id: 'COLLECTION' },
        { type: "Backend", id: card.setCode },
      ],
    }),
  }),
})

export const {
  useGetAllSetsQuery,
  useGetSetByCodeQuery,
  useGetCollectionQuery,
  useAddToCollectionMutation,
  useRemoveFromCollectionMutation,
} = backendApi
