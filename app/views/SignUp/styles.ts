import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    startedText: {
        color: COLORS.black,
        fontSize: 24,
        textAlign: 'center',
        fontFamily: "Poppins-Bold"
    },
    createText: {
        textAlign: 'center',
        fontSize: 16,
        color: COLORS.transparentBlack7,
        fontFamily: 'Poppins-Regular'
    },
    ScrollContainer: {
        flex: 1,
        marginVertical: 20
    },
    ButtonContainer: {
        marginVertical: 18,
    },
    SignUpButton: {
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 12,
        marginVertical: 10,
    },
    SignUpButtonText: {
        color: COLORS.white,
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
    },
    TextContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    SignInText: {
        color: COLORS.primary,
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
    },
})
export default styles