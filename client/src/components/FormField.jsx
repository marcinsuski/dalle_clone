import React from "react";
import { Form } from "react-router-dom";


const FormField = ({
    labelName,
    type,
    name,
    placeholder,
    value,
    handleChange,
    isSurpriseMe,
    handleSurpriseMe,
}) => {
    return (
        <div>
            <div className="flex items-center gap-2 mb-2">
                <label
                    htmlFor={name}
                    className="block text-sm dark:text-white font-medium text-gray-900"
                >
                    {labelName}
                </label>
                {isSurpriseMe && (
                    <button
                        type="button"
                        onClick={handleSurpriseMe}
                        className="font-semibold text-xs dark:text-white dark:bg-[#6469ff] bg-[#ECECF1] py-1 px-2 rounded [5x] text-black"
                    >
                        Surprise me
                    </button>
                )}
            </div>
                  <input 
                  type={type}
                  id={name}
                  name={name}
                  placeholder={placeholder}
                  value={value}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border border-gray-300 dark:text-white dark:border-gray-500 text-gray-900 dark:bg-[#4C4A66] text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#4649ff] outline-none block w-full p-3"
                  />
                
        </div>
    );
};

export default FormField;
