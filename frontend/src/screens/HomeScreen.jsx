import { Row,Col } from "react-bootstrap"
import { useParams } from "react-router-dom";
import Product from '../components/Product';
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetProductsQuery } from "../slices/productsApiSlice"; // Import the hook to fetch products

const HomeScreen = () => {

  const {pageNumber}=useParams();
   const { data , isLoading, error } = useGetProductsQuery({pageNumber}); // Use the hook to get products
  return (
    <>
    {isLoading ?(
     <Loader />
    ): error ? ( <Message variant='danger'>{error?.data?.message || error.error} </Message>):(<>
    <h1>List Products</h1>
      <Row>
        {data.products.map((products)=>(
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
