addEventListener("DOMContentLoaded", (e)=>{
    
    let tarea= document.getElementById("tarea")
    let agregar= document.getElementById("agregar")
    let listado= document.getElementById("listado")
    let cantidad= document.getElementById("cantidad")

    total= 0
    //funcion que agrega la tarea al listado
    agregar.onclick = function(){
        //Controla si el campo esta vacio
        if(tarea.value == ""){
            return;
        }
        //valor del campo
        let elemento= tarea.value
        //crear un elemento li
        let li= document.createElement("li")
        li.textContent= elemento
        //se agrega li al listado
        listado.appendChild(li)
        //cantidad de tareas
        total++
        cantidad.innerHTML=total

        let eliminar= document.createElement("span")
        eliminar.textContent= "\u00d7";
        li.appendChild(eliminar);

        eliminar.onclick= function(){
            li.remove();
            total--
            cantidad.innerHTML=total
        }
        tarea.value=""
    }
})