import { Button } from 'react-bootstrap'

function SignOutButton(props){
    
    console.log(props)

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