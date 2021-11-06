const saveContact = (db,contacto) =>{
   db.setItem(contacto.id, JSON.stringify(contacto));
    window.location.href = ""  
}


const loadContact = (db, parentNode)=>{
    let keys = Object.keys(db)
    console.log(keys)
    for(key of keys){
       let contact = JSON.parse(db.getItem(key))
       createContact(parentNode, contact , db)
    }
}



const createContact = (parentNode , contacto, db)=>{
    let divContact = document.createElement('div');
    let nameContact = document.createElement('h3');
    let numberContact = document.createElement('p');
    let contactAdress = document.createElement('p');
    let deleteIcon = document.createElement('span');
    
    


    deleteIcon.addEventListener('click',()=>{
        db.removeItem(contacto.id)
        window.location.href = ''

    });



    nameContact.innerHTML = contacto.nombre;
    numberContact.innerHTML = contacto.numero;
    contactAdress.innerHTML = contacto.direccion;
    deleteIcon.innerHTML = 'delete_forever';

    divContact.classList.add('tarea')
    deleteIcon.classList.add('material-icons', 'icono')

    divContact.appendChild(nameContact)
    divContact.appendChild(numberContact)
    divContact.appendChild(contactAdress)
    divContact.appendChild(deleteIcon);

    parentNode.appendChild(divContact);
    
}


const verifyEmpty = (db)=>{
    if(db.length === 0){
        warning.innerHTML = 'Agenda vacia'
    }
 }


