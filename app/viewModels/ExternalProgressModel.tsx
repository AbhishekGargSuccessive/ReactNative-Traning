import React from "react";
import ExternalProgressScreen from "../views/ExternalScreen/ExternalProgress";

interface ExternalProps {
    navigation: any
}

const ExternalProgressModel = (props: ExternalProps) => {
    const { navigation } = props
    return (
        <ExternalProgressScreen navigation={navigation} />
    )
}

export default ExternalProgressModel;