import express from "express"
import dotenv from "dotenv"
import  cookieparser  from 'cookie-parser';
dotenv.config()
import connectDB from "./config/db.js"
import {notfound, errorHandler} from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
const port= process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//Cookie parser middelware
app.use(cookieparser());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use('/api/products',productRoutes); // Use product routes
app.use('/api/users',userRoutes); 
app.use(notfound); // Handle 404 errors
app.use(errorHandler); // Handle other errors


app.listen(port, () => {
  console.log(`Server running on port ${port}`);});

