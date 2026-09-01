const prodcontainer = document.getElementById("prod-container");

const showProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = data.products;

    products.forEach((product) => {

        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = "product-img-here";

        const title = document.createElement("h1");
        title.innerText = product.title;

        const price = document.createElement("h2");
        price.innerText = product.price;

        const incrementButton = document.createElement("button");
        incrementButton.innerText = "+";

        const decrementButton = document.createElement("button");
        decrementButton.innerText = "-";

        const span = document.createElement("span");
        span.innerText = "0";

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(decrementButton);
        div.appendChild(span);
        div.appendChild(incrementButton);

        prodcontainer.appendChild(div);

        let counter =0;
        incrementButton.addEventListener("click",()=>{
            counter++;
            span.innerText=counter;

        })
         
        decrementButton.addEventListener("click",()=>{
            if(counter>0)
            counter--;
            span.innerText=counter;
        
    });
    });
};

showProducts();