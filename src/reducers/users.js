export default function users(state = {}, action) {
    let new_state;

    switch (action.type) {
        case 'users.modalDeleteShow':


            new_state = JSON.parse(JSON.stringify(state));
            console.log(new_state);
            // console.log(JSON.stringify(state));
            new_state.modal = new_state.modal ? new_state.modal : {};
            new_state.modal.list_delete = {
                show: true,
                id: action.id,
                username: action.username
            }
            return new_state;

        case 'users.modalHide':

            new_state = JSON.parse(JSON.stringify(state));
            console.log(new_state);
            new_state.modal.list_delete = {
                show: false,
                id: 0,
                username: ''
            }

            return new_state;
        
        case 'users.delete':
                 new_state = JSON.parse(JSON.stringify(state));
                 for(const index in new_state.list) {
                     if(new_state.list[index].id === action.id) {
                         new_state.list.splice(index, 1)
                         break;
                     }
                 }
                 return new_state
         

        // no action return default state object
        default:

            return state;
    }


}