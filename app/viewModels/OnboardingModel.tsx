import React, { useRef } from "react";
import OnboardingScreen from "../views/Onboarding";

interface Modelprops {
    navigation: any
}

const OnboardingModel = (props: Modelprops) => {
    const { navigation } = props;
    const flatRef = useRef<any | null>(null)
    const scrollTo = (data: any) => {
        flatRef.current.scrollToIndex({ animated: true, index: data });
    }
    return (
        <OnboardingScreen navigation={navigation} flatRef={flatRef} scrollTo={scrollTo} />
    )
}

export default OnboardingModel;