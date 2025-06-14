import { Link } from 'react-router';
import ShowHidePassword from '../Components/ShowHidePassword';
import GoogleSignIn from '../Components/GoogleSignIn'; // Assuming you have this
import Lottie from 'lottie-react';
import animationData from '../../Lottie/signup.json'; // Put your Lottie file here
import { useState } from 'react';

const SignUp = () => {
  const [passwordError, setPasswordError] = useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign up logic here
  };

  return (
    <section className="min-h-screen bg-[#FFF8F5] flex items-center justify-center px-4 my-20">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">

        {/* Lottie Animation Section */}
        <div className="flex-1 max-w-md">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{ width: '100%', height: 350 }}
          />
        </div>

        {/* Form Section */}
        <div className="flex-1 max-w-md bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Sign Up Now
          </h2>

          <form onSubmit={handleSignUp} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-primary rounded-lg focus:outline-none "
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-primary rounded-lg focus:outline-none "
              />
            </div>

            {/* Photo URL */}
            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Photo URL
              </label>
              <input
                type="text"
                id="photo"
                name="photo"
                required
                placeholder="Link to Profile Photo"
                className="w-full px-4 py-3 border border-primary rounded-lg focus:outline-none "
              />
            </div>

            {/* Password with Show/Hide */}
            <ShowHidePassword />

            {/* Password Error */}
            {passwordError && (
              <p className="text-red-600 text-sm mt-1 text-center">{passwordError}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90 transition"
            >
              Sign Up
            </button>

            {/* OR Divider */}
            <div className="text-center text-primary font-semibold">OR</div>

            {/* Google Sign In */}
            <GoogleSignIn />

            {/* Redirect to Login */}
            <p className="mt-6 text-center text-gray-600 text-sm">
              Already have an account?{' '}
              <Link
                to="/auth/login"
                className="text-primary font-bold hover:underline"
              >
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
