import { PRODUCTS_URL, UPLOAD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
     endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({keyword, pageNumber}) => ({ 
                url: PRODUCTS_URL,
                params:{
                   keyword,
                    pageNumber,
                }

             }),
             keepUnusedDataFor: 5 ,
             providesTags: ['Product'],
          }),
        getProductDetails: builder.query({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
            }),
            keepUnusedDataFor: 5,
           }),
            createProduct: builder.mutation({
                query: () => ({
                    url: PRODUCTS_URL,
                    method: 'POST',  
                    // No body needed for creating a product
      
                 }),  
                 invalidatesTags: ['Product'],
                }),
 
                 updateProduct: builder.mutation({
                    query: (data) => ({
                        url: `${PRODUCTS_URL}/${data.productId}`,
                        method: 'PUT',
                        body: data,
                    }),
                    invalidatesTags: ['Product'],
                   }),   
                 
                      uploadProductImage: builder.mutation({
                        query: (data) => ({
                             url: `${UPLOAD_URL}`,
                            method: 'POST',
                            body: data,
                        }),
                
                        }),
                        deleteProducts: builder.mutation({
                        query: (productId) => ({
                        url: `${PRODUCTS_URL}/${productId}`,
                        method: 'DELETE',
                         
                                     }),
                        }),
                     createReview: builder.mutation({
                        query: (data)=>({
                            url:`${PRODUCTS_URL}/${data.productId}/reviews`,
                            method: 'POST',                   
                            body: data,
                        }),
                        invalidatesTags :['Product']
                     })
  
                    }),
              });

export const { 
    useGetProductsQuery,
    useGetProductDetailsQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useUploadProductImageMutation,
    useDeleteProductsMutation,
    useCreateReviewMutation,
    } = productsApiSlice;
 // Export the hook for use in components