import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    emailText: {
        color: COLORS.gray,
        fontSize: 15,
        fontFamily: 'Poppins-Regular'
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