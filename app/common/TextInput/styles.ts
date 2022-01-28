import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
    },
    emailText: {
        color: COLORS.gray,
        fontSize: 15,
        fontFamily: 'Poppins-Regular'
    },
    InputContainer: {
        backgroundColor: COLORS.lightGray1,
        borderRadius: 12,
        paddingRight: 10,
    },
    InputText: {
        width: '95%',
        paddingHorizontal: 10,
        paddingVertical: 12,
        color: COLORS.black,
        fontSize: 16,
        fontFamily: 'Poppins-Regular'
    },
})

export default styles;