import React from "react";
import ExploreScreen from "../views/ExploreScreen/ExploreScreen";

interface ExploreModelProp {
    navigation: any
}

const ExploreModel = (props: ExploreModelProp) => {
    const { navigation } = props;
    return (
        <ExploreScreen navigation={navigation} />
    )
}

export default ExploreModel;