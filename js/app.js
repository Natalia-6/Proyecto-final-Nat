
/*@author: NATALIA GARCÍA-SALAS*/
//declaración de variables
//declaración de variables
const calculadora = document.getElementById('calculadora')
const resultado = document.getElementById('resultado')

// eventos
calculadora.addEventListener('click', anadirNumeros)

// Operaciones
let operaciones = []

// anadirNumeros
function anadirNumeros(e){
	if(e.target.getAttribute('type') === 'button'){
		if(e.target.className != 'operacion'){
			resultado.value += e.target.innerText
		}
		if(e.target.id === 'sumar'){
			operaciones.push(resultado.value)
			operaciones.push('+')
			calculadora.reset()
		}
		if(e.target.id === 'igual'){
			operaciones.push(resultado.value)
			calculadora.reset()
			const resultadoOperacion = eval(operaciones.join(''))
			resultado.value = resultadoOperacion
			operaciones = []
		}
		if(e.target.id === 'restar'){
			operaciones.push(resultado.value)
			operaciones.push('-')
			calculadora.reset()
		}
		if(e.target.id === 'multiplicar'){
			operaciones.push(resultado.value)
			operaciones.push('*')
			calculadora.reset()
		}
		if(e.target.id === 'dividir'){
			operaciones.push(resultado.value)
			operaciones.push('/')
			calculadora.reset()
		}
    
    //se trato de realizar la raíz de diferenetes maneras pero no funciona
   if(e.target.id === 'raízcuadrada'){
			operaciones.Math.sqrt(resultado.value)
			operaciones.Math.sqrt('√')
			calculadora.reset()
		}
    //*
		
		if(e.target.id === 'clear'){
			operaciones = []
			calculadora.reset()
		}
	}
}

//<!--- (nombres declaración de variables) tomado desde Hommer en codepen -->

//<!-- nombre de algunas funciones tomadas de developer.mozilla-->