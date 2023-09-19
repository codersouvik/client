import axios from 'axios';

const URL='';

export const Signup= async(data)=>{

    try{
      return await axios.post(`${URL}/signup`,data);
    }
    catch(error)
    {
        console.log("Error while calling sign up api",error);
    }
}

export const  AutheticateLogin= async(data)=>{

  try{
        return await axios.post(`${URL}/login`,data);
  }
  catch(error)
  {
    console.log("Error while calling up login ",error);
    return error.response;

  }
}