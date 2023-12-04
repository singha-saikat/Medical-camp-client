import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://medical-camp-server-xi.vercel.app'
})

const useAxiosPublicApi = () => {
    return axiosPublic;
};

export default useAxiosPublicApi;