 import {apiSlice}from './apiSlice';
 import { ORDERS_URL, PAYPAL_URL } from '../constants';



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
        payOrder: builder.mutation({
          query: ({ orderId, details }) => ({
            url: `${ORDERS_URL}/${orderId}/pay`,
            method: 'PUT',
            body: {...details},
          }),
        }),
        getPayPalClientId: builder.query({
          query: () => ({
            url: PAYPAL_URL,
          }),
           keepUnusedDataFor: 5 // Cache the order details for 5 seconds 
        }),
          getMyOrders: builder.query({
            query: () => ({
              url: `${ORDERS_URL}/mine`,
              method: 'GET',
            }),
          keepUnusedDataFor: 5 // Cache the order details for 5 seconds
         }),
           getOrders: builder.query({
            query: () => ({
              url: ORDERS_URL,
              method: 'GET',
            }),
          keepUnusedDataFor: 5 // Cache the order details for 5 seconds
           }),
           deliverOrder: builder.mutation({
            query: (orderId) => ({
              url: `${ORDERS_URL}/${orderId}/deliver`,
              method: 'PUT',
            }), 
           }),
      }),
   });

export const {
   useCreateOrderMutation,
   useGetOrderDetailsQuery,
   usePayOrderMutation,
   useGetPayPalClientIdQuery,
   useGetMyOrdersQuery,
    useGetOrdersQuery,
    useDeliverOrderMutation
} = ordersApiSlice; // Export the hook for creating orders


//{error&& <Message variant="danger">{error}</Message> }