
// //Declaro Variable Global

// let iV = 0.21;

// //Declaro las funciones que voy a necesitar para calcular lo que va a necesitar el cliente

// function calcu(v1,v2,aC) {
// // declaro las variables necesarias tomando los datos que ingreso el cliente
//      let p1 =Number(v1);
//      let p2 =Number(v2);
// //calculo el valor final y el valor de IVA de los productos que mi cliente ingreso
//      let vR = (p1+p2)*1.21;
//      let vIv = (p1+p2)*0.21

//         switch (aC) {
//          case "1": 
//             let vS = p1+p2;
    
//             console.log(`el valor total de los productos que elegiste es ${vS}`)    
//                 break;

//          case "2":
    
//             console.log(`el valor total de los productos que elegiste sumando el iva es: ${vR}`+` `
//             +'el IVA es:'+ `${vIv}`)
                
//                 break; 

//          case "3":
//                 let vM = p1+p2;
    
//                console.log (`el valor total de los productos que elegiste es: ${vM}`+` `+
//                `el IVA de estos productos es: ${vIv}`+` `+
//                `el valor de estos productos con IVA es: ${vR}`)
//                 break;
                 
//             default: alert('ingrese accion a realizar');
//                 break;
//         }
    
// }

// function pedirValores(){
//     let v1 = prompt(
//         'ingresa el valor del 1er producto que mas te guste'
//         );
    
//     let v2 = prompt(
//         'ingresa el valor del 2do producto que mas te guste'
//         );
// }

// function forMasPago(v1,v2,aC2) {
// //declaro las variables principales tomando los datos ingresados por el cliente
//       let p1=Number(v1);
//       let p2=Number(v2);
//       let vT = p1+p2;
// //declaro el interes mensual del credito 
//       let iC = 1.5;
          
      
//         switch (aC2) {
//           case '1': 
//           let vI = vT*iV;
//           let vF = vT+vI;
//           let cuotaSI = vF/3;
//           let CuotaMasI = cuotaSI * iC;
          
//             console.log(
//                 `Valor del producto: ${vF}
//                  Valor de cada cuota: ${CuotaMasI}`
//             )
        
            
//             break;

//          case '2':
          
//            let vI2 = vT*iV;
//            let vF2 = vT+vI2;
//            let cuotaSI2 = vF2/3;
//            let CuotaMasI2 = cuotaSI2 * iC;
          
//             console.log(
//                 `Valor del producto: ${vF2}
//                  Valor de cada cuota: ${CuotaMasI2}`
//             )
//            break;

//          case '3':
          
//           let vI3 = vT*iV;
//           let vF3 = vT+vI3;
//           let cuotaSI3 = vF3/3;
//           let CuotaMasI3 = cuotaSI3 * iC;
          
//           console.log(
//                 `Valor del producto: ${vF3}
//                  Valor de cada cuota: ${CuotaMasI3}`
//             )
//             break;

//          case '4':
          
//             let vI4 = vT*iV;
//             let vF4 = vT+vI4;
//             let cuotaSI4 = vF4/3;
//             let CuotaMasI4 = cuotaSI4 * iC;
            
//             console.log(
//                   `Valor del producto: ${vF4}
//                    Valor de cada cuota: ${CuotaMasI4}`
//               )
//            break;

//          case '5':
          
//               let vI5 = vT*iV;
//               let vF5 = vT+vI5;
//               let cuotaSI5 = vF5/3;
//               let CuotaMasI5 = cuotaSI5 * iC;
              
//               console.log(
//                     `Valor del producto: ${vF5}
//                      Valor de cada cuota: ${CuotaMasI5}`
//                 )
//             break;

//          default:

//          alert('la accion determinada es invalida vuelva a agregar otra accion por favor'
//          )
//           break;
//     }

//     return iV
    
// }

// function calculaIVA(pR) {
//     return Number(pR[2]) * 0.21;
//   }
  
//   function creaProducto(pR) {
//     const nombre = pR[0];
//     const cantidad = pR[1];
//     const precio = pR[2];
//     const iva = calculaIVA(pR);
  
//     let mensaje = `Datos del Producto nuevo:
//   Nombre: ${nombre}
//   Cantidad en venta: ${cantidad}
//   Precio por unidad: ${precio}
//   El valor de IVA de este producto es: ${iva}`;
  
//     document.write(mensaje);
//   }

  

// //Obtengo los datos requeridos para las funciones y la accion que desea realizar el cliente
// let cH = prompt(
//     'ingrese la operacion de desea realizar'+ " "+
// "1- Calcular costos de la compra" +" "+
// "2- Calcular formas de pago"+ " " +
// "3- Crear mi producto"
// );




// //llamo a las funciones con una pequeña accion de comprobacion
// switch (Number(cH)) {
//     case 1:
//         pedirValores();
        
//         //Llamo a la Funcion Calcu
//     let aC = prompt(
//         'ingresa la accion que queres realizar'+` `+
//     '1 = calcular el valor total sin impuestos'+` `+
//     '2 =calcular valor total con impuestos' + ` `+
//     '3 = calcular y mostrar el valor total y el valor por separado de cada producto'
//     );
//         calcu(v1,v2,aC);
//         console.log('se realizo el calculo con exito')
        
//         break;

//     case 2:
//         pedirValores();
//         let aC2 = prompt(
//             'ingresa la accion que queres realizar'+` `+
//         '1 = calcular el valor total con impuestos en 1 cuota'+` `+
//         '2 =calcular valor total con impuestos en 3 cuotas' + ` `+
//         '3 = calcular el valor total de impuestos en 6 cuotas'+ ` `+
//         '4 = calcular el valor total de impuestos en 9 cuotas'+ ` `+
//         '5 = calcular el valor total de impuestos en 12 cuotas '
//         );
//         //Llamo a la Funcion formas de pago
//             forMasPago(v1,v2,aC2);
        
//             console.log('se muestran los datos de las cuotas Arriba')
//         break;

//     case 3 :
//         //creamos el producto que desea ofrecer el cliente
        
//         let nOmbre = prompt('Nombre de tu producto');
//         let unidadesVenta = prompt('Cantidad de unidades a la venta') ;
//         let vAlor = prompt('precio de tu producto discriminando el Iva');
//         let pR = [nOmbre,unidadesVenta,vAlor];

//         creaProducto(pR);

//         break;

//     default:
//          //alerto de una falta de valores
//     alert('el valor ingresado no corresponde a ninguna operacion')
//         break;
// }

// //muestro solo si alguna de las opciones se elijio un resumen
// if (cH==1 || cH == 2) {

//     let resumenP = [v1,v2,iV];

// //muestro los precios de productos agregados por pantalla
// for (let i = 0; i < 3; i++) {
//     document.write( resumenP [i]+` `)
    
// }  
// }

// function Agcarrito()
// {
//     let Agregarproducto = document.getElementById('button-car');
//     button.onclick = () =>{ 
//         console.log('producto agregado al carrito exitosamente')
//     };
//     let precio = document.getElementById('value');

//     constructor(producto,precio)
//     { 
//         this.precio = precio;
//         this.producto = this.producto
      

//     }
// }

// Método -> localStorage.setItem(clave, valor)
// clave = nombre para identificar el elemento
// valor = valor/contenido del elemento
// localStorage.setItem('rodolfo'
// ,
// 'pancracio');
// localStorage.setItem('esValido'
// , true);
// localStorage.setItem('numero'
// , 30);

// let mensaje = localStorage.getItem('rodolfo');
// let bandera = localStorage.getItem('esValido');
// let numero = localStorage.getItem('numero');
// console.log(mensaje); // ‘¡Hola Coder!’
// console.log(bandera); // ‘true’
// console.log(numero); // ‘20’

// // Método -> sessionStorage.setItem(clave, valor)
// // clave = nombre del elemento
// // valor = Contenido del elemento
// sessionStorage.setItem('seleccionados', [1,2,3]);
// sessionStorage.setItem('esValido'
// , false);
// sessionStorage.setItem('email'
// ,
// 'info@email.com');
// let lista = sessionStorage.getItem('seleccionados').split(",");
// let bandera = (sessionStorage.getItem('esValido') == 'true');
// let email = sessionStorage.getItem('email');
// console.log(typeof lista); //object ["1","2","3"];
// console.log(typeof bandera); //boolean;
// console.log(typeof email); //string;



// function agregarProductos(productos){
//    let boton = document.getElementById("add-car")
//    productos.forEach((item) => {
//       let aP = item;
//    }) 
//    boton.onclick = (aP,e) => {
//       console.log(e);
//       let newProductos = aP.push('1');
//       console.log(newProductos);

//    }

  
// // Elementos del DOM que necesito para el carrito
// const button = document.getElementsByClassName('add-button');
// const cartList = document.getElementById('cart-list');
// const clearButton = document.getElementById('clear-button');

// // Obtener productos del Local Storage (si existen) sino se toma el alor de un array vacio por defecto
// let products = JSON.parse(localStorage.getItem('products')) || [];

// // Agregar producto al carrito
// function agregarProducto(button, products) {
//     button.addEventListener('click', () => {
//         const productTitle = button.parentNode.getElementsByClassName('product-name')[0].textContent;
//         products.push({ name: productTitle });
//         localStorage.setItem('products', JSON.stringify(products));
//         renderCart(products, cartList);  // Necesitas pasar los parámetros aquí
//     });
    
// //     addButtonList.forEach((button) => {
// //       button.addEventListener('click', () => {
// //           const productTitle = button.parentNode.getElementsByClassName('product-name').textContent;
// //           products.push({ name: productTitle });
// //           localStorage.setItem('products', JSON.stringify(products));
// //           renderCart();
// //       });
// //   });
//   }

// // Función para mostrar los productos en el carrito
// function renderCart(products,cartList) {
//     cartList.innerHTML = '';
//     products.forEach((product, index) => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <span>${product.name}</span>
//             <button class="remove-button" data-index="${index}">Eliminar</button>
//         `;
//         cartList.appendChild(li);
//     });
// }

// // Eliminar producto del carrito
// function DeleteP(cartList){
//     cartList.addEventListener('click', (event) => {
//     if (event.target.classList.contains('remove-button')) {
//         const index = parseInt(event.target.getAttribute('data-index'));
//         products.splice(index, 1);
//         localStorage.setItem('products', JSON.stringify(products));
//         renderCart();
//     }
// });
// }

// // Vaciar carrito
// clearButton.addEventListener('click', () => {
//     products = [];
//     localStorage.removeItem('products');
//     renderCart();
// });

// // Mostrar productos al cargar la página
// renderCart(products,cartList);
// agregarProducto(button,products);
// DeleteP(cartList);

// Elementos del DOM que necesito para el carrito
const buttons = document.getElementsByClassName('add-button');
const cartList = document.getElementById('cart-list');
const clearButton = document.getElementById('clear-button');

// Obtener productos del Local Storage (si existen) o tomar un array vacío por defecto
let products = JSON.parse(localStorage.getItem('products')) || [];

// Agregar producto al carrito
function agregarProducto(productTitle, productImage, productPrice) {
    products.push({ name: productTitle, image: productImage, precio: productPrice });
    localStorage.setItem('products', JSON.stringify(products));
    renderCart();
}


// Función para mostrar los productos en el carrito
function renderCart() {
    cartList.innerHTML = '';
    products.forEach((product, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="cart-product-image">
            <span>${product.name}</span>
            <p>Precio: ${product.precio}</p>
            <button class="remove-button" data-index="${index}">Eliminar</button>
        `;
        cartList.appendChild(li);
    });
}


// Eliminar producto del carrito
cartList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-button')) {
        const index = parseInt(event.target.getAttribute('data-index'));
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        renderCart();
    }
});

// Vaciar carrito
clearButton.addEventListener('click', () => {
    products = [];
    localStorage.removeItem('products');
    renderCart();
});

// Agregar evento a los botones "Agregar"
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        const productTitle = buttons[i].parentNode.querySelector('.product-name').textContent;
        const productImage = buttons[i].parentNode.querySelector('img').getAttribute('src');
        const productPrice = buttons[i].parentNode.querySelector('p').textContent;
        agregarProducto(productTitle, productImage, productPrice);
    });
}


// Mostrar productos al cargar la página
renderCart();




