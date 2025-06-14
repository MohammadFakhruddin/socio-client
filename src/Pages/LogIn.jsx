import { Link } from "react-router";
import ShowHidePassword from "../Components/ShowHidePassword";
import GoogleSignIn from "../Components/GoogleSignIn"; // Assuming you have this component
import Lottie from "lottie-react";
import animationData from "../../Lottie/login.json"; // Replace with your Lottie animation path

const LogIn = () => {
  // Dummy placeholders for error and handleLogIn to avoid errors in design-only version
  const error = null;
  const handleLogIn = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <section className="min-h-screen bg-[#FFF8F5] flex items-center justify-center px-4">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12">

        {/* Lottie Animation Section */}
        <div className="flex-1 max-w-md">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{ width: "100%", height: 350 }}
          />
        </div>

        {/* Form Section */}
        <div className="flex-1 max-w-md bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Login Now
          </h2>

          <form onSubmit={handleLogIn} className="space-y-6">

            {/* Email Input */}
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
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-primary rounded-lg focus:outline-none "
              />
            </div>

            {/* Password Input */}
            <ShowHidePassword />

            {/* Error Message */}
            {error && (
              <p className="text-red-600 text-sm mt-1 text-center">{error}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90 transition"
            >
              Log In
            </button>

            {/* OR separator */}
            <div className="text-center text-primary font-semibold">OR</div>

            {/* Google Sign In Button */}
            <GoogleSignIn />

            {/* Signup Link */}
            <p className="mt-6 text-center text-gray-600 text-sm">
              Don&apos;t have an account?{' '}
              <Link
                to="/auth/signup"
                className="text-primary font-bold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
