class Habitacion{
    constructor(numHabitacion){
        this.numHabitacion = numHabitacion
        this.tipo = ["simple","doble","suite"]
        this.disponibilidad = ["disponible", "ocupado"]
    }
    mostrar(){
        return `Número de habitación: ${this.numHabitacion},
                Tipo: ${this.tipo},
                Disponibilidad: ${this.disponibilidad}`
    }
}
class Hotel{
    constructor(lista){
        this.habitaciones = lista
    }
    agregarHabitacion(infonueva){
        let agregar = this.habitaciones.push(infonueva)
    }
    listarHabitaciones(){
        let lista="";
        for(i = 0; i> this.habitaciones.length; i++){
            lista += this.habitaciones[i].mostrar()
        }
        return lista
    }
    alquilarHabitacion(){
        
    }
    disponibles(){
        let lista="";
        for(i = 0; i> this.habitaciones.length; i++){
            let habitacion = this.habitaciones[i]
            if(habitacion.tipo == "disponible"){
                lista += habitacion
            }
        }
        return lista

    }
    
}