import axios from "axios";

const instance = axios.create({
    baseURL:`https://us-central1-clone-304f6.cloudfunctions.net/api`
    // 'http://127.0.0.1:5001/clone-304f6/us-central1/api' //API URL (Cloud Function)
});
export default instance;