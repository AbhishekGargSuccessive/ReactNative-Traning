import React, { useEffect, useState } from "react";
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
    item: any
}

const ContinueLearning = (props: ContinueProps) => {
    const [modal, setModal] = useState(false);

    const [Data, setData] = useState(DATA)

    //Metarial Menu

    const [visible, setVisible] = useState(false);
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);

    const [subVisible, setSubVisible] = useState(false);
    const subHideMenu = () => setSubVisible(false);
    const subShowMenu = () => setSubVisible(true);

    const [subMenuData, setSubMenuData] = useState([])

    //Filter Functionality

    const [filterBookmark, setFilterBookmark] = useState(false)
    const [filtertitle, setFilterTitle] = useState(false)
    const [firstfilterValue, setFirstfilterValue] = useState(-1)
    const [secondfilterValue, setSecondfilterValue] = useState('')

    useEffect(() => {
        const output = []

        if (firstfilterValue == -1 || secondfilterValue == "") {
            setData(DATA)
        }

        if (firstfilterValue == 0 && secondfilterValue == '') {
            output.length = 0
            for (var i = 0; i < DATA.length; i++) {
                if (DATA[i].bookmark)
                    output.push(DATA[i])
            }
            setData(output)
        }

        if (firstfilterValue == 1 && secondfilterValue == '') {
            output.length = 0
            for (var i = 0; i < DATA.length; i++) {
                if (!DATA[i].bookmark)
                    output.push(DATA[i])
            }
            setData(output)
        }

        if (secondfilterValue != '') {
            if (firstfilterValue == -1) {
                output.length = 0
                for (var i = 0; i < DATA.length; i++) {
                    if (DATA[i].title == secondfilterValue)
                        output.push(DATA[i])
                }
                setData(output)
            }

            if (firstfilterValue == 0) {
                output.length = 0
                for (var i = 0; i < DATA.length; i++) {
                    if (DATA[i].bookmark && DATA[i].title == secondfilterValue)
                        output.push(DATA[i])
                }
                setData(output)
            }

            if (firstfilterValue == 1) {
                output.length = 0
                for (var i = 0; i < DATA.length; i++) {
                    if (!DATA[i].bookmark && DATA[i].title == secondfilterValue)
                        output.push(DATA[i])
                }
                setData(output)
            }
        }

    }, [firstfilterValue, filterBookmark, secondfilterValue, filtertitle]);

    const titleData = () => {

        const output = []
        for (var i = 0; i < DATA.length; i++) {
            output.push(DATA[i].title)
        }
        return output
    }

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
                            data={["Bookmarked", 'Not Bookmarked']}
                            buttonStyle={styles.dropdwonbutton}
                            defaultButtonText={(firstfilterValue == -1) ? "Select an option." : (firstfilterValue == 0) ? 'Bookmarked' : 'Not Bookmarked'}
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
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                setFilterBookmark(true)
                                setFirstfilterValue(index)
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
                            data={titleData()}
                            defaultButtonText={secondfilterValue}
                            buttonTextStyle={styles.marginRight}
                            buttonStyle={styles.dropdwonbutton}
                            dropdownStyle={{ height: 250 }}
                            rowTextStyle={{ textAlign: 'left' }}
                            // dropdownIconPosition={'right'}
                            renderDropdownIcon={(unSet) => {
                                return (
                                    !unSet ?
                                        <Image source={Icons.dropdown} style={styles.icon} />
                                        :
                                        <Image source={Icons.dropup} style={styles.icon} />
                                );
                            }}
                            onSelect={(selectedItem, index) => {
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                setFilterTitle(true)
                                setSecondfilterValue(selectedItem)
                                return selectedItem;
                            }}
                            rowTextForSelection={(item, index) => {
                                return item;
                            }}
                        />
                    </View>



                    <TouchableOpacity
                        onPress={() => setModal(false)}
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

                        <View style={{ flexDirection: 'row' }}>

                            <View style={styles.filterView}>
                                {/* {
                                    (filterBookmark == true || filtertitle == true) ? */}
                                <Text style={styles.text8}>{Constant.Filters_}</Text>
                                {/*          :
                                         null
                                 } */}
                            </View>


                            <View style={{ flexDirection: 'row', marginLeft: 10 }}>

                                <View>

                                    {filterBookmark &&

                                        <View style={styles.bookmarktoggle}>

                                            <TouchableOpacity style={styles.bookmarkButton} onPress={() => { setFilterBookmark(false), setData(DATA), setFirstfilterValue(-1) }}>

                                                <View style={styles.logo}>

                                                    <Text style={styles.bookmarkText}>{(firstfilterValue == 0) ? 'Bookmarked' : 'Not Bookmarked'}</Text>
                                                    <Image source={Icons.close} style={styles.cross} />

                                                </View>

                                            </TouchableOpacity>

                                        </View>
                                    }
                                </View>


                                <View>

                                    {filtertitle &&

                                        <View style={styles.filterView}>

                                            <TouchableOpacity style={styles.bookmarkButton} onPress={() => { setFilterTitle(false), setData(DATA), setSecondfilterValue('') }}>

                                                <View style={styles.logo}>
                                                    <Text style={styles.titleText}>{Constant.Title}</Text>
                                                    <Image source={Icons.close} style={styles.cross} />
                                                </View>

                                            </TouchableOpacity>
                                        </View>
                                    }
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.filterOpacity} onPress={() => setModal(true)}>
                            <Text style={styles.filterbuttonText}>{Constant.Filters}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ marginVertical: 8, flex: 1 }}>

                <FlatList

                    data={Data}
                    extraData={Data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item, index }) =>
                        <RenderItems item={item} setData={setData} />
                    }
                />
            </View>
        </View>
    )
}

export default ContinueLearning;