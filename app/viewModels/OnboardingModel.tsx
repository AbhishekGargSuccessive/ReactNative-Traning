import React, { useRef } from "react";
import OnboardingScreen from "../views/Onboarding";

interface Modelprops {
    naviagtion: any
}

const OnboardingModel = (props: Modelprops) => {
    const { naviagtion } = props;
    const flatRef = useRef<any | null>(null)
    const scrollTo = (data: any) => {
        flatRef.current.scrollToIndex({ animated: true, index: data });
    }
    return (
        <OnboardingScreen navigation={naviagtion} flatRef={flatRef} scrollTo={scrollTo} />
    )
}

export default OnboardingModel;