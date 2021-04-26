import { signInUserAction } from '../../redux/actions/logActions';

export default function SignInUser() {
    return dispatch => {
        dispatch(signInUserAction());
    }
}
