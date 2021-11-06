const names = document.querySelector('.name')
const number = document.querySelector('.number')
const adress = document.querySelector('.adress')
const addButton = document.querySelector('.btn_add');
let warning  = document.querySelector('.warning')


const homeWorkList = document.querySelector('.listado_tareas')
const db = window.localStorage

addButton.addEventListener('click',()=>{
    let contacto = {
        id : Math.random(1,100),
        nombre: names.value,
        numero : number.value,
        direccion: adress.value
    }

    if(contacto.nombre !== '' || contacto.numero !== '' || contacto.direccion !==''){
        saveContact(db,contacto)
    }
    
});

verifyEmpty(db)
loadContact(db, homeWorkList)

