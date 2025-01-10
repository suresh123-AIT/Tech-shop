
p=fetch("https://fakestoreapi.com/products") 
         p.then((response)=>{return response.json()}).then((data)=>{ 
        const productData=data; 
        const containercards=productData.map((product)=>{
            // console.log(product) 
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

    // /search for men's clothing category 

    let mensclothing=document.getElementById('mens') 
    mensclothing.addEventListener('click',()=>{ 
        p=fetch("https://fakestoreapi.com/products") 
        p.then((response)=>{return response.json()}).then((data)=>{
        const productData=data; 
        // console.log(data) 
        const mensClothing=productData.filter((product)=>product.category==="men's clothing")
        // console.log(mensClothing)
        const containercards=mensClothing.map((product)=>{
            // console.log(product) 
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
        
    }) 

// search for category for womens colthing
    let womensclothing=document.getElementById('women') 
    womensclothing.addEventListener('click',()=>{ 
        p=fetch("https://fakestoreapi.com/products") 
        p.then((response)=>{return response.json()}).then((data)=>{
        const productData=data; 
        // console.log(data) 
        const womensClothing=productData.filter((product)=>product.category==="women's clothing")
        console.log(womensClothing)
        const containercards=womensClothing.map((product)=>{
            // console.log(product) 
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
        
    }) 
    // search for category of jewellery 
    let jewellery=document.getElementById('jewellery') 
    jewellery.addEventListener('click',()=>{ 
        p=fetch("https://fakestoreapi.com/products") 
        p.then((response)=>{return response.json()}).then((data)=>{
        const productData=data; 
        console.log(data) 
        const jewelleryitems=productData.filter((product)=>product.category==="jewelery")
        console.log(jewelleryitems)
        const containercards=jewelleryitems.map((product)=>{
            // console.log(product) 
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
        
    }) 

    // serach for electronics category 

    let electronics=document.getElementById('electronics') 
    electronics.addEventListener('click',()=>{ 
        p=fetch("https://fakestoreapi.com/products") 
        p.then((response)=>{return response.json()}).then((data)=>{
        const productData=data; 
        // console.log(data) 
        const electronicitems=productData.filter((product)=>product.category==="electronics")
        console.log(electronicitems)
        const containercards=electronicitems.map((product)=>{
            // console.log(product) 
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
        
    })
    // search for all category's 

    let Allcategory=document.getElementById('All') 
    Allcategory.addEventListener('click',()=>{ 
        p=fetch("https://fakestoreapi.com/products") 
        p.then((response)=>{return response.json()}).then((data)=>{
        const productData=data; 
        // console.log(data) 
        const containercards=productData.map((product)=>{
            // console.log(product) 
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
})
    p.catch((error)=>{
        alert('failed to fetch')
    }) 


