import React from 'react';

class ResetPasswordSuccessPage extends React.Component{
    render(){
        return(
            <div className = "reset_password_failed_success">
                <div>
                    Password reset successfully.
                </div>
                <div>
                    You can login using your new password
                </div>
            </div>
        )
    }
}

export default ResetPasswordSuccessPage