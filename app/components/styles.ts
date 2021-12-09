import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    logo: {
        resizeMode: 'contain',
        marginLeft: -windowHeight * 0.05
    },
    headerLogo: {
        scaleX: 0.5,
        scaleY: 0.5
    },
    rightlogo: {
        resizeMode: 'contain',
        tintColor: 'black',
        width: 30,
        height: 30,
    },
    borderlogo: {
        margin: 15,
        borderRadius: 50,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(164, 158, 151)'
    }
})

export default styles;