import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import { encrypt } from "../store/actions/enc";

let url = "https://fakestoreapi.com/";
//let url = 'http://185.255.93.202:12000/api'

/*if (__DEV__) {
  url = 'https://6233-78-164-63-126.ngrok-free.app/api'
} else {
  url = 'http://18.102.95.162:8000/api'
}*/

//export const SOCKET_URL = 'ws://18.102.95.162:8000/ws'

const instance = axios.create({
  baseURL: url,
});

{
  instance.interceptors.request.use(
    async (config) => {
      const token = await AsyncStorage.getItem("token");
      console.log("token", token);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
}

export default instance;
