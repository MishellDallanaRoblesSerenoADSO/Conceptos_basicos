addEventListener("DOMContentLoaded", (e)=>{

    let dolares= document.getElementById("dolares")
    let pesos=document.getElementById("pesos")
    
    let convert=document.getElementById("convert")
    let convierte=document.getElementById("convierte")
    convierte.addEventListener('click',p)
    
    function p(){
        let d= parseFloat(dolares.value)
        let ps= parseFloat(pesos.value)
        r=0
        
        if(d>= 1 || ps >=1){
            if(d>= 1 && ps >=1){
            convert.innerText="Dígite un solo campo \n Dólares o pesos"

        }else{
            if(d>=1){
                r= d*4.789,69
            convert.innerText="La conversión de dólares a pesos colombianos es de:"+r
                
            }
            if(ps>=1){
                r=ps/4.789,69
            convert.innerText="La conversión de pesos colombianos a dólares es de:"+r
                
            }
        }
    }
}
})