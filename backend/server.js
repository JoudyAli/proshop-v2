import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js"
import {notfound, errorHandler} from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
const port= process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use('/api/products',productRoutes); // Use product routes
app.use(notfound); // Handle 404 errors
app.use(errorHandler); // Handle other errors


app.listen(port, () => {
  console.log(`Server running on port ${port}`);});

