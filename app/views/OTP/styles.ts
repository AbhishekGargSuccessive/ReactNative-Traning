import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    colorContainer: {
        marginHorizontal: 20,
    },
    OTPText: {
        color: COLORS.black,
        fontSize: 24,
        textAlign: 'center',
        fontFamily: "Poppins-Bold"
    },
    AuthenticationText: {
        textAlign: 'center',
        fontSize: 16,
        color: COLORS.transparentBlack7,
        fontFamily: 'Poppins-Regular',
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10,
        borderRadius: 10,
        marginVertical: '10%',
    },
    inputText: {
        paddingHorizontal: 18,
        paddingVertical: 14,
        backgroundColor: COLORS.lightGray1,
        textAlign: "center",
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        borderRadius: 12,
    },
    TextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 6
    },
    ResendText: {
        color: COLORS.primary,
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
    },
    ButtonContainer: {
        marginVertical: '64%'
    },
    ContinueButton: {
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 12,
        marginVertical: 16,
    },
    ContinueButtonText: {
        color: COLORS.white,
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
    },
    TermsText: {
        color: COLORS.primary,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center'
    },
})
export default styles