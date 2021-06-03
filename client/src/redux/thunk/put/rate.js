import { UPDATE_RATING } from "../../actions/actionTypes";
import { customfetch } from "../customFetch";

function rate(rating, mangaId) {
    const token = localStorage.getItem("token");

    var tempObject = { rating, mangaId };
    tempObject = JSON.stringify(tempObject);
   

    return (dispatch) => {
        customfetch(`/api/manga/${mangaId}/rating`, {
            method: "PUT",
            body: tempObject,
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.text();
                }
            })
            .then((response) => {
                
                dispatch({
                    type: UPDATE_RATING,
                    payload: {
                        id: mangaId,
                        rating,
                    },
                });
            })
            .catch((err) => console.error(err));
    };
}

export default rate;
