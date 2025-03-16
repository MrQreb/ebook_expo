import Toast from "react-native-toast-message";

interface showModalProps {
    type: 'success' | 'info'| 'success',
    text1:string;
    text2:string;
    visibilityTime?:number
}

export const showModal = ({text1, text2,  type, visibilityTime = 1000 }:showModalProps):void =>{
    Toast.show({
        type: type,
        text1: text1,
        text2: text2,
        visibilityTime: visibilityTime,
    });
}
