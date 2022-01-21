import React, { useState } from "react";
import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View, Modal, ScrollView, TouchableWithoutFeedback } from "react-native";
import { ProgressBar } from "react-native-paper";
import ItemSeperatorMain, { ItemSeperator } from "../../components/ItemSeperator/ItemSeperator";
import { Help, LeftArrow } from "../../components/Logo/Logo";
import { Menu } from 'react-native-material-menu';
import SelectDropdown from 'react-native-select-dropdown'
import RenderItems from "./RenderItem";
import { MenuData, DATA, Icons, Constant } from "../../config";
import styles from '../ContinueLearning/styles';

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
        return Data.map(any => any.title)
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
        <View style={styles.container}>

            <Modal animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                    setModal(!modal);
                }}>

                <View style={styles.centeredView}>

                    <TouchableWithoutFeedback onPress={() => setModal(!modal)}>
                        <View style={styles.container}></View>
                    </TouchableWithoutFeedback>

                </View>

                <View style={styles.modal2View}>

                    <View style={styles.filterView}>

                        <TouchableOpacity onPress={() => setModal(!modal)}>
                            <Image source={Icons.close} style={styles.crossModal} />
                        </TouchableOpacity>

                        <Text style={styles.filtersText}>{Constant.Filters}</Text>

                    </View>

                    <View style={styles.marginVertical}>
                        <ItemSeperatorMain />
                    </View>

                    <View style={styles.modalView}>

                        <Text style={styles.modalText}>{Constant.Bookmarks}</Text>

                        <SelectDropdown
                            data={Bookmark}
                            buttonStyle={styles.dropdwonbutton}
                            defaultButtonText={'Select an option'}
                            buttonTextStyle={styles.marginRight}
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
                            }}
                        />
                    </View>

                    <View style={styles.modalView}>

                        <Text style={styles.modalText}>{Constant.Titles}</Text>

                        <SelectDropdown
                            data={titleListData}
                            defaultButtonText={'Select an option'}
                            buttonTextStyle={styles.marginRight}
                            buttonStyle={styles.dropdwonbutton}
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
                            }}
                        />
                    </View>



                    <TouchableOpacity
                        onPress={() => { setFilter(true), setModal(false), setTogglBookmark(true), setToggleTitle(true), setisData(true); }}
                        style={styles.modalFilterButton}>
                        <Text style={styles.modalFilterText}>{Constant.Apply_filters}</Text>
                    </TouchableOpacity>

                </View>

            </Modal>

            <View>
                <ImageBackground source={Icons.course} style={styles.image}>

                    <View style={styles.logo}>
                        <LeftArrow navigation={props.navigation} />
                        <Help />
                    </View>

                    <View style={styles.width}>
                        <Text style={styles.text}>{Constant.Health_Coach_Training_Program}</Text>
                    </View>

                    <Text style={styles.text2}>{Constant.of_modules_complete}</Text>

                </ImageBackground>

                <ProgressBar progress={0.55} color='green' style={styles.progressbar} />

                <View style={styles.marginHorizontal}>

                    <View style={styles.textView}>

                        <Text style={styles.ModuleText}>{Constant.Modules}</Text>

                        <View>
                            <Menu
                                visible={visible}
                                anchor={<TouchableOpacity onPress={showMenu} style={styles.Vertical}>
                                    <Image source={Icons.menu} style={styles.menu} />
                                </TouchableOpacity>}
                                onRequestClose={hideMenu}>

                                {MenuData.map((item: any, defaultKey: any) => {
                                    return (
                                        <View key={defaultKey}>
                                            <TouchableOpacity onPress={() => { subShowMenu(), hideMenu(), setSubMenuData(item.submodule); }} style={styles.MenuPress}>
                                                <Text style={styles.MenuText}>{item.title}</Text>
                                                {item.submodule.length == 0 ? null : <Image source={Icons.righticon} style={styles.icon} />}
                                            </TouchableOpacity>
                                        </View>
                                    );
                                })}
                            </Menu>

                            <View style={styles.position}>
                                <Menu
                                    visible={subVisible}
                                    anchor={<View></View>}
                                    onRequestClose={subHideMenu}>

                                    {subMenuData.map((item: any, defaultKey: any) => {
                                        return (
                                            <View key={defaultKey}>
                                                <TouchableOpacity onPress={subHideMenu} style={styles.SubMenuPress}>
                                                    <Text style={styles.MenuText}>{item.title}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        );
                                    })}

                                </Menu>
                            </View>
                        </View>

                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.textView}>
                        <Text style={styles.LastText}>{Constant.LAST_VIEWED_MODULE}</Text>

                        <TouchableOpacity style={styles.ResumeOpacity}>
                            <Text style={styles.ResumeText}>{Constant.Resume}</Text>
                        </TouchableOpacity>

                    </View>

                    <Text style={styles.DetoxText}>{Constant.Detox_Your_Life}</Text>
                    <Text style={styles.text7}>{Constant.The_first_module_is_all_about_setting_you_up}</Text>

                </View>

                <ItemSeperator />

                <View style={styles.upperView}>

                    <View style={styles.textView}>

                        <View style={styles.filterView}>
                            {
                                (toggleBookmark == true || toggleTitle == true) ?
                                    <Text style={styles.text8}>{Constant.Filters_}</Text>
                                    :
                                    null
                            }
                        </View>

                        {toggleBookmark ?

                            <View style={styles.filterView}>

                                <TouchableOpacity style={styles.bookmarkButton} onPress={() => { setTogglBookmark(false), setFilter(false), setData(finalFlatListData), setBookmarkData("Select"); }}>

                                    <View style={styles.logo}>

                                        <Text style={styles.bookmarkText}>{BookmarkData}</Text>
                                        <Image source={Icons.close} style={styles.cross} />

                                    </View>

                                </TouchableOpacity>

                            </View>
                            :
                            null
                        }

                        {toggleTitle ?

                            <View style={styles.filterView}>

                                <TouchableOpacity style={styles.bookmarkButton} onPress={() => { setToggleTitle(false), setFilter(false), setData(flatListData), settitle("Select"); }}>

                                    <View style={styles.logo}>
                                        <Text style={styles.titleText}>{Constant.Title}</Text>
                                        <Image source={Icons.close} style={styles.cross} />
                                    </View>

                                </TouchableOpacity>
                            </View>
                            :
                            null
                        }

                        <TouchableOpacity style={styles.filterOpacity} onPress={() => setModal(true)}>
                            <Text style={styles.filterbuttonText}>{Constant.Filters}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <FlatList

                data={filter ? finalFlatListData : Data}
                extraData={Data}
                showsVerticalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) =>
                    <RenderItems item={item} setData={setData} />
                }
            />
        </View>
    )
}

export default ContinueLearning;