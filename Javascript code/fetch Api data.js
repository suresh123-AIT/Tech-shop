p=fetch("https://fakestoreapi.com/products") 
         p.then((response)=>{return response.json()}).then((data)=>{
        const productData=data;
        const containercards=productData.map((product)=>{
            console.log(product) 
        const title=product.title;
        const description=product.description; 

        const truncatedTitle=title.length>20?`${title.substring(0,20)}...`:title;
        const truncatedDescription=description.length>20?`${title.substring(0,90)}...`:description;
            return(
                `
                <div class="productcard"> 
                    <img src=${product.image} alt="${product.name}"> 
                    <h2>${truncatedTitle}</h2>  
                    <p>${truncatedDescription}</p>
                    <hr>
                    <pre class="price">$${product.price}</pre>
                    <hr> 
                    <button class="btn1">Details</button>
                    <button class="btn1">Add to cart</button>

                </div>
                `
            )
            })

       
        const container=document.getElementById('container');
        container.innerHTML=containercards.join(' ');
    }) 
    p.catch((error)=>{
        alert('failed to fetch')
    })