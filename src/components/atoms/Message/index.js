import { showMessage } from "react-native-flash-message";
import React from 'react';
import { Cancel } from "../../../assets";


const showFlashMessage = (message, type = 'DEFAULT', duration) => {
    const getColor = () => {
        switch (type) {
            case "SUCCESS":
                return '#27AE60';
            case "ERROR":
                return '#D9435E';
            default:
                return '#FFC700';
        }
    }
    showMessage({
        message: message,
        type: 'default', backgroundColor: getColor(),
        icon: props => type === 'ERROR' ? <Cancel {...props} /> : null,
    });
};

export default showFlashMessage;