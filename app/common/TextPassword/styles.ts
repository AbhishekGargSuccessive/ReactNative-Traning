import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    PasswordText: {
        color: COLORS.gray,
        fontSize: 15,
        marginVertical: 5,
        fontFamily: 'Poppins-Regular'
    },
    InputContainer: {
        backgroundColor: COLORS.lightGray1,
        borderRadius: 12,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    InputText: {
        // width: '95%',
        paddingHorizontal: 10,
        paddingVertical: 12,
        color: COLORS.black,
        fontSize: SIZES.body4,
        fontFamily: 'Poppins-Regular'
    },
    icon: {
        resizeMode: 'contain',
        alignSelf: 'center',
        justifyContent: 'center',
        height: 20,
        width: 20,
    },
})

export default styles;