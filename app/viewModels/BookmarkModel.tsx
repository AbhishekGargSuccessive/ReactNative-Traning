import React from "react";
import BookmarkScreen from "../views/BookmarkScreen/BookmarkScreen";

interface BookModelProp {
    navigation: any
}

const BookmarkModel = (props: BookModelProp) => {
    const { navigation } = props;
    return (
        <BookmarkScreen navigation={navigation} />
    )
}

export default BookmarkModel;