import { useEffect } from "react";
import axios from "axios";
import Config from 'react-native-config'
import Constants from 'expo-constants';


import {AxiosError, AxiosResponse} from "axios";

const useInterceptor = () => {

  const handleRequestSuccess = (request: any) => {
    //const { authToken } = state.session;
    // request.headers["token"] = token; // Example 1
    //request.headers.authorization = `Bearer ${authToken}`; // Example 2
    request.headers["Content-Type"] = "application/json";
    request.headers["accept"] = "application/json";
    request.headers["time-zone"] = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return request;
  };
  const handleRequestError = (error: AxiosError) => {
    console.log(`REQUEST ERROR! => ${error}`);
  };

  const handleResponseSuccess = (response: AxiosResponse) => {
    return response;
  };


  const handleResponseError = (error: AxiosError) => {
    return;
  };

  useEffect(() => {
    console.log(Config.API_URL, process.env.API_URL, process)
    axios.defaults.baseURL = `${process.env.API_URL}`;
    axios.defaults.params = {};
    axios.interceptors.request.use(handleRequestSuccess, handleRequestError);
    axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
  }, []);
};

export default useInterceptor;
