import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { IApiResponse } from "../controllers/apiResponses/IAPIResponse";
import { TestRoot } from "../controllers/apiResponses/testDataResponse";
import { apiTesting } from "../controllers/testController";

function TestModel(props: object) {
    const fetchTestData = async () => {
        let getTestData: IApiResponse<TestRoot> = await apiTesting('https://api.agify.io?name=bella');
        console.log('API Call:==>', getTestData);
    }
    useEffect(() => {
        fetchTestData();
    }, [])
    return (
        <View>
            <Text>Testing</Text>
        </View>
    );
}

export default TestModel;