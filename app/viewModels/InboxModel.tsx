import React from "react";
import InboxScreen from "../views/ExploreScreen/InboxScreen";

interface ExploreModelProp {
    navigation: any
}

const InboxModel = (props: ExploreModelProp) => {
    const { navigation } = props;
    return (
        <InboxScreen navigation={navigation} />
    )
}

export default InboxModel;