import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { verifyOTP } from '../services/otpService';
import { validateOTP } from '../validations/otpValidation';

const Otp = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(Array(6).fill(''));
    const inputRefs = useRef([]);
    const [errors, setErrors] = useState({});
    const [invalidInputs, setInvalidInputs] = useState(Array(6).fill(false));

    const handleInputChange = (index, value) => {

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value !== '' && index < 6 - 1) {
            inputRefs.current[index + 1].focus();
        }

        const newInvalidInputs = [...invalidInputs];
        newInvalidInputs[index] = (!/^\d+$/.test(value)) ? true : false;
        setInvalidInputs(newInvalidInputs);
    };

    const handleInputKeyDown = (index, e) => {
        if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
            inputRefs.current[index - 1].focus();
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const otpString = otp.join('');
        const validationErrors = validateOTP(otpString);
        if (Object.keys(validationErrors).length === 0) {
            try {
                await verifyOTP(otpString);
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
                {otp.map((value, index) => (
                    <input
                        key={index}
                        type="text"
                        value={value}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        onKeyDown={(e) => handleInputKeyDown(index, e)}
                        ref={(inputRef) => (inputRefs.current[index] = inputRef)}
                        maxLength={1}
                        className={`m-2 text-center form-control rounded ${invalidInputs[index] ? 'invalid' : ''}`}
                    />
                ))}


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
