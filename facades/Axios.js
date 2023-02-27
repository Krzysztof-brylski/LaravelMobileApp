import axios from "axios";

class Axios {
    baseUrl="http://192.168.1.10:8000/api/";

    authToken=null;
    headers={
        'Accept':'*/*',
        'Accept-Encoding':'gzip, deflate, br',
        'Connection':'keep-alive',
    };


    Auth(token){
        this.authToken=token;
        this.headers['Authorization']='Bearer '+this.authToken;
        return this;
    }
    isAuth(){
        return (this.authToken !== null);
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