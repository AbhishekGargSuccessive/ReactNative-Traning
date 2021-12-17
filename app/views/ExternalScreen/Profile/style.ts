import { StyleSheet } from "react-native";

const styles = (o: any) => StyleSheet.create({
    container: {
        flex: 1,

    },
    Upper: {
        flexDirection: 'row',
        margin: 20
    },
    Profile: {
        height: 80,
        width: 80,
        borderRadius: 40,
        overflow: 'hidden'
    },
    camera: {
        height: 30,
        width: 40,
        marginLeft: 20,
        marginTop: 40,
        tintColor: 'white'
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
        width: o.isLandscape ? o.width * 0.80 : o.width * 0.88,
        height: 270,
        marginTop: 25,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'lightslategrey'
    },
    text: {
        marginVertical: 10,
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    text2: {
        marginVertical: 10,
        color: 'black',
        fontSize: 18,
        // borderWidth: 1,
        // backgroundColor:'white'
    },
    text3: {
        color: 'black',
        fontSize: 15,
        marginHorizontal: 20,
    },
    Square2: {
        height: 370,
        width: o.isLandscape ? o.width * 0.80 : o.width * 0.88,
        marginTop: 30,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'lightslategrey'
    },
    Square3: {
        height: 130,
        width: o.isLandscape ? o.width * 0.80 : o.width * 0.88,
        marginTop: 30,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'lightslategrey'
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
    },
    modalView: {
        backgroundColor: "teal",
        paddingVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopRightRadius: 30,
        borderTopLeftRadius:30,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    button:{
        color: 'white', 
        alignSelf: 'center', 
        fontWeight: 'bold'
    },
    imagestyle:{
        tintColor: 'white', 
        height: 40, 
        margin: 10, 
        resizeMode: 'contain',
    }
})

export default styles;
