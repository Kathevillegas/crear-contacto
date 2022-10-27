contacto = [
    {
        nombre: "Lorem",
        apellido: "Navarro",
        numero: "3132656498",
        gustos: ['pizza', 'enseñar']
      
    },
    {
        nombre: 'Justin',
        apellido: 'Bieber',
        numero: '0994372994',
        gustos: ['cantar', 'ser guapote']
    },

    {
        nombre: 'Damon',
        apellido: 'Salvatori',
        numero: '0487995643',
        gustos: ['chupar sangre', 'ser perfecto']
    },
    {
        nombre: 'Inuyasha',
        apellido: 'teamo',
        numero: '123333523',
        gustos: ['pelea por la piedra de chikon', 'Kagome']
    },
    {
        nombre: 'Jose',
        apellido: 'Antonio',
        numero: '23533346',
        gustos: ['Correr superrapido', 	 'Misterios']
    },
    {
        nombre: 'Kevin',
        apellido: 'Toscano',
        numero: '24634745',
        gustos: ['Mujeres', 'Tecnología', 'Dinero']
    },
    {
        nombre: 'Peter',
        apellido: 'Parker',
        numero: '24634745',
        gustos: ['Ayudar a tia May', 'Ser un buen vecino']
    },


]

const buscar=document.getElementById('buscar');

buscar.addEventListener('click',()=>{
let texto = document.getElementById('texto');
let nombre=document.getElementById('nombre').value;
let propiedad=document.getElementById('propiedad')
propiedad=propiedad.options[propiedad.selectedIndex].text

if(nombre ==='' || propiedad===''){
    alert('vacio')
}else{
for(let i=0; i<contacto.length; i++){
    if(nombre===contacto[i].nombre){
        texto.innerText='' 
        for (const key in contacto[i]) {
            
            if(propiedad==='apellido'){
                texto.innerText=contacto[i].apellido
            }
            else if(propiedad==='numero'){
                texto.innerText=contacto[i].numero
            }
            else if(propiedad==='gustos'){
                texto.innerText=contacto[i].gustos
            }
            else{
                texto.innerText=`${contacto[i].nombre} ${contacto[i].apellido} ${contacto[i].numero} ${contacto[i].gustos}`
            } 
            }
            break;
    }else{
        texto.innerText='hay ninguno' 

    }
}
}
})

nombre.addEventListener('click',()=>{
    nombre=document.getElementById('nombre').value=''
    propiedad=document.getElementById('propiedad').value=''
    texto.innerHTML=''
})