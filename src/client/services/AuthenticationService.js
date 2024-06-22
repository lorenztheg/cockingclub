import API from "@/client/services/API";

export default {
    register (email, password) {
        return API().post('register', {email, password});
    },
    login (email, password) {
        return API().post('login', {email, password});
    },
}

