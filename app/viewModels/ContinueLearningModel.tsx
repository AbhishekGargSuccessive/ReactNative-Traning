import React from "react";
import ContinueLearning from '../views/ExternalScreen/ContinueLearning/ContinueLearning';

interface ContinueProps {
    navigation: any
}

const ContinueLearningModel = (props: ContinueProps) => {
    const { navigation } = props
    return (
        <ContinueLearning navigation={navigation} />
    )
}

export default ContinueLearningModel;