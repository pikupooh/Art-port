import { fetchMangaChapterAction } from '../actions/fetchMangaChapterAction'
import * as ActionTypes from "../actions/actionTypes"

function fetchMangaChapter(id) {

    return dispatch => {
        fetch('http://localhost:8080/chapter/' + id)
        .then(res =>  res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchMangaChapterAction(res))   
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const createChapter = (mangaOrComic, chapterFormData, imageFormData, mangaId) => {
    console.log("createChapter");

    const token = localStorage.getItem("token");

    return (dispatch) => {
        fetch(`http://localhost:8080/mangas/${mangaId}/chapter`, {
            method: "POST",
            body: JSON.stringify(chapterFormData),
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        })
            .then(
                (response) => {
                    if (response.ok) return response;
                    else {
                        var error = new Error(
                            "Error " +
                                response.status +
                                ": " +
                                response.statusText
                        );
                        error.response = response;
                        throw error;
                    }
                },
                (error) => {
                    var errmess = new Error(error.message);
                    throw errmess;
                }
            )
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                let chapId = response.id;

                fetch(`http://localhost:8080/chapters/${chapId}/images/upload`, {
                    method: "POST",
                    body: imageFormData,
                    headers: {
                        Authorization: token,
                    },
                })
                    .then(
                        (response) => {
                            if (response.ok) return response.json();
                            else {
                                var error = new Error(
                                    "Error " +
                                        response.status +
                                        ": " +
                                        response.statusText
                                );
                                error.response = response;
                                throw error;
                            }
                        },
                        (error) => {
                            var errmess = new Error(error.message);
                            throw errmess;
                        }
                    )
                    .then((response) => {
                        console.log(response);
                        if(mangaOrComic === "MANGA")
                            dispatch(addMangaChapter(mangaId, response));
                        else
                            dispatch(addComicChapter(mangaId, response));
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
};

function addMangaChapter(mangaId, chapter) {
    return {
        type: ActionTypes.MANGA_CHAPTER_ADDED,
        mangaId: mangaId,
        chapter: chapter,
    };
}

function addComicChapter(mangaId, chapter) {
    return {
        type: ActionTypes.COMIC_CHAPTER_ADDED,
        mangaId: mangaId,
        chapter: chapter,
    };
}

export default fetchMangaChapter;