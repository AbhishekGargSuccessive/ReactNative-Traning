import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    images: {
        width: windowWidth * 0.075,
        height: windowHeight * 0.035,
        tintColor: 'red'
    }
})

export default styles;