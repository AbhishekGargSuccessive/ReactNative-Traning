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
        width: 27,
        height: 27,
    },
    borderlogo: {
        margin: 15,
        borderRadius: 50,
        height: 42,
        width: 42,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(176, 174, 171)'
    },
    leftlogo:{
        resizeMode: 'contain',
        tintColor: 'black',
        width: 30,
        height: 30
    },
    borderleftlogo:{
        borderRadius: 50,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})

export default styles;