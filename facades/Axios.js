import axios from "axios";

class Axios {
    baseUrl="http://192.168.1.10:8000/api/";

    authToken=null;
    User=null;
    headers={
        'Accept':'*/*',
        'Accept-Encoding':'gzip, deflate, br',
        'Connection':'keep-alive',
    };



    Auth(token, user){
        this.authToken=token;
        this.headers['Authorization']='Bearer '+this.authToken;
        this.User = user;
        return this;
    }
    isAuth(){
        return (this.authToken !== null) && (  this.User !== null);
    }
    build(){
        return axios.create({
            baseURL: this.baseUrl,
            timeout: 1500,
            headers:this.headers
        });
    }
}
const AxiosFacade = new Axios();
export default AxiosFacade;