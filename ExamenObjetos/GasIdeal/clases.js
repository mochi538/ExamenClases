class Gas {
    constructor(presion, volumen, temperatura,masaMol){
        this.presion = presion,
        this.volumen = volumen,
        this.temperatura = temperatura
        this.masaMol = masaMol
    }
    getpresion(){
        return this.presion
    }
    getvolumen(){
        return this.volumen
    }
    gettemperatura(){
        return this.temperatura
    }

    setpresion(presion){
        this.presion=presion
    }
    setvolumen(volumen){
        this.volumen = volumen
    }
    settemperatura(temperatura){
        this.temperatura = temperatura
    }
    calcularMasa(){
        const constanteR = 8.314
        const presion = this.presion
        const volumen = this.volumen
        const temperatura = this.temperatura
        const masaMol = this.masaMol
        const calcular = (presion*volumen*masaMol)/(constanteR*temperatura)
        return calcular
    }
    
}

document.querySelector('#calcular').addEventListener("click", ()=>{
    const P = document.querySelector('#txtPresion').value
    const V = document.querySelector('#txtVolumen').value
    const M = document.querySelector('#txtMasaMol').value
    const T = document.querySelector('#txtTemperatura').value
    const gas = new Gas(P,V,T,M)

    const resultado = gas.calcularMasa()
    const p = document.querySelector('#resultado').innerHTML=resultado
})