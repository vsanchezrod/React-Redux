// Siempre es mejor poner reducer antes del nombre
// Un reducer se crea en dos pasos: 1º Crear el reducer 2º Conectarlo con la aplicacion
// Función que devuelve un array de libros. La exportamos para poder utilizarla luego

export default function() {
    return[
        {title: 'Javascript: The Good Parts', pages: 101 },
        {title: 'Harry Potter', pages: 39 },
        {title: 'The Dark Tower', pages: 85 },
        {title: 'Eloquent Ruby', pages: 1 }
    ]
}