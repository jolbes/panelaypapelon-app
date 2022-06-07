
const products = [
  {
    id: 1,
    title: "Producto 1",
    price: 10000,
    stock: 1,
    description: "Descripcion 1",
    image: "./assets/items/producto1.webp",
  },
  {
    id: 2,
    title: "Producto 2",
    price: 20000,
    stock: 2,
    description: "Descripcion 2",
    image: "./assets/items/producto2.webp",
  },
  {
    id: 3,
    title: "Producto 3",
    price: 30000,
    stock: 3,
    description: "Descripcion 3",
    image: "./assets/items/producto3.webp",
  },
  {
    id: 4,
    title: "Producto 4",
    price: 40000,
    stock: 4,
    description: "Descripcion 4",
    image: "./assets/items/producto4.webp",
  },
  {
    id: 5,
    title: "Producto 5",
    price: 50000,
    stock: 5,
    description: "Descripcion 5",
    image: "./assets/items/producto5.webp",
  },
];

export const getProducts = () => {
  const ok = true
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      if(ok){
        resolve(products)
        
      }else{
      reject('Error')
      }
    }, 2000   )
  })
}
console.log(products)

const product = {
  id: 4,
  title: "Producto 4",
  price: 40000,
  stock: 4,
  description: "Descripcion 4",
  image: "./assets/items/producto4.webp",
};

export default getProducts
export { product };
