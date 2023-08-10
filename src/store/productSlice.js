import { createSlice } from "@reduxjs/toolkit";
import {STATUS} from "../utils/status";
import { apiClient } from "../api/API";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: {},
        status: STATUS.IDLE,
    },

    reducers: {
        setProductDetail(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
});

export const {setProductDetail, setStatus} = productSlice.actions;
export default productSlice.reducer;

export const retrieveProductDetailByProductId = (productId) => {
    return async function retrieveProductDetailByProductIdThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const response = await apiClient.get(`/products/${productId}`)
            console.log("--------------------retrieveProductDetailByProductId----------------------")
            console.log(response);
            const data = response.data;
            dispatch(setProductDetail(data));
            dispatch(setStatus(STATUS.IDLE));
        } catch(error) {
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}