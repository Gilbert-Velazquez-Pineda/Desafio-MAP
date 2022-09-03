const tabla = document.querySelector('#dinamico');

function cargarCatalago (){
    fetch('catalago.json')
     .then(respuesta => respuesta.json())
     .then(items => {
        items.forEach(item => {
            const row = document.createElement('div');
        row.innerHTML = `
           <div class="card mb-4 shadow-sm">
              <div class="card-header">
                   <h4 class="my-0 font-weight-bold color-descripcion letra">${item.titulo}</h4>
              </div>

               <div class="card-body">
                   <img src="${item.imagen}" class="card-img-top">
                   <h1 class="card-title pricing-card-title precio color-descripcion">$ <span class="">${item.precio}</span></h1>                        
                  <p class="list-unstyled mt-3 mb-4 color-descripcion">${item.descripcion} </p>
                  <a href="" class="btn btn-block btn-primary agregar-carrito" data-id="${item.id}">Comprar</a>
               </div>
            </div>
        `;
        tabla.appendChild(row);
    
            
        });
     }) 
}


cargarCatalago();