// Siempre es mejor poner reducer antes del nombre
// Un reducer se crea en dos pasos: 1º Crear el reducer 2º Conectarlo con la aplicacion
// Función que devuelve un array de libros. La exportamos para poder utilizarla luego

export default function() {
    return[
        {title: 'Javascript: The Good Parts' },
        {title: 'Harry Potter' },
        {title: 'The Dark Tower'},
        {title: 'Eloquent Ruby'}
    ]
}