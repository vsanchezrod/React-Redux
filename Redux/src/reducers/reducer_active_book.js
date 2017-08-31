// Todos los reducers reciben dos argumentos the current state y action
// El reducer solo es llamado cuando una acción ocurre
// State argument is not application state, only the state this reducer is reponsable for

export default function(state = null, action){
    switch(action.type){
    case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}