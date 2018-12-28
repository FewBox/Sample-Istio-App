export interface ApiResponse{
    message: string
    isSuccessful: boolean
}

export interface AjaxSetting {
    path?: string;
    queryParams?: {}
    body?: any
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    headers?: {}
    timeout?: number
    crossDomain?: boolean
    withCredentials?: boolean
    responseType?: string
    hiddenLoading?: boolean
    requestAction?: string

}