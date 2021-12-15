import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    identity: {
        flexDirection: 'column',
        margin: 15
    },
    name: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'black'
    },
    text: {
        marginHorizontal: 20,
        marginVertical: 10,
        color: 'black'
    },
    lowerPart: {
        flex: 0.85
    },
    Block: {
        flexDirection: 'row'
    },
    icon: {
        resizeMode:'contain',
        height: 20,
        width: 20
    },
    IconName: {
        marginHorizontal: 20,
        fontSize: 15,
        alignSelf: 'flex-start',
        color: 'black'
    },
    color:{
        color:'black'
    }

})

export default styles;
