import React, { useState } from "react";
import { ScrollView, View, Image, Text, ImageBackground, Switch } from "react-native";
import { Help, LeftArrow } from "../../../components/Logo";
import ToogleText from "../../../components/ToggleText/ToggleText";
import styles from '../CommunicationPreferences/styles'

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

            <View>
                <Text style={styles.text1}>Communication Preferences</Text>
            </View>
            <View>
                <ToogleText text='Voice Messages' toggle={isEnabled} setToggle={setIsEnabled} />
            </View>
            <View>
                <ToogleText text='SMS' toggle={SMS} setToggle={setSMS} />
            </View>

            <View>
                <ToogleText text='WhatsApp' toggle={WhatsApp} setToggle={setWhatsApp} />
            </View>
        </View>
    )
}

export default Communication;

