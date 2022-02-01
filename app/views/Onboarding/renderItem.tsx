import React from "react"
import { View, ImageBackground, Image, Text, TouchableOpacity } from "react-native"
import { HeaderLogo } from "../../common"
import { constants } from "../../constants"
import styles from "./styles"

interface Render {
    data: {
        id: number;
        backgroundImage: any;
        bannerImage: any;
        title: string;
        description: string;
    }
    maxIndex: number
    index: number
    scrollTo: (item: number) => void
    navigation: any
}

const RenderItem = (props: Render) => {
    const { data, index, maxIndex, scrollTo, navigation } = props;

    return (
        <View style={styles.renderContainer}>

            <View style={styles.renderheaderContainer}>
                <ImageBackground source={data.backgroundImage} style={styles.backgroundImage}>
                    <HeaderLogo />
                    <View>
                        <Image source={data.bannerImage} style={styles.bannerImage} />
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.renderfooterContainer}>
                <Text style={styles.titleText}>{data.title}</Text>
                <Text style={styles.descriptionText}>{data.description}</Text>
            </View>

            {index < maxIndex &&
                <View style={styles.buttonContainer}>

                    <TouchableOpacity style={styles.skipButton} onPress={() => props.scrollTo(maxIndex)}>
                        <Text style={styles.skipButtonText}>{constants.keywords.skip}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.nextButton} onPress={() => props.scrollTo(index + 1)}>
                        <Text style={styles.nextButtonText}>{constants.keywords.next}</Text>
                    </TouchableOpacity>
                </View>
            }

            {index == maxIndex &&
                <View style={styles.buttonContainer2}>

                    <TouchableOpacity style={styles.startedButton} onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.nextButtonText}>{constants.keywords.started}</Text>
                    </TouchableOpacity>

                </View>
            }

        </View >

    )
}

export default RenderItem;