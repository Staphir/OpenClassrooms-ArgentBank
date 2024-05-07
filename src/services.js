import { useSelector } from "react-redux";
import { store } from "./store";
import axios from "axios";

async function login(loginDatas) {
    try {
        await axios.post('/user/login', {
              email: loginDatas.username,
              password: loginDatas.password
          })
          .then(function (response) {
            setAxiosDefaultToken(response.data.body.token)
            profile(loginDatas);
            console.log('login: ' + response.data.body.token);
            return 'user connected';
          })
          .catch(function (error) {
            console.log(error);
            return 'error';
          })
          .finally(function () {
            // always executed
          }); 
    } catch (error) {
        console.error(error);
        return 'error';
    }
}

function setAxiosDefaultToken(AUTH_TOKEN){
    console.log('setToken: ' + AUTH_TOKEN)
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    console.log(axios.defaults)
}

async function profile(loginDatas) {
    try {
        await axios.post('/user/profile') //default authorization token added in setAxiosDefaultToken
          .then(function (response) {
            // store.dispatch(connectUser({user}))
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          }); 
    } catch (error) {
        console.error(error);
    }
}

export {login, profile};