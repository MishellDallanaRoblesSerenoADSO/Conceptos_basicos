addEventListener("DOMContentLoaded", (e)=>{

    let gradosc = document.getElementById("c")
    let Fahrg = document.getElementById("fh")

    let convierte= document.getElementById("convierte")
    let conversor= document.getElementById("conversor")
    convierte.addEventListener('click',p)

    function p(){
        let gc= parseFloat(c.value)
        let gf= parseFloat(fh.value)
        
        r=0
        if(gc >=1 || gfh >=1){
            if (gc>=0 && gf >=0){
            conversor.innerText="Dígite un solo campo \n Grados centigrados "
                
        }else{
            if(gc >=0 || gc <=0){
                r= (gc*9/5)+32
                conversor.innerText="La conversion de grados centigrados a fahrenheit es: "+r 
            
            }

            if(gf >=0 || gf <=0){
                r= (gf-32)*5/9
                conversor.innerText="La conversion de grados fahrenheit a centigrados es: "+r 

            }   
        }
    }  
}  

})