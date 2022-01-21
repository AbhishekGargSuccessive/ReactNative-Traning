import React, { useState } from "react";
import { ScrollView, View, Image, Text, ImageBackground, Switch } from "react-native";
import { Help, LeftArrow } from "../../components/Logo/Logo";
import ToogleText from "../../components/ToggleText/ToggleText";
import { Constant } from "../../config";
import styles from './styles'

interface CommunicationProp {
    navigation: any
}

const Communication = (props: CommunicationProp) => {
    const { navigation } = props;
    const [isEnabled, setIsEnabled] = useState(false);
    const [SMS, setSMS] = useState(false);
    const [WhatsApp, setWhatsApp] = useState(false);
    return (
        <View>
            <View style={styles.container}>
                <LeftArrow navigation={navigation} />
                <Help />
            </View>

            <Text style={styles.text1}>{Constant.Communication_Preference}</Text>
            <ToogleText text='Voice Messages' toggle={isEnabled} setToggle={setIsEnabled} />
            <ToogleText text='SMS' toggle={SMS} setToggle={setSMS} />
            <ToogleText text='WhatsApp' toggle={WhatsApp} setToggle={setWhatsApp} />

        </View>
    )
}

export default Communication;

