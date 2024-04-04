export const validateOTP = (otp) => {
    const validationErrors = {};

    if (!otp || otp.trim() === '' || !/^\d+$/.test(otp) || otp.endsWith('7') || otp.length !== 6) {
        validationErrors.otp = [];
        if (!otp || otp.trim() === '') {
            validationErrors.otp.push('OTP is required');
        } else {
            if (otp.length !== 6) {
                validationErrors.otp.push("OTP must be exactly 6 characters long.");
            }
            if (!/^\d+$/.test(otp)) {
                validationErrors.otp.push("OTP must be numeric characters.");
            }
            if (otp.endsWith('7')) {
                validationErrors.otp.push("OTP must not end with 7.");
            }
        }
    }

    return validationErrors;
};