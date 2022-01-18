import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { DATA, Icons } from "../../../config";
import styles from '../ContinueLearning/styles';

interface RenderProps {
    item: any
    setData: any
    // index: number
}

const RenderItems = (props: RenderProps) => {
    const { item, setData } = props;
    const [unSet, set] = useState(false)

    const Submodule = () => {
        return props.item.submodule.map((title: any, defaultKey: any) => {
            return (
                <View key={defaultKey} style={styles.subModule}>
                    <Image source={Icons.progress} style={{ height: 20, width: 20, resizeMode: "contain", alignSelf: "center" }} />
                    <Text style={styles.subModuleText}>{title.title}</Text>
                </View>
            );
        });
    }

    return (
        <View style={styles.flatView}>
            <Image source={item.image} style={styles.flatlistImage} />

            <View style={{ marginLeft: 10, }}>

                <View style={{ flexDirection: 'row' }}>
                    <Text>MODULE {item.id}</Text>

                    <View style={{ paddingLeft: 20,  }}>

                        {/* {
                            !unSet ?
                                <TouchableOpacity onPress={() => set(true)}>
                                    <Image source={Icons.dropdown} style={styles.icon} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => set(false)}>
                                    <Image source={Icons.dropup} style={styles.icon} />
                                </TouchableOpacity>
                        } */}
                    </View>

                </View>

                <Text style={styles.renderTitleText}>{item.title}</Text>

                <View style={styles.logo}>

                    <View style={styles.viewDirection}>
                        <Image source={Icons.clock} style={styles.logoStyle} />
                        <Text style={styles.minText}>3h 30min</Text>
                    </View>

                    <View style={styles.viewDirection}>
                        <Text style={styles.percentageText}>100%</Text>

                        {item.bookmark ?
                            <TouchableOpacity>
                                <Image source={Icons.bookmark_saved} style={styles.logoStyle} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity>
                                <Image source={Icons.bookmark} style={styles.logoStyle} />
                            </TouchableOpacity>
                        }

                    </View>
                </View>
                {/* {
                    unSet ?
                        <View>
                            <Text style={styles.subModuleText2}>SubModule:-</Text>
                            <Submodule />
                        </View>
                        :
                        null
                } */}
            </View>
        </View>
    );
}

export default RenderItems;