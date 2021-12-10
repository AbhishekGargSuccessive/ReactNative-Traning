import React from "react";
import ProgressScreen from '../views/ProgressScreen/ProgressScreen'

interface ProgressModelProp {
    navigation: any
}


const ProgressModel = (props: ProgressModelProp) => {
    const { navigation } = props;
    return (
        <ProgressScreen navigation={navigation} />
    )
}

export default ProgressModel;