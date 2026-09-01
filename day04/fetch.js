let products=[]
const getProductsData=async()=>{
   const res=await fetch("https://dummyjson.com/products");
   const data =await res.json();
   products=(data.products);
//    products.map((products)=>console.log(products));

   const priceGreaterThanTwelve =products.find((products)=>products.price>12);
   console.log(priceGreaterThanTwelve);
}
getProductsData();

// fetch("https://dummyjson.com/products")
// .then((res)=>res.json())
// .then((data)=>console.log(data.products))
// .catch((error)=>console.log(error));