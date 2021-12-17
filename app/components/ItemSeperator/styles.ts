import { StyleSheet } from "react-native";

const styles = (o: any) => StyleSheet.create({
    seperator: {
        height: 1,
        width: o.isLandscape ? o.width * 0.891 : o.width * 0.88,
        backgroundColor: 'lightslategrey',
        marginLeft: 20
    },
    mainSeperator: {
        height: 1,
        width: "100%",
        backgroundColor: 'lightslategrey'
    }
})

export default styles;