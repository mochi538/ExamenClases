class Plato {
    constructor(nombre, precio){
    this.nombre = nombre,
    this.precio = precio
    }
}

class Menu{
    constructor(){
        this.platos= []
    }
    mostrar(){
        return this.nombre + this.precio;
    }
    listarPlatos(){
    for (let i = 0; i < this.platos.length; i++) {
          let lista= platos[i]
          return lista;
      }
    }
}

class Pedido{
    constructor(){
        this.platos= new Plato(nombre, precio)
    }
    agregar(){

    }

}
class Restaurante{
    constructor(){
        this.Pedid
    }
}


document.querySelector('#listar').addEventListener('click',()=>{
    Menu.listarPlatos();
    let lista = document.querySelector('#platos');
    let item = document.createElement('li')
    item.innerHTML = ""
})
