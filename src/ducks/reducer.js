
//initialState
const initialState = {
    username: '',
    email: '',
    accountBalance: 0,
    transaction: []

}

//action constants


//action builders


//reducer
export default (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        default:
            return state
    }
}