import { validateData } from "../validations/otpValidation.js";

export const verifyOtp = async (req, res) => {
    const { errors, isValid } = validateData(req.body);
    // Check if  data is valid
    if (!isValid) {
        // If validation fails, send error response with validation errors
        return res.status(422).json({ errors });
    }
    try {
        // Send success response
        return res.status(200).json({ message: 'OTP verified successfully' });
    } catch (error) {
        // If an error occurs during request, send error response
        return res.status(500).json({ error: 'Internal server error' });
    }
};