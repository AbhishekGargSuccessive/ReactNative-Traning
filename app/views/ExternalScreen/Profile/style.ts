import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 5,

    },
    Upper: {
        flex: 0.15,
        flexDirection: 'row',
        margin: 25
    },
    Profile: {
        height: 70,
        width: 70
    },
    camera: {
        height: 25,
        width: 25,
        marginLeft: 22,
        marginTop: 22
    },
    identity: {
        flexDirection: 'column',
        margin: 15
    },
    name: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'black'
    },
    color: {
        color: 'black'
    },
    Square: {
        height: 270,
        width: "80%",
        marginTop: 30,
        marginHorizontal: 40,
        borderWidth: 1,
        borderColor: 'lightslategrey'
    },
    text: {
        marginHorizontal: 20,
        marginVertical: 10,
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    text2: {
        marginHorizontal: 50,
        marginVertical: 10,
        color: 'black',
        fontSize: 18,
        borderWidth: 1,
    },
    text3: {
        color: 'black',
        fontSize: 15,
        marginHorizontal: 20,
    },
    Square2: {
        height: 370,
        width: "80%",
        marginTop: 30,
        marginHorizontal: 40,
        borderWidth: 1,
        borderColor: 'lightslategrey'
    },
    Square3: {
        height: 130,
        width: "80%",
        marginTop: 30,
        marginHorizontal: 40,
        borderWidth: 1,
        borderColor: 'lightslategrey'
    }
})

export default styles;
