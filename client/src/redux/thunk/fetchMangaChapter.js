import { fetchMangaChapterAction } from "../actions/fetchMangaChapterAction";
import * as ActionTypes from "../actions/actionTypes";
import { setLoadingAction } from "../actions/loadingActions";
import { customfetch } from "./customFetch";

function fetchMangaChapter(id) {
    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));

        fetch("/api/chapter/" + id)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }
                dispatch(fetchMangaChapterAction(res));
                dispatch(setLoadingAction(false, "Loading..."));

                return res;
            })
            .catch((error) => {
                
            });
    };
}

export const createChapter = (
    mangaOrComic,
    chapterFormData,
    imageFormData,
    mangaId
) => {
   

    const token = localStorage.getItem("token");

    return (dispatch) => {
        dispatch(setLoadingAction(true, "Loading..."));

        customfetch(`/api/mangas/${mangaId}/chapter`, {
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
              
                let chapid = response.id;

                customfetch(`/api/chapters/${chapid}/images/upload`, {
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
                      
                        dispatch(setLoadingAction(false, "Loading..."));
                        if (mangaOrComic === "MANGA")
                            dispatch(addMangaChapter(mangaId, response));
                        else dispatch(addComicChapter(mangaId, response));
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
