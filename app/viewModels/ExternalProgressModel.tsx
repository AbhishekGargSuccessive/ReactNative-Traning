import React from "react";
import ExternalProgressScreen from "../views/ExternalPeogressScreen/ExternalProgress";

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