import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        height: 180,
        width: "100%",
    },
    logo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        // fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
        paddingLeft: 20
    },
    text2: {
        color: 'white',
        fontSize: 15,
        paddingLeft: 20,
        marginVertical: 5
    },
    progressbar: {
        height: 4.5,
        width: "100%"
    },
    ModuleText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 10,
    },
    line: {
        height: 3,
        width: "24.5%",
        backgroundColor: 'red',
        marginTop: -10,
    },
    textView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    LastText: {
        fontSize: 16,
        marginVertical: 10,
    },
    ResumeText: {
        fontSize: 19,
        color: 'white',
    },
    DetoxText: {
        fontSize: 23,
        color: 'black',
        marginVertical: -25,
    },
    ResumeOpacity: {
        backgroundColor: 'midnightblue',
        marginVertical: 10,
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    text7: {
        marginTop: 40,
        marginBottom: 20,
        fontSize: 15,
    },
    text8: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    },
    filterOpacity: {
        borderWidth: 1,
        borderColor: 'red',
        paddingHorizontal: 10,
        paddingVertical: 5,
        justifyContent: 'center',
        marginLeft: 10
    },
    filterbuttonText: {
        fontWeight: 'bold',
        color: 'red',
        alignSelf: 'center',
    },
    bookmarkButton: {
        backgroundColor: 'lightgrey',
        marginLeft: 20,
        padding: 6,
    },
    bookmarkText: {
        color: 'black',
        paddingLeft: 5,
        paddingRight: 10,
    },
    titleText: {
        color: 'black',
        paddingLeft: 5,
        paddingRight: 5,
    },
    cross: {
        height: 14,
        width: 14,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    viewDirection: {
        flexDirection: 'row',
        marginRight: 95,
        marginVertical: 3
    },
    logoStyle: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
    centeredView: {
        flex: 0.25,
        // justifyContent: 'flex-end',
    },
    modal2View: {
        flex: 0.75,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,

    },
    modalView: {
        // flex: 0.5,
        marginVertical:10
    },
    modalText: {
        fontSize: 18,
        color: "black",
        marginVertical: 5,
    },
    crossModal: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        marginLeft: 5,
        tintColor: "black",
    },
    modalFilterButton: {
        borderWidth: 1,
        marginTop: 20,
        backgroundColor:'midnightblue'
    },
    modalFilterText: {
        padding: 10,
        fontSize: 18,
        color: 'white',
        alignSelf: "center"
    },
    upperView: {
        marginHorizontal: 25,
        marginVertical: 20
    },
    filterView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    minText: {
        marginLeft: 15,
        color: 'grey',
    },
    percentageText: {
        color: 'green',
        marginRight: 15,
    },
    flatView: {
        flexDirection: 'row',
        marginVertical: 15,
        marginHorizontal:25,
        alignItems:'center'
    },
    flatlistImage: {
        height: 70,
        width: 70
    },
    icon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        alignSelf: 'center',

    },
    MenuContainer: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    SubMenuContainer: {
        // flex: 1,
        // flexDirection: "row",
        // justifyContent: "space-between",
    },
    subModule: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    subModuleText: {
        flex: 0.95,
        fontSize: 13,
        color: 'black'
    },
    renderTitleText: {
        color: 'black',
        marginVertical: 3,
        fontSize: 15
    },
    subModuleText2: {
        color: 'black',
        fontSize: 15
    },
    menu: {
        height: 30,
        width: 30
    }

})

export default styles;