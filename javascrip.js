const productos=[
    {
        src: './foto/agu.jpeg',
        nombre: 'Arepa frita de Pernil',
        descripcion: 'Pernil, queso frito, repollo y salsas.',
        precio: '4.000',
      },
      {
        src: './foto/agu2.jpeg',
        nombre: '2 Arepas fritas de Pernil',
        descripcion: 'Pernil, queso frito, repollo y salsas.',
        precio: '7.000',
      },
      {
        src: './foto/bur.jpeg',
        nombre: 'Hamburguesa De La Calle',
        descripcion: 'Hamburguesa de 150gr, Vegetales (repollo o lechuga, tomate, cebolla), Papas hilo, Jamón ahumado, Queso laminado, Salsas (ketchup, mostaza, mayonesa, tártara)  incluye porcion de papas fritas.  (Puede cambiar la carne por pechuga de pollo a la plancha).',
        precio: '1x 6.000   o  2x 10.000',
      },
      {
        src: './foto/comp.jpeg',
        nombre: 'Perro Caliente Tradicional',
        descripcion:  'Vienesa, Vegetales  (repollo o lechuga, tomate cebolla), papas hilo,  Salsas (ketchup, mostaza, mayonesa, tártara) queso rallado.',
        precio: '2.000',
      }
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
            <h5 class="card-title">${producto.precio}</h5>
            <a href="/datos.html" class="btn btn-warning fw-bold mt-2">Datos para Transferencia</a>
          </div>
        </div>
    </div>
    `
}
d2.innerHTML=html //manipular solo una vez el DOM