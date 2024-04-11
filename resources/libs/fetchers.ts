import { apiClient } from "./apiClient.js";

type PostParams = {
    [key: string]: string|number|boolean|null
}

export const getFetcher = (url: string) => apiClient.get(url).then(res => res.data);
export const postFetcher = (url: string, params: PostParams) => apiClient.post(url, params).then(res => res.data);