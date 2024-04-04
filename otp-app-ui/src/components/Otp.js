import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import { verifyOTP } from '../services/otpService';
import { validateOTP } from '../validations/otpValidation';

const Otp = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateOTP(otp);
        if (Object.keys(validationErrors).length === 0) {
            try {
                await verifyOTP(otp);
                setOtp('');
                navigate('/success');
            } catch (error) {
                if (error.response && error.response.status === 422 && error.response.data && error.response.data.errors) {
                    setErrors(error.response.data.errors);
                } else {
                    console.error('An error occurred:', error.message);
                }
            }
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div>
            <h6 className='blue'>Verification code:</h6>
            <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span> </span>}
                    inputType="text"
                    renderInput={(props) => <input {...props} className='m-2 text-center form-control rounded' />}
                />

            </div>
            {Array.isArray(errors.otp) && errors.otp.map((error, index) => (
                <React.Fragment key={index}>
                    <span className='text-danger' key={index}>{error}</span>
                    <br />
                </React.Fragment>
            ))
            }

            <div className="mt-4"> <button className="btn btn-danger px-4 validate" onClick={handleSubmit}>Submit</button> </div>
        </div >
    )
}

export default Otp;
