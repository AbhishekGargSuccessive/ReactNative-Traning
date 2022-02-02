import React from "react";
import HomeScreen from "../views/Home";

interface HomeModelProps {
    navigation: any
}

const HomeModel = (props: HomeModelProps) => {
    const { navigation } = props;
    return (
        <HomeScreen navigation={navigation} />
    )
}

export default HomeModel;