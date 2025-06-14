import { Link, useNavigate } from 'react-router';
import ShowHidePassword from '../Components/ShowHidePassword';
import GoogleSignIn from '../Components/GoogleSignIn';
import Lottie from 'lottie-react';
import animationData from '../../Lottie/signup.json';
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';

const SignUp = () => {
  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const photo = formData.get('photo');
    const password = formData.get('password');

    if (!passwordRegex.test(password)) {
      setPasswordError('Password must include 1 uppercase, 1 lowercase, 1 special character & be 6+ characters.');
      return;
    }

    setPasswordError(null);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success('Account Created Successfully!');
            navigate('/');
          })
          .catch((err) => {
            console.log(err);
            setUser(user);
          });
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
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

          <form onSubmit={handleSignUp} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-primary  rounded-lg focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-primary rounded-lg focus:outline-none"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
              <input
                type="text"
                id="photo"
                name="photo"
                required
                placeholder="Link to Profile Photo"
                className="w-full px-4 py-2 border border-primary rounded-lg focus:outline-none "
              />
            </div>

            {/* Password */}
            <ShowHidePassword />

            {/* Password Error */}
            {passwordError && (
              <p className="text-red-600 text-sm text-center">{passwordError}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition"
            >
              Sign Up
            </button>

            {/* Divider */}
            <div className="text-center text-gray-600 font-semibold">OR</div>

            {/* Google Sign In */}
            <GoogleSignIn />

            {/* Redirect */}
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
