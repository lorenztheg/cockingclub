import API from "@/client/services/API";

export default {
    authenticate(credentials) {
        return API().post('register', credentials)
    }
}

