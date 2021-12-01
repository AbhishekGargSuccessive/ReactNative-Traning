import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 3,
        borderColor: 'lightblue',
        width: 300,
        marginVertical: 30,
        fontSize: 25,
        color: 'black',
        // padding: 10,
        borderRadius: 20,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
});

export default styles;