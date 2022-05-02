import { getApi, postApi,deleteApi,updateApi } from "../../utils/apiHelpers";
import {ADD_ARTICLE,ADD_ARTICLE_SUCCESS,GET_ARTICLE_LIST,GET_ARTICLE_LIST_SUCCESS,
    UPDATE_ARTICLE,DELETE_ARTICLE
} from "../actionTypes";


export const addArticle = () => {
    return {
        type: ADD_ARTICLE
    }
};

export const getArticle = () => {
    return {
        type: GET_ARTICLE_LIST
    }
};

export const getArticleSuccess = (data) => {
    return {
        type: GET_ARTICLE_LIST_SUCCESS,
        payload: data

    }
};

export const updateArticle = (data) => {
    return {
        type: UPDATE_ARTICLE,
        payload: data
    }
};

export const getArticlesApi = () => async dispatch => {

    try {
        dispatch(getArticle());
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        let result = await getApi('articles', config);
        dispatch(getArticleSuccess(result));
    } catch (error) {
        console.log("ERROR", error.message)
    }
};

export const addArticleApi = (body) => async dispatch => {

    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        dispatch(addArticle());
        let result = await postApi('ajouter_article', body, config);
        if (result) {
            dispatch(getArticlesApi ());
        }
    } catch (error) {
        console.log("ERROR", error.message)
    }
};

export const deleteArticle = (id) => async dispatch => {
    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }
        dispatch(addArticle());
        let result = await deleteApi('delete_article/' + id, config);
        if (result) {
            dispatch(getArticlesApi ());
        }
    } catch (error) {
        console.log("ERROR", error.message)
    }

};

export const updateArticleApi = (body, id) => async dispatch => {

    try {
        let config = {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }

        let result = await updateApi('maj_article/' + id, body, config);
        if (result) {
            dispatch(getArticlesApi());
        }
    } catch (error) {

    }
}