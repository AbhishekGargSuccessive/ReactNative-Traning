import { StyleSheet } from "react-native"

const styles = (o: any) => StyleSheet.create({
    inputText: {
        height: o.isLandscape ? o.height * 0.121 : o.height * 0.060,
        width: o.isLandscape ? o.width * 0.82 : o.width * 0.83,
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
        color: 'black',
        borderColor: 'lightslategrey',
        backgroundColor: 'white',
    },
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 5,

    },
    image: {
        height: 20,
        width: 20,
        marginLeft: '105%'
    },
    imagebutton: {
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: '65%',
    },
    errormsg: {
        color: "red",
        marginLeft: 5,
    }
})

export default styles;