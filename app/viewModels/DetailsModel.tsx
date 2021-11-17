import React from "react";
import DetailsScreen from "../views/DetailsScreen/DetailsScreen";

interface DetailsModelProp {
    navigation: any
}


const DetailsModel = (props: DetailsModelProp) => {
    const { navigation } = props;
    return (
        <DetailsScreen navigation={navigation} />
    )
}

export default DetailsModel;