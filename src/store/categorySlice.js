import { createSlice } from "@reduxjs/toolkit";
import {STATUS} from "../utils/status";
import { apiClient } from "../api/API";

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        data: [],
        status: STATUS.IDLE,
        catProductAll: {},
        catProductAllStatus: STATUS.IDLE,
        catProductSingle: [],
        catProductSingleStatus: STATUS.IDLE
    },

    reducers: {
        setCategories(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        setCategoriesProductAll(state, action) {
            state.catProductAll = action.payload;
        },
        setCategoriesStatusAll(state, action) {
            state.catProductAllStatus = action.payload;
        },
        setCategoriesProductSingle(state, action) {
            state.catProductSingle = action.payload;
        },
        setCategoriesStatusSingle(state, action) {
            state.catProductSingleStatus = action.payload
        }
    }
});

export const {setCategories, setStatus, setCategoriesProductAll, setCategoriesStatusAll, setCategoriesProductSingle, setCategoriesStatusSingle} = categorySlice.actions;
export default categorySlice.reducer;

export const retrieveCategories = () => {
    return async function retrieveCategoryThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const response = await apiClient.get('/categories')
            const data = response.data;
            dispatch(setCategories(data));
            dispatch(setStatus(STATUS.IDLE));
        } catch(error) {
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}

export const retrieveProductByCategory = (categoryID, pageNumber, dataType) => {
    return async function retrieveCategoryProductThunk(dispatch) {
        if (dataType === 'all') dispatch(setCategoriesStatusAll(STATUS.LOADING));
        if (dataType === 'single') dispatch(setCategoriesProductSingle(STATUS.LOADING));
        try {
            const response = await apiClient.get(`/products/categories/${categoryID}/pages/${pageNumber}`);
            const data = response.data;
            if (dataType === 'all') {
                dispatch(setCategoriesProductAll(data));
                dispatch(setCategoriesStatusAll(STATUS.IDLE));
            }
            if (dataType === 'single') {
                dispatch(setCategoriesProductSingle(data));
                dispatch(setCategoriesStatusSingle(STATUS.IDLE));
            }
        } catch(error) {
            if(dataType === 'all') dispatch(setCategoriesStatusAll(STATUS.ERROR));
            if (dataType === 'single') dispatch(setCategoriesStatusSingle(STATUS.ERROR));
        }
    }
}