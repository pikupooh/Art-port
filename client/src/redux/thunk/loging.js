import { signInUserAction } from '../../redux/actions/logActions';
import * as ActionTypes from '../actions/actionTypes'

export default function signInUser(user, pass) {
    console.log(user+" "+pass);
    var creds = {
        username: user,
        password: pass
    }
    return dispatch => {
        fetch("http://localhost:8080/api/auth/login", {
            method: 'POST',
            headers: { 
                'Content-Type':'application/json' 
            },
            body: JSON.stringify(creds)
        })
        .then(res => {
            console.log(res);
            if (res.ok) {
                console.log(res);
                return res;
            } else {
                var error = new Error('Error ' + res.status + ': ' + res.statusText);
                error.res = res;
                throw error;
            }
            },
            error => {
                throw error;
            })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            var token = res.type+" "+res.accessToken;
            var userId = res.id;
            dispatch(setUserLogin({token, userId}));
        })
        .catch(error => console.log(error))
    }
}

function setUserLogin(details) {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: details
    }
}