addEventListener("DOMContentLoaded", (e)=>{
    
    let seguir= document.getElementById("sig")
    let volver= document.getElementById("ant")

    sig.addEventListener('click',siguiente)
    ant.addEventListener('click',anterior)

    let instrucciones= [0," 1). Coloca el aceite en una olla grande a fuego bajo. Sofríe los tres pimentones picados, el ajo y la cebolla cabezona y revuelve hasta que tomen un color doradito.", "2). Agrega las 3 tazas de arroz, lo importante es revolver muy bien.", "3). Añade las 5 tazas de agua, las verduras en trocitos, las pechugas de pollo, el cubo de caldo de pollo, el sobre de sazón y la sal al gusto. Revuelve y deja cocinar a fuego medio por aproximadamente 15 minutos o hasta que se seque el arroz.", "4). Una vez que el arroz haya absorbido toda el agua tapa la olla y cocina a fuego bajo por 10 a 15 minutos más hasta que el arroz esté suave.", " Listo ya terminamos ahora disfruta de tu arroz!"]

    let pinst= 0

    function siguiente(){
        pinst+=1
        if(pinst <=5){
            r.innerText= instrucciones[pinst]
        }
    }
    function anterior(){
        pinst-=1
        if(pinst >0){
            r.innerText= instrucciones[pinst]
        }

    }
})