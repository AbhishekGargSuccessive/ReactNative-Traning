import React from "react";
import { FlatList, Text, View } from "react-native";
import { Help, LeftArrow } from "../../components/Logo/Logo";
import RenderItem from './renderItem';
import { Constant, ExternalProgressData } from "../../config";
import styles from './style';

interface ExternalProps {
    navigation: any
}

const ExternalProgressScreen = (props: ExternalProps) => {
    const { navigation } = props;
    return (
        <FlatList
            ListHeaderComponent={
                <View>
                    <View style={styles.main}>
                        <LeftArrow navigation={navigation} />
                        <Help />
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.text1}>{Constant.HEALTH_COACH_TRAINING_PROGRAM}</Text>
                        <Text style={styles.text2}>{Constant.Graduation_Requirements}</Text>

                        <View style={styles.textmargin}>
                            <Text style={styles.text3}> {Constant.Test_Results} </Text>
                            <Text style={styles.text4}> {Constant.Required_to_graduate} </Text>
                        </View>
                        <View style={styles.textmargin}>
                            <Text style={styles.text3}> {Constant.Course} </Text>
                            <Text style={styles.text4}> {Constant.HEALTH_COACH_TRAINING_PROGRAM} </Text>
                        </View>

                        <View style={styles.textmargin}>
                            <Text style={styles.text3}> {Constant.Student} </Text>
                            <Text style={styles.text4}> {Constant.JenAbobbe} </Text>
                        </View>
                    </View>
                </View>

            }
            data={ExternalProgressData}
            extraData={ExternalProgressData}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <RenderItem item={item} />}
        />

    );
};
export default ExternalProgressScreen;