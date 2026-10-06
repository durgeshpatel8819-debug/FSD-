const root = ReactDOM.createRoot(document.getElementById("root"));

const getProductsData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    return data.products;
};

const HeaderComponent = () => {
    return (
        <div
            style={{
                textAlign: "center",
                backgroundColor: "black",
                color: "white",
                padding: "20px"
            }}
        >
            <h1>E-Commerce Webpage</h1>
        </div>
    );
};

const ProductComponent = ({ products }) => {
    console.log(products);

    return (
        <div id="prod-container">

            {products.map((product) => (

                <div className="product-card" key={product.id}>

                    <img
                        src={product.thumbnail}
                        alt={product.title}
                    />

                    <h2>{product.title}</h2>

                    {/* <p>{product.description}</p> */}

                    <h3>Price: ${product.price}</h3>

                    

                    

                </div>

            ))}

        </div>
    );
};

const FooterElement = () => {
    return (
        <div
            style={{
                textAlign: "center",
                backgroundColor: "black",
                color: "white",
                padding: "20px"
            }}
        >
            Copyright and all rights are reserved
        </div>
    );
};

const appRender = async () => {

    const products = await getProductsData();

    const reactElement = (
        <>
            <HeaderComponent />

            <ProductComponent
                products={products}
            />

            <FooterElement />
        </>
    );

    root.render(reactElement);
};

appRender();