import { Row,Col } from "react-bootstrap"
import Product from '../components/Product';
import { useGetProductsQuery } from "../slices/productsApiSlice"; // Import the hook to fetch products

const HomeScreen = () => {
   const { data: products , isLoading, error } = useGetProductsQuery(); // Use the hook to get products
  return (
    <>
    {isLoading ?(
      <h2>Loading...</h2>
    ): error ? ( <div>{error?.data?.message || error.error} </div>):(<>
    <h1>Latest Products</h1>
      <Row>
        {products.map((products)=>(
                    <Col key={products._id} sm={12} md={6} lg={4} xl={3} >
                <Product product={products} />
            </Col>
         ))
        }
      </Row>
    </>)}

      
  
    </>
  )
}

export default HomeScreen
