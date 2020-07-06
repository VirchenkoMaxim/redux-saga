import Axios from 'axios';

export const statsAPI = {
    getUsers: (userId) => {
        return Axios.get(`http://localhost:4000/api/stats?userId=${userId}`);
    },
}