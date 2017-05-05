var sq =[
{
    "id": 1,
    "nombre": "Paola",
    "apellido": "Urra",
    "edad": 28,
    "hobbies": {
        "uno": "Dormir", 
        "dos": "ver netflix", 
        "tres": "jugar Xbox"
        },
    "fechaNac": "18 07 1988",
    "lugarNac": "Santiago"
},
{
	"id": 2,
    "nombre": "Paola",    
    "apellido": "Urra", 
    "edad": 28, 
    "hobbies": {
    	"uno": "Dormir", 
    	"dos": "ver netflix", 
    	"tres": "jugar Xbox"
    	},
    "fechaNac": "18 07 1988", 
    "lugarNac": "Santiago"
 },
 {
	"id": 3,
    "nombre": "Romina",   
    "apellido": "Torres", 
    "edad": 31, 
    "hobbies": {
    	"uno": "componer, cantar, tocar bateria, bajo y guitarra",  
    	"dos": "ver netflix",  
    	"tres": "hacer cosas chori con mi hijo y esposo"
    	},
    "fechaNac": "08 12 1985", 
    "lugarNac": "Santiago"
 },
 {
	"id": 4,
    "nombre": "Paulina",    
    "apellido": "Gonzalez", 
    "edad": 26, 
    "hobbies": {
    	"uno": "Jugar videojuegos",
    	"dos": "Ver anime/series",
    	"tres": "Hacer manualidades y sacar la vuelta xD"
    	},
    "fechaNac": "27 10 1990",
    "lugarNac": "Santiago"
 },
 {
	"id": 5,
    "nombre": "Katerine",     
    "apellido": "Sandoval", 
    "edad": 24, 
    "hobbies": {
    	"uno": "arte", 
    	"dos": "musica",
    	"tres": "literatura"
   	},
    "fechaNac": "29 01 1993", 
    "lugarNac": "Curacautin" 
 },
 {
	"id": 6,
    "nombre": "Natalia",    
    "apellido": "Vivanco", 
    "edad": 27, 
    "hobbies": {
    	"uno": "leer", 
    	"dos": "jardinear", 
    	"tres": "manualidades"
    	},
    "fechaNac": "13 05 1989",
    "lugarNac": "Santiago"
 },
 {
	"id": 7,
    "nombre": "Vanessa", 
    "apellido": "Pérez", 
    "edad": 35, 
    "hobbies": {
    	"uno": "Karate do", 
    	"dos": "cantar y pasarla bien", 
    	"tres": "disfrutar a mis 6 hijos"
    	},
    "fechaNac": "23 04 1982", 
    "lugarNac": "Puerto Montt"
 },
 {
	"id": 8,
    "nombre": "Constanza",       
    "apellido": "Carrasco", 
    "edad": 23, 
    "hobbies": {
    	"uno": "vender cosas ricas", 
    	"dos": "pasarla bien con el pololo", 
    	"tres": "series"
    	},
    "fechaNac": "28 06 1993", 
    "lugarNac": "Viña del mar"
 },
 {
	"id": 9,
    "nombre": "Susana",     
    "apellido": "Cruces", 
    "edad": 23, 
    "hobbies": {
    	"uno": "dormir",
    	"dos": "sacar a pasear al perro", 
    	"tres": "reconciar y patear al pololo"
    	},
    "fechaNac": "03 11 1983",
    "lugarNac": "Santiago"
 }
]

sq.forEach(function(element){
document.write("<div>" + element.id + " Nombre y apellido: " + element.nombre+ " " + element.apellido + "<br>" + "Edad: " + element.edad + "<br>" + "Fecha de nacimiento: " + element.fechaNac + "<br>" + "Lugar de Nacimiento: " + element.lugarNac + "<br>" + " hobbies: " + "<li>"element.hobbies.uno"</li>" + "<br><br>" + "</div>");
});

sq();