import { useSelector } from "react-redux"
import { CREATE_MOVIES_ERROR, CREATE_MOVIES_LOADING, CREATE_MOVIES_SUCCESS, DELETE_MOVIES_ERROR, DELETE_MOVIES_LOADING, DELETE_MOVIES_SUCCESS, GET_MOVIES_ERROR, GET_MOVIES_LOADING, GET_MOVIES_SUCCESS, UPDATE_MOVIES_ERROR, UPDATE_MOVIES_LOADING, UPDATE_MOVIES_SUCCESS } from "./movie.types"
import { BASE_URL } from "../../constants/config"
import axios from "axios"
import { store } from "../store"
import { LOGOUT } from "../users/user.types"





export const getMovies = () => async (dispatch) => {
    
    const {token} = store.getState().userReducer

    dispatch({ type: GET_MOVIES_LOADING })
    try {
        const res = await axios(BASE_URL+"/movie", {
            method: "get",
            headers: {
                Authorization:token
            }
        })
        const {status,message,data} = res.data
        console.log(message)
        if (status === 1) {
            dispatch({ type: GET_MOVIES_SUCCESS, payload: data })
        }
        else if(status ===2){
            dispatch({ type: LOGOUT })
        }
        else {
            dispatch({ type: GET_MOVIES_ERROR })
        }
    } catch (error) {
        dispatch({ type: GET_MOVIES_ERROR })
    }

}




export const createMovies = (obj) => async (dispatch) => {
    const {token} = store.getState().userReducer
    dispatch({ type: CREATE_MOVIES_LOADING })
    try {
        const res = await axios(BASE_URL + "/movie/create", {
            method: "post",
            headers: {
                Authorization:token
            },
            data: obj
        })
        const {status,message} = res.data
        console.log(message)
        if (status === 1) {
            dispatch({ type: CREATE_MOVIES_SUCCESS })
            dispatch(getMovies())
        }
        else {
            dispatch({ type: CREATE_MOVIES_ERROR })
        }
    } catch (error) {
        dispatch({ type: CREATE_MOVIES_ERROR })
    }

}



export const updateMovies = (id,obj) => async (dispatch) => {
    const {token} = store.getState().userReducer
    dispatch({ type: UPDATE_MOVIES_LOADING })
    try {
        const res = await axios(BASE_URL + "/movie/", {
            method: "patch",
            headers: {
                Authorization:token,
                id: id
            },
            data: obj
        })
        const {status,message} = res.data
        console.log(message)
        if (status === 1) {
            dispatch({ type: UPDATE_MOVIES_SUCCESS })
            dispatch(getMovies())
        }
        else {
            dispatch({ type: UPDATE_MOVIES_ERROR })
        }
    } catch (error) {
        dispatch({ type: UPDATE_MOVIES_ERROR })
    }

}



export const deleteMovies = (id) => async (dispatch) => {
    const {token} = store.getState().userReducer

    dispatch({ type: DELETE_MOVIES_LOADING })
    try {
        const res = await axios(BASE_URL + "/movie/", {
            method: "delete",
            headers: {
                Authorization:token,
                id:id
            }
        })
        const {status,message} = res.data
        console.log(message)
        if (status === 1) {
            dispatch({ type: DELETE_MOVIES_SUCCESS })
            dispatch(getMovies())
        }
        else {
            dispatch({ type: DELETE_MOVIES_ERROR })
        }
    } catch (error) {
        dispatch({ type: DELETE_MOVIES_ERROR })
    }

}