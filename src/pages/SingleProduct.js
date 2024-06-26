import { Link,useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
const {productID} = useParams();
const product = products.find((product)=> product.id === productID)
  return (
    <section className='section product'>
      <img src={product.img} alt={product.name}/>
      <h5>{product.name}</h5>
      <Link to='products'>Back to Products</Link>
    </section>
  );
};

export default SingleProduct;
