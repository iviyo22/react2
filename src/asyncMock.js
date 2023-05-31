const products = [
    {
      id: 1,
      name: "Producto 1",
      price: 100,
      category: " 1",
      stock: 5,
      description: "Descripción del Producto 1",
      image: "./images/jean1.png",
    },
    {
      id: 2,
      name: "Producto 2",
      price: 200,
      category: " 2",
      stock: 3,
      description: "Descripción del Producto 2",
      image: "./images/jean2.png",
    },
    {
      id: 3,
      name: "Producto 3",
      price: 300,
      category: " 3",
      stock: 7,
      description: "Descripción del Producto 3",
      image: "./images/jean3.png",
    },
  ];

  export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve(products)
        },500)
    })
    
    }
  
    export const getProductById = (productId) => {
        return new Promise ((resolve) => {
            setTimeout(()=>{
                resolve(products.find(prod => prod.id === productId))
            },500)
        })
        
        }

         
    export const getProductByCategory = (productId) => {
      return new Promise ((resolve) => {
          setTimeout(()=>{
              resolve(products.find(prod => prod.category === productId))
          },500)
      })
      
      }
    
      