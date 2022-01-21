import { StyleSheet } from "react-native";

const styles = (o: any) => StyleSheet.create({
    container: {
        alignItems: 'center',
        flex:1
    },
    header: {
        alignItems: 'center',
        marginTop: 20
    },
    headerImage: {
        resizeMode: 'contain',
        alignSelf: 'center',
        height: 35,
        margin: 40
    },
    headerText: {
        fontSize: 39,
        color: 'black',
        textAlign:'center'
    },
    continueButton: {
        marginVertical: 10,
        height: o.isLandscape ? o.height * 0.121 : o.height * 0.060,
        width: o.isLandscape ? o.width * 0.82 : o.width * 0.83,
        backgroundColor: "teal",
        justifyContent:'center',
    },
    continueButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
    },
    backButton: {
        borderWidth: 1,
        height: o.isLandscape ? o.height * 0.121 : o.height * 0.060,
        width: o.isLandscape ? o.width * 0.82 : o.width * 0.83,
        borderColor: 'orange',
        justifyContent:'center',
        marginVertical:10
    },
    backButtonText: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        padding: 10
    }
})

export default styles;