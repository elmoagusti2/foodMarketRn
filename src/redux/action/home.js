import { URL_FOOD } from "../../config";
import { axiosGet } from "../../utils";

export const fetchMenu = () => async dispatch => {
    dispatch({ type: 'HOME_LOADING', value: true });
    const response = await axiosGet({ url: URL_FOOD, token: '' });
    if (response.success) {
        console.log(response.data.data?.data || [])
        dispatch({ type: 'SET_MENU', value: response.data.data.data, category: [...new Set(response.data.data.data.map((item) => item.types))] });
    }
    dispatch({ type: 'HOME_LOADING', value: false });

}