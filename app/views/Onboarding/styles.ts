import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    renderContainer: {
        flex: 1,
        width: 400,
    },
    renderheaderContainer: {
        flex: 0.66
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch',
    },
    bannerImage: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: "65%",
        height: "86%",
    },
    renderfooterContainer: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        color: 'black',
        fontSize: 24,
        fontFamily: "Poppins-Bold"
    },
    descriptionText: {
        fontSize: 15,
        width: "75%",
        textAlign: 'center',
        color: COLORS.transparentBlack7,
        fontFamily: 'Poppins-Regular'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    buttonContainer2: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    skipButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    skipButtonText: {
        color: COLORS.darkGray,
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
    },
    nextButton: {
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        // justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 60,
        borderRadius: 12,
    },
    nextButtonText: {
        color: COLORS.white,
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
    },
})

export default styles