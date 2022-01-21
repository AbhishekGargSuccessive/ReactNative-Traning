import React, { useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Constant, Icons } from "../../config";
import styles from './styles';

interface RenderProps {
    item: any
    setData: any
}

const RenderItems = (props: RenderProps) => {
    const { item, setData } = props;
    const [unSet, set] = useState(false)

    const Submodule = () => {
        return props.item.submodule.map((title: any, defaultKey: any) => {
            return (
                <View key={defaultKey} style={styles.subModule}>
                    <Image source={Icons.progressbar} style={styles.submoduleImage} />
                    <Text style={styles.subModuleText}>{title.title}</Text>
                </View>
            );
        });
    }

    return (
        <SafeAreaView style={styles.flatView}>
            <Image source={item.image} style={styles.flatlistImage} />

            <View style={styles.marginLeft}>

                <View style={styles.flex}>

                    <Text>{Constant.MODULE} {item.id}</Text>

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
                    unSet ?
                        <View>
                            <Text style={styles.subModuleText2}>{Constant.SubModule}</Text>
                            <Submodule />
                        </View>
                        :
                        null
                }
            </View>
        </SafeAreaView>
    );
}

export default RenderItems;