 import {apiSlice}from './apiSlice';
 import { ORDERS_URL } from '../constants';

    export const ordersApiSlice = apiSlice.injectEndpoints({ 
    endpoints: (builder) => ({ 
        createOrder : builder.mutation({
            query: (order) => ({
                url:ORDERS_URL,
                method: 'POST',
                body: {...order},
            }),
        }),
        getOrderDetails: builder.query({
          query: (orderId) => ({
            url: `${ORDERS_URL}/${orderId}`,
            method: 'GET',
          }),
          keepUnusedDataFor: 5 // Cache the order details for 5 seconds
        }),
      })  
   });

export const { useCreateOrderMutation , useGetOrderDetailsQuery} =
 ordersApiSlice; // Export the hook for creating orders


//{error&& <Message variant="danger">{error}</Message> }