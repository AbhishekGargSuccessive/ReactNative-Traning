import React from "react";
import HomeScreen from "../views/HomeScreen/HomeScreen";

interface HomeModelProp {
    navigation: any
}

const HomeModel = (props: HomeModelProp) => {
    const {navigation} = props;
    return (
        <HomeScreen navigation={navigation} />
    )
}

export default HomeModel;