function validateData(data) {
    const { otp } = data;
    const errors = {};

    if (!otp || otp.trim() === '' || otp.length !== 6 || !isNumeric(otp) || endsWithSeven(otp)) {
        if (!errors.otp) {
            errors.otp = []; // Initialize errors.otp as an array if it doesn't exist
        }
        if (!otp || otp.trim() === '') {
            errors.otp.push("OTP is required.");

        } else {
            if (otp.length !== 6) {
                errors.otp.push("OTP must be exactly 6 characters long.");
            }
            if (!isNumeric(otp)) {
                errors.otp.push("OTP must be numeric characters.");
            }
            if (endsWithSeven(otp)) {
                errors.otp.push("OTP must not end with 7.");
            }

        }
    }


    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}

// Function to check if a string consists only of numeric characters
function isNumeric(value) {
    return /^\d+$/.test(value);
}

// Function to check if a string ends with '7'
function endsWithSeven(value) {
    return value.endsWith('7');
}


export { validateData };
