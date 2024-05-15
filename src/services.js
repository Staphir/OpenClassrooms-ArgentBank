import axios from "axios";

async function login(loginDatas) {
  try {
    const {data} = await axios.post('/user/login', {
      email: loginDatas.username,
      password: loginDatas.password
    })
    // dispatch(setToken(data.body.token));
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

async function editName(newName) {
  try {
    await axios.put('/user/profile',{
      firstName: newName.firstname,
      lastName: newName.lastname
    })
    .then(function (response) {
      console.log(`Name Changed to ${newName.firstname} ${newName.lastname}`);
    })
    .catch(function (error) {
      console.log('error');
    })
  } catch (error) {
    console.error(error);
    return 'error';
  }
}

export {login, profile, editName};