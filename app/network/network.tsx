const axios = require('react-native-axios');
import { IApiResponse } from '../controllers/apiResponses/IAPIResponse';

const instance = axios.create({
    // baseURL: APIConstants.BaseURL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
    },
});

interface NetworkModel {

}

export function sendGetRequest<T>(url: string) {
    return instance
        .get(url)
        .then((response: any) => {
            return handleResponse(response.data);
        })
        .catch((err: any) => {
            if (err.response === undefined) {
                throw new Error('something went wrong');
            }
            return handleError(err.response.data);
        })
        .finally(() => {
        });
}

export function sendPostRequest<T>(url: any, body: any): any {
    return instance
        .post(url, body)
        .then((response: any) => {
            return handleResponse(response.data);
        })
        .catch((err: any) => {
            console.log(err);
            if (err.response === undefined) {
                throw new Error('something went wrong');
            }
            return handleError(err.response.data);
        })
        .finally(() => {
        });
}

export function sendPutRequest<T>(url: any, body: any): any {
    return instance
        .put(url, body)
        .then((response: any) => handleResponse(response.data))
        .catch((err: any) => {
            if (err.response === undefined) {
                throw new Error('something went wrong');
            }
            return handleError(err.response.data);
        })
        .finally(() => {
        });
}

export function sendPatchRequest<T>(url: any): any {
    return instance
        .patch(url)
        .then((response: any) => handleResponse(response.data))
        .catch((err: any) => {
            if (err.response === undefined) {
                throw new Error('something went wrong');
            }
            return handleError(err.response.data);
        })
        .finally(() => {
        });
}

export function deleteRequest<T>(url: any, body: any): any {
    console.log(url, body);
    return instance
        .delete(url, {
            data: body,
        })
        .then((response: any) => handleResponse(response.data))
        .catch((err: any) => {
            if (err.response === undefined) {
                throw new Error('something went wrong');
            }
            console.log(err.response.data);
            return handleError(err.response.data);
        })
        .finally(() => {
        });
}

function handleResponse<T>(data: any) {
    let res: IApiResponse<T> = {
        isSuccess: true,
        errors: undefined,
        data: data as T,
    };
    return res;
}

function handleError<T>(data: any) {
    let res: IApiResponse<T> = {
        isSuccess: false,
        errors: data,
        data: undefined,
    };
    return res;
}