import instance from '../api/axiosInstance';

export const verifyOTP = async (otp) => {
    try {
        const response = await instance.post(`api/otp-verify`, { otp });
        return response.data;
    } catch (error) {
        throw error;
    }
};