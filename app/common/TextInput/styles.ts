import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    emailText: {
        color: COLORS.gray,
        fontSize: SIZES.body4,
        fontFamily: 'Poppins-Regular',
    },
    invalidText: {
        color: 'red',
        fontSize: SIZES.body4,
        fontFamily: 'Poppins-Regular',
    },
    icon: {
        resizeMode: 'contain',
        alignSelf: 'center',
        justifyContent: 'center',
        height: 20,
        width: 20
    },
    InputContainer: {
        backgroundColor: COLORS.lightGray1,
        borderRadius: 12,
        paddingRight: 10,
        marginVertical: 5
    },
    InputText: {
        paddingHorizontal: 10,
        paddingVertical: 12,
        color: COLORS.black,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
    },
})

export default styles;