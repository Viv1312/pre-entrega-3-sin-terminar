const shopContent = document.getElementById("shopContent");

const productos = [
  {
    id: 1,
    nombre:"Galletas de Avena",
    precio: 110,
    img: 
        "https://i.pinimg.com/564x/b1/4c/42/b14c425f6f6cbb654f3085b1b04ebcf4.jpg",

  },
  {
   id: 2,
   nombre:"Jugo de Arandanos",
   precio: 500,
   img:
        "https://i.pinimg.com/564x/0e/94/5d/0e945d93bd6492f51f1ce1f5c5f55f3d.jpg",   
  },
  {
   id: 3, 
   nombre:"Pistachos confitados",
   precio: 900,
   img:
        "https://i.pinimg.com/564x/3e/6a/6a/3e6a6a673c45044b939e41d3828b6583.jpg",
  },
  {
      id: 4,
      nombre:"Leche de Almendras",
      precio: 700,
      img: 
         "https://i.pinimg.com/564x/ce/94/42/ce944298ce424bef9a5f79fd069295aa.jpg",
  },
    
];

carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
    `;

    shopContent.append(content);

    let comprar =  document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar"

    content.append(comprar);
});