import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '36aab94ddbmshbb4fafefd9d0e4dp19ab49jsn2830f2c246f6'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) =>({url, headers: cryptoApiHeaders})
    
export const cryptoApi  = createApi({
reducerPath: 'cryptoApi',
baseQuery: fetchBaseQuery({baseUrl}),
endpoints:(builder) =>({
    getCryptos: builder.query({
        query:(count) =>createRequest('/coin?limit=${count}'),
    }),
    getCryptoDetails: builder.query({
        query:(coinId) =>createRequest('/coin/${coinId}'),
    }),
    getCryptoHistory: builder.query({
        query:({coinId , timeperiod}) =>createRequest('/coin/${coinId}/history/${timeperiod}'),
    })
})
});

export const {useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery}  = cryptoApi;