import React, { useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Constant, Icons } from "../../config";
import ProgressCircle from 'react-native-progress-circle'
import styles from './styles';

interface RenderProps {
    item: any
    setData: any
}

const RenderItems = (props: RenderProps) => {
    const { item, setData } = props;
    const [unSet, set] = useState(false)

    return (
        <SafeAreaView style={styles.flatView}>
            <Image source={item.image} style={styles.flatlistImage} />

            <View style={styles.marginLeft}>

                <View style={styles.flex}>

                    <Text style={styles.moduletext}>{Constant.MODULE} {item.id}</Text>

                    {
                        !unSet ?
                            <TouchableOpacity onPress={() => set(true)}>
                                <Image source={Icons.dropdown} style={styles.icon} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => set(false)}>
                                <Image source={Icons.dropup} style={styles.icon} />
                            </TouchableOpacity>
                    }
                </View>

                <Text style={styles.renderTitleText}>{item.title}</Text>

                <View style={styles.logo}>

                    <View style={styles.viewDirection}>
                        <Image source={Icons.clock} style={styles.logoStyle} />
                        <Text style={styles.minText}>{Constant.min}</Text>
                    </View>

                    <View style={styles.viewDirection}>
                        <Text style={styles.percentageText}>100%</Text>

                        {item.bookmark ?
                            <Image source={Icons.bookmark_saved} style={styles.logoStyle} />
                            :
                            <Image source={Icons.bookmark} style={styles.logoStyle} />
                        }

                    </View>
                </View>

                {
                    unSet &&
                    <View>
                        {/* <Text style={styles.subModuleText2}>{Constant.SubModule}</Text> */}
                        {props.item.submodule.map((title: any, defaultKey: number) => {
                            return (
                                <View key={defaultKey.toString()} style={styles.subModule}>
                                    <ProgressCircle
                                        percent={40}
                                        radius={8}
                                        borderWidth={3}
                                        color="black"
                                        shadowColor="red"
                                        bgColor="white"
                                    />
                                    <Text style={styles.subModuleText}>{title.title}</Text>

                                </View>
                            );
                        })}
                    </View>
                }
            </View>
        </SafeAreaView>
    );
}

export default RenderItems;