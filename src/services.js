import axios from "axios";

async function login(loginDatas) {
    try {
      const {data} = await axios.post('/user/login', {
        email: loginDatas.username,
        password: loginDatas.password
      })
      axios.defaults.headers.common['Authorization'] = "Bearer" + data.body.token; //set axios default token
      const userData = profile();
      return userData;
    } catch (error) {
      window.alert('Email or password incorrect');
      console.error(error);
      return 'error';
    }
}

async function profile() {
    try {
      const {data} = await axios.post('/user/profile');
      return data.body;
    } catch (error) {
        console.error(error);
        return 'error';
    }
}

export {login, profile};