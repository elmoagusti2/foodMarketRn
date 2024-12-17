import axios from 'axios';

export const axiosPost = async ({ url, data, token = '', config = {} }) => {
    try {
        const response = await axios.post(url, data, config ? config : {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            },
            timeout: 5000,
        });
        return { success: true, data: response.data };
    } catch (error) {
        if (error.response) {
            return { success: false, message: error.response.data.meta?.message || 'An error occurred' };
        } else if (error.request) {
            return { success: false, message: 'No response from server' };
        } else {
            return { success: false, message: error.message };
        }
    }
};

export const axiosGet = async ({ url, data, token = '', config = {} }) => {
    try {
        const response = await axios.get(url, data, config ? config : {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            },
            timeout: 3000,
        });
        return { success: true, data: response.data };
    } catch (error) {
        if (error.response) {
            // Server responded with a status outside of 2xx
            return { success: false, message: error.response.data.meta?.message || 'An error occurred' };
        } else if (error.request) {
            // Request was made but no response received
            return { success: false, message: 'No response from server' };
        } else {
            return { success: false, message: error.message };
        }
    }
};
