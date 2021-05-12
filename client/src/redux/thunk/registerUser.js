export default function registerUser(userData, imageFromData) {
    console.log(userData);
    return (dispatch) => {
        fetch(`http://localhost:8080/api/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then(
                (res) => {
                    console.log(res);
                    if (res.ok || res.status === 409) {
                        return res.text();
                    } else {
                        var error = new Error(
                            "Error " + res.status + ": " + res.statusText
                        );
                        error.res = res;
                        throw error;
                    }
                },
                (error) => {
                    throw error;
                }
            )
            .then((res) => {
                console.log(res);

                //TODO- ROHIT + Subordinates
                if (res === "Username is already taken") {
                    //dispatch something
                    //todo
                    console.log("You are shit.");
                } else if (res === "Email already in use");
                else {
                    //dispatch something Rohit do
                }
            })

            .catch((error) => console.log(error));
    };
}
