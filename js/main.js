/*
let producto = {
    "id":1,
    "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price":109.95,
    "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category":
    "men's clothing",
    "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating":{
        "rate":3.9,
        "count":120
    }
};
*/

//producto = null;
let producto = [
    {
        "id":1,
        "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price":109.95,
        "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating":{
        "rate":3.9,
        "count":120}
    },
    {
        "id":2,
        "title":"Mens Casual Premium Slim Fit T-Shirts ",
        "price":22.3,
        "description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category":"men's clothing",
        "image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating":{"rate":4.1,"count":259}
    },
    {
        "id":3,
        "title":"Mens Cotton Jacket",
        "price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category":"men's clothing",
        "image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating":{"rate":4.7,"count":500}
    },
    {
        "id":4,
        "title":"Mens Casual Slim Fit",
        "price":15.99,"description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category":"men's clothing",
        "image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating":{"rate":2.1,"count":430}
    },{
        "id":5,
        "title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price":695,
        "description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category":"jewelery",
        "image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating":{"rate":4.6,"count":400}
    }
];
/*
function getProducto() {
    return new Promise( (resolve, reject) => {
        if (producto==null) {
            reject(new Error("Producto no existe"));
        } // if == null
        setTimeout(() => {
            resolve(producto);
        }, 9000);
    }); // new Promise  
}
// then cuando sea cierto
// cuando no sea cierto da error
getProducto()
.then( (prod)=> console.log(prod) )
.catch( (err)=> console.log(err.message) );
*/

// ------
 

//let datos = [];
function getProducto() {
    return new Promise( (resolve, reject) => {
        if (producto==null) {
            reject(new Error("Producto no existe"));
        } // if == null
        setTimeout(() => {
            resolve(producto);
        }, 5000);
    }); // new Promise  
}
// then cuando sea cierto
// cuando no sea cierto da error
getProducto()
.then( (prod)=> foreachProductos(prod)  )
.catch( (err)=> console.log(err.message) );
// un foreach recorriendo el JSON producto que es un array

//Funcion para recorrer el JSON y mostrarlo en forma de cartas al DOM
function foreachProductos(producto) { 
    // Variable que toma el elemento con el ID row
    let cuerpoRows = document.getElementById("row");   
    // Mandar array producto a la consola para fines depurativos
    console.log(producto)
    // Manda la el JSON producto al Local Storage en forma de string 
    localStorage.setItem("producto", JSON.stringify(producto)); 
    // Si producto del Local Storage no es igual a nulo
    if (localStorage.getItem("producto")!= null) {
        // la variable producto se iguala a un JSON almacenado almacenado en Local Storage (se hace una conversion de string a JSON) 
        producto = JSON.parse(localStorage.getItem("producto"));
        //Por cada JSON del arreglo producto ejecutar la siguiente funcion
        producto.forEach(r => {            
            let row = 
            `
            <div class="col-md-4">
                <div class="card carta mt-2 mb-2" id="card" style="width: auto;">
                    <img src="${r.image}" class="card-img-top carta-imagen" id="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title carta-titulo" id="card-title">${r.title}</h5>
                        <b class="carta-categoria" id="card-category">Categoria - ${r.category}</b>
                        <p class="card-text carta-texto" id="card-text">${r.description}</p>
                        <h5 class="card-title" id="card-price">$${r.price}</h5>
                        
                        <a href="#" class="btn btn-success">Más info</a>
                    </div>
                </div>
            </div>
            `;
            cuerpoRows.insertAdjacentHTML("beforeend", row);
        });//producto.forEach
    }//if 
}//foreachProductos 
//foreachProductos(producto);