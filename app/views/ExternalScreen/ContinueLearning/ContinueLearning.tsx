import React, { useState } from "react";
import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View, Modal, ScrollView, TouchableWithoutFeedback } from "react-native";
import { Colors, ProgressBar } from "react-native-paper";
import ItemSeperatorMain, { ItemSeperator } from "../../../components/ItemSeperator/ItemSeperator";
import { Help, LeftArrow, ThreeDots } from "../../../components/Logo";
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import SelectDropdown from 'react-native-select-dropdown'
import RenderItems from "../ContinueLearning/RenderItem";
import { MenuData, DATA, Icons } from "../../../config";
import styles from '../ContinueLearning/styles'

interface ContinueProps {
    navigation: any
}

const ContinueLearning = (props: ContinueProps) => {
    const [modal, setModal] = useState(false);

    const [Data, setData] = useState(DATA)

    const [isData, setisData] = useState(false)

    //Metarial Menu

    const [visible, setVisible] = useState(false);
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);

    const [subVisible, setSubVisible] = useState(false);
    const subHideMenu = () => setSubVisible(false);
    const subShowMenu = () => setSubVisible(true);
    const [subMenuData, setSubMenuData] = useState([])

    //Bookmark

    const Bookmark = ["Bookmarked", "Not Bookmarked"]
    const [BookmarkData, setBookmarkData] = useState("")

    const [toggleBookmark, setTogglBookmark] = useState(false)
    const [toggleTitle, setToggleTitle] = useState(false)

    const [filter, setFilter] = useState(false)
    const [title, settitle] = useState("")

    //Check Bookmark

    const CheckBookmark = (bookdata: any) => {
        if (bookdata == 'Bookmarked') {
            return true
        }
        else {
            return false
        }
    }

    const titleData = (input: any) => {
        return Data.filter((item) => item.bookmark == input).map(any => any.title)
    }

    const listData = (input: any) => {
        return Data.filter((item) => item.bookmark == input).map(any => any)
    }

    const flatListData = listData(CheckBookmark(BookmarkData))

    const titleListData = titleData(CheckBookmark(BookmarkData))

    const listtitledata = (input: any) => {
        return flatListData.filter((item) => item.title == input).map(any => any)
    }

    const finalFlatListData = listtitledata(title)

    return (
        <FlatList
            ListHeaderComponent={
                <><Modal animationType="slide"
                    transparent={true}
                    visible={modal}
                    onRequestClose={() => {
                        setModal(!modal);
                    }}>

                    <View style={styles.centeredView}>

                        <TouchableWithoutFeedback onPress={() => setModal(!modal)}>
                            <View style={{ flex: 1 }}></View>
                        </TouchableWithoutFeedback>

                    </View>

                    <View style={styles.modal2View}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <TouchableOpacity onPress={() => setModal(!modal)}>
                                <Image source={Icons.close} style={styles.crossModal} />
                            </TouchableOpacity>

                            <Text style={{ fontSize: 21, color: 'black', marginLeft: 130 }}>Filters</Text>

                        </View>

                        <View style={{ marginVertical: 15 }}>
                            <ItemSeperatorMain />
                        </View>

                        <View style={styles.modalView}>

                            <Text style={styles.modalText}>Bookmarks</Text>

                            <SelectDropdown
                                data={Bookmark}
                                buttonStyle={{ width: "100%", marginVertical: 5 }}
                                defaultButtonText={'Select an option'}
                                buttonTextStyle={{ marginRight: 178 }}
                                renderDropdownIcon={(unSet) => {
                                    return (
                                        unSet ?
                                            <Image source={Icons.dropup} style={styles.icon} />
                                            :
                                            <Image source={Icons.dropdown} style={styles.icon} />
                                    );
                                }}
                                onSelect={(selectedItem, index) => {
                                    setBookmarkData(selectedItem);
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem;
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item;
                                }} />
                        </View>

                        <View style={styles.modalView}>

                            <Text style={styles.modalText}>Groups</Text>

                            <SelectDropdown
                                data={titleListData}
                                defaultButtonText={'Select an option'}
                                buttonTextStyle={{ marginRight: 178 }}
                                // dropdownStyle={{ height: 200 }}
                                buttonStyle={{ width: "100%", marginVertical: 5 }}
                                renderDropdownIcon={(unSet) => {
                                    return (
                                        !unSet ?
                                            <Image source={Icons.dropdown} style={styles.icon} />
                                            :
                                            <Image source={Icons.dropup} style={styles.icon} />
                                    );
                                }}
                                onSelect={(selectedItem, index) => {
                                    settitle(selectedItem);
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem;
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item;
                                }} />
                        </View>



                        <TouchableOpacity
                            onPress={() => { setFilter(true), setModal(false), setTogglBookmark(true), setToggleTitle(true), setisData(true); }}
                            style={styles.modalFilterButton}>
                            <Text style={styles.modalFilterText}>Apply filters</Text>
                        </TouchableOpacity>

                    </View>

                </Modal><View>
                        <ImageBackground source={Icons.course} style={styles.image}>

                            <View style={styles.logo}>
                                <LeftArrow navigation={props.navigation} />
                                <Help />
                            </View>

                            <View style={{ width: 300 }}>
                                <Text style={styles.text}>Health Coach Training Program</Text>
                            </View>

                            <Text style={styles.text2}>55% of modules complete</Text>

                        </ImageBackground>

                        <ProgressBar progress={0.55} color='green' style={styles.progressbar} />

                        <View style={{ marginHorizontal: 25 }}>

                            <View style={styles.textView}>

                                <Text style={styles.ModuleText}>Modules</Text>

                                <View>
                                    <Menu
                                        visible={visible}
                                        anchor={<TouchableOpacity onPress={showMenu} style={{ marginVertical: 10 }}>
                                            <Image source={Icons.menu} style={styles.menu} />
                                        </TouchableOpacity>}
                                        onRequestClose={hideMenu}>

                                        {MenuData.map((item: any, defaultKey: any) => {
                                            return (
                                                <View key={defaultKey} style={styles.MenuContainer}>
                                                    <MenuItem onPress={() => { subShowMenu(), hideMenu(), setSubMenuData(item.submodule); }}>
                                                        {item.title}
                                                    </MenuItem>
                                                    {item.submodule.length == 0 ? null : <Image source={Icons.righticon} style={styles.icon} />}

                                                </View>
                                            );
                                        })}
                                    </Menu>

                                    <View style={{ position: "absolute" }}>
                                        <Menu
                                            visible={subVisible}
                                            anchor={<View></View>}
                                            onRequestClose={subHideMenu}>

                                            {subMenuData.map((item: any, defaultKey: any) => {
                                                return (
                                                    <View key={defaultKey} style={styles.SubMenuContainer}>
                                                        <MenuItem onPress={subHideMenu}>
                                                            {item.title}
                                                        </MenuItem>
                                                    </View>
                                                );
                                            })}

                                        </Menu>
                                    </View>
                                </View>

                            </View>

                            <View style={styles.line}></View>

                            <View style={styles.textView}>
                                <Text style={styles.LastText}>LAST VIEWED MODULE</Text>

                                <TouchableOpacity style={styles.ResumeOpacity}>
                                    <Text style={styles.ResumeText}>Resume</Text>
                                </TouchableOpacity>

                            </View>

                            <Text style={styles.DetoxText}>Detox Your Life </Text>
                            <Text style={styles.text7}>The first module is all about setting you up... </Text>

                        </View>

                        <ItemSeperator />

                        <View style={styles.upperView}>

                            <View style={styles.textView}>

                                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                    <Text style={styles.text8}>Filters:</Text>
                                </View>

                                {toggleBookmark ?

                                    <View style={styles.filterView}>

                                        <TouchableOpacity style={styles.bookmarkButton} onPress={() => { setTogglBookmark(false), setFilter(false), setData(Data), setBookmarkData("Select"); }}>

                                            <View style={styles.logo}>

                                                <Text style={styles.bookmarkText}>{BookmarkData}</Text>
                                                <Image source={Icons.close} style={styles.cross} />

                                            </View>

                                        </TouchableOpacity>

                                    </View>
                                    :
                                    null}

                                {toggleTitle ?

                                    <View style={styles.filterView}>

                                        <TouchableOpacity style={styles.bookmarkButton} onPress={() => { setToggleTitle(false), setFilter(false), setData(flatListData), settitle("Select"); }}>

                                            <View style={styles.logo}>
                                                <Text style={styles.titleText}>Title</Text>
                                                <Image source={Icons.close} style={styles.cross} />
                                            </View>

                                        </TouchableOpacity>
                                    </View>
                                    :
                                    null}

                                <TouchableOpacity style={styles.filterOpacity} onPress={() => setModal(true)}>
                                    <Text style={styles.filterbuttonText}>Filter</Text>
                                </TouchableOpacity>

                            </View>


                        </View>
                    </View></>

            }
            data={filter ? finalFlatListData : Data}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) =>
                <RenderItems item={item} setData={setData} />
            }
        />

    )
}

export default ContinueLearning;