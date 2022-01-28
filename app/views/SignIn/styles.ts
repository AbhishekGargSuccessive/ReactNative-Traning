import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    SigninText: {
        color: COLORS.black,
        fontSize: 24,
        textAlign: 'center',
        fontFamily: "Poppins-Bold"
    },
    WelcomeText: {
        textAlign: 'center',
        fontSize: 16,
        color: COLORS.transparentBlack7,
        fontFamily: 'Poppins-Regular'
    },
    ScrollContainer:{
        flex:1,
        marginVertical:20
    },
    SwitchContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    SwitchDirection:{
        flexDirection:'row'
    },
    ForgotText: {
        fontSize: 15,
        color: COLORS.gray,
        marginVertical: 10,
        fontFamily: 'Poppins-Regular'
    },
    SignInButton: {
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 12,
        marginVertical: 10,
    },
    SignInButtonText: {
        color: COLORS.white,
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
    },
    TextContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    SignUpText: {
        color: COLORS.primary,
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
    },
})
export default styles