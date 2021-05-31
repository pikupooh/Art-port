import { logoutUser } from "./loging";

export const customfetch = (url, options) => {
    const request = (resolve) => {
        options.headers["Authorization"] = localStorage.getItem("token");
        fetch(url, options).then((response) => {
            if (response.ok) return resolve(response);

            if (response.status === 401) {
                return refreshToken(resolve);
            }
        });
    };

    const refreshToken = (resolve) => {
        return fetch("/api/auth/refreshtoken", {
            method: "POST",
            body: JSON.stringify({
                refreshToken: localStorage.getItem("refreshToken"),
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status === 403) {
                    localStorage.clear()
                    
                    alert("Please sign in again")
                    //logoutUser();
                    window.location.reload(false);
                    return null;
                }
                if(response.ok) return response.json();
                 var error = new Error(
                            "Error " + response.status + ": " + response.statusText
                        );
                        error.res = response;
                        throw error;

            }, (error) => {throw error})
            .then((response) => {
                if (response !== null) {
                    localStorage.setItem(
                        "token",
                        "Bearer " + response.accessToken
                    );
                    return request(resolve);
                } else return null;
            }).catch(error => console.log(error));
    };

    let promise = new Promise((resolve, reject) => {
        request(resolve);
    });

    return promise;
};
