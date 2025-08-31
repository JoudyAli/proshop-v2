import { Row,Col } from "react-bootstrap"
import { useParams } from "react-router-dom";
import Product from '../components/Product';
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import { useGetProductsQuery } from "../slices/productsApiSlice"; // Import the hook to fetch products

const HomeScreen = () => {

  const {pageNumber, keyword}=useParams();

   const { data , isLoading, error } = useGetProductsQuery({

    keyword, pageNumber}); // Use the hook to get products
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
      <Paginate
      pages={data.pages}
      page={data.page}
      keyword={keyword ? keyword : ''}
      />
    </>)}

      
  
    </>
  )
}

export default HomeScreen
