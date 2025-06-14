import { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";

const ShowHidePassword = () => {

        const [showPassword, setShowPassword] = useState(false);


    return (
         <div className="relative">
            <label className="block text-[--color-accent] mb-1">Password</label>
            <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                placeholder="Enter your password"
                required
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-[--color-primary] focus:outline-none"
            >
                {showPassword ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
            </button>
        </div>
    );
};

export default ShowHidePassword;