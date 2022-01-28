import React from "react";
import styles from "./styles";
import { View, FlatList } from "react-native";
import { constants } from '../../constants/index'
import RenderItem from "./renderItem";

interface OnboardingProps {
    navigation: any
    flatRef: React.MutableRefObject<any>
    scrollTo: (data: any) => void
}

const OnboardingScreen = (props: OnboardingProps) => {

    return (

        <View style={styles.container}>

            <FlatList
                horizontal
                decelerationRate={0}
                showsHorizontalScrollIndicator={false}
                data={constants.onboarding_screens}
                extraData={constants.onboarding_screens}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => <RenderItem data={item}
                    maxIndex={constants.onboarding_screens.length - 1}
                    index={index} scrollTo={(item: number) => props.scrollTo(item)} />}
                ref={props.flatRef}

            />

        </View>

    )
}
export default OnboardingScreen;