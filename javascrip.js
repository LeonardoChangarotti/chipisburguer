const productos=[
    {
        src: './foto/agu.jpeg',
        nombre: 'Arepa frita de Pernil',
        descripcion: 'Pernil, queso frito, repollo y salsas.',
        precio: '1x4.000c/u o 2x7.000',
      },
      {
        src: './foto/agu2.jpeg',
        nombre: 'Arepa Frita Pernil (Agüita de Sapo) ',
        descripcion: 'Pernil y queso frito.',
        precio: '1x3.500c/u o 2x6.000',
      },  {
        src: './foto/carnemechada.jpeg',
        nombre: 'Arepa Frita mechada (Carne o Pollo) ',
        descripcion: 'Mechada de carne o de pollo, repollo, salsas, queso de mano o queso frito (elija el tipo de queso).',
        precio: '1x4.000c/u o 2x7.000',
      },
      
      {
        src: './foto/bur.jpeg',
        nombre: 'Hamburguesa De La Calle',
        descripcion: 'Hamburguesa de 150gr, Vegetales (repollo o lechuga, tomate, cebolla), Papas hilo, Jamón ahumado, Queso laminado, Salsas (ketchup, mostaza, mayonesa, tártara).  Incluye porcion de papas fritas.  (Puede cambiar la carne por pechuga de pollo a la plancha).',
        precio: '6.000',
      },{
        src: './foto/americana.jpeg',
        nombre: 'Hamburguesa Americana',
        descripcion: 'Hamburguesa, queso cheddar, tocino y salsa de pimenton. Incluye porcion de papas fritas.',
        precio: '6.000',
      },
      {
        src: './foto/comp.jpeg',
        nombre: 'Perro Caliente Tradicional',
        descripcion:  'Vienesa, Vegetales  (repollo o lechuga, tomate cebolla), papas hilo,  Salsas (ketchup, mostaza, mayonesa, tártara) queso rallado.',
        precio: '2.000',
      },
      {
        src: './foto/papacasa.jpeg',
        nombre: 'Papas de la Casa',
        descripcion: 'Papas fritas, Cheddar, tocino, Salsa de Pepinillo y Salsa Especial.',
        precio: '5.000',
      },{
        src: './foto/papachedar.jpg',
        nombre: 'Papas Cheddar',
        descripcion: 'Papas fritas, Cheddar, tocino, cebollin.',
        precio: '4.000',
      },{
        src: './foto/papasola.jpeg',
        nombre: 'Papas Solas',
        descripcion: 'Porcion de papas fritas crujientes y deliciosas.',
        precio: '2.000',
      },
     
    ];


let html=" ";
let d2=document.querySelector("#renderizar")

for (let producto of productos){        
    html += `<div class="card text-bg-dark p-3 carta" style="width: 18rem;">
        <img src="${producto.src}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion} </p>
          <div class="d-flex flex-column align-items-center">
            <a href="#" class="btn btn-warning fw-bold mt-2">${producto.precio}</a>
          </div>
        </div>
    </div>
    `
}
d2.innerHTML=html //manipular solo una vez el DOM