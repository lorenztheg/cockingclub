import API from "@/client/services/API";

export default {
    register(email, password) {
        return API.post('register', { email, password }).then(response => {
            return response.data;
        }).catch(error => {
            console.error("Registration Error: ", error.response ? error.response.data : error.message);
            throw error;
        });
    },
    login(email, password) {
        return API.post('login', { email, password }).then(response => {
            const token = response.data.token;
            localStorage.setItem('token', token);
            return response;
        }).catch(error => {
            console.error("Login Error: ", error.response ? error.response.data : error.message);
            throw error;
        });
    },
    logout() {
        return API.post('logout').then(response => {
            localStorage.removeItem('token');
            return response;
        }).catch(error => {
            console.error("Logout Error: ", error.response ? error.response.data : error.message);
            throw error;
        });
    },
}

