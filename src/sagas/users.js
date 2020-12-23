//Get user list
//Take care all users action

//Saga -> dispatch redux-action => helper (takeeverydispatch actions)
import {takeEvery} from 'redux-saga/effects';
import * as actions from 'actions/users'; //Give access to actual actions & types in action

function* getUsers()
{
    try{}
    catch(e)
    {}
}

function* watchGetUsersRequest()
{
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers); //getUsers: refer to worker saga
}
