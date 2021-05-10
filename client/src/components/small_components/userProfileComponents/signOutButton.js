import { Button } from 'react-bootstrap'

function SignOutButton(props){
    

    if(props.userId === props.artistId){
        return(
            <Button onClick = {props.signOut}>
                Sign Out
            </Button>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

export default SignOutButton