import React from 'react'

const OtpInput = ({ otp, onChange, onKeyDown, inputRefs, invalidInputs }) => {
    return (
        <>
            {otp.map((value, index) => (
                <input
                    key={index}
                    type="text"
                    value={value}
                    onChange={(e) => onChange(index, e.target.value)}
                    onKeyDown={(e) => onKeyDown(index, e)}
                    ref={(inputRef) => (inputRefs.current[index] = inputRef)}
                    maxLength={1}
                    className={`m-2 text-center form-control rounded ${invalidInputs[index] ? 'invalid' : ''}`}
                />
            ))}
        </>
    );
};

export default OtpInput
