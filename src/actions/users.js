//Define action Types
export const Types = {
    GET_USERS_REQUEST: 'users/get_users_request',
    GET_USERS_SUCCESS: 'users/get_users_success'
};

//Define actual actions
//get user request([no para]), return type: GET_USERS_REQUEST
export const getUsersRequest = () =>
({
    type: Types.GET_USERS_REQUEST
});
//items: array of users be passed. When call getUsersSuccess array of users (item) comes from user API
//within saga, call getUsersSuccess, pass in User list from API to this {items} property
export const getUsersSuccess = ({items}) =>
({
    type: Types.GET_USERS_SUCCESS,
    payload: //parameter to pass in
    {
        items
    }
});