export interface IApiResponse<T> extends ApiResponse {
    data: any;
}

interface ApiResponse {
    isSuccess: boolean;
    errors: string | undefined;
}
