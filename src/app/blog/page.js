

const Cards = ({title,description,price,rating,img}) => {
  
return(



<div className="card" style={{width: '18rem'}}>
  <img src={img} className="card-img-top" alt="imges" />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="#" className="btn btn-primary">Add to Cart</a>
  </div>
</div>
)

}







const GetData =async()=>{
  const res = await fetch('https://dummyjson.com/products')

  return res.json()
}



const Blog = async () => {
  
  const data = await GetData();
  const products = data.products;
  console.log(data);
  return (
    <div className="container">
    <div className="row">
    {
      products.map(products=><Cards title = {products.title}  description = {products.description} 
        price = {products.price} rating = {products.rating} img ={products.images} />)
    }
      
  
    </div>

    </div>
  )
}

export default Blog;