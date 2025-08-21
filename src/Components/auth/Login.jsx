import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import { useAuth } from './useAuth.jsx';



const Login = () => {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setErrMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsg('');
    setLoading(true);
    try {
  await login(formData);
navigate('/dashboard');
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Something went wrong';
      setErrMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  const { login } = useAuth();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setErrMsg("");
  //   setLoading(true);

  //   try {
  //     // Your controller accepts either email or username + password
  //     // Here we send email + password; backend will query by $or: [{username}, {email}]
  //     const res = await axios.post(
  //       "/auth/user/login",
  //       formData,
  //       { withCredentials: true } // important for httpOnly cookies
  //     );

  //     if (res.status !== 200) {
  //       throw new Error(res.data?.message || "Login failed");
  //     }
  //     navigate("/dashboard");
  //   } catch (err) {
  //     const msg =
  //       err.response?.data?.message ||
  //       err.message ||
  //       "Something went wrong";
  //     setErrMsg(msg);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-gray-900 shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-8">
          <div className="mt-6 flex flex-col items-center">
            <h1 className="text-2xl text-white font-bold">Login</h1>
          </div>
          <div className="mt-6 flex flex-col items-center">
            {error && (
              <p className="text-red-500 text-sm text-center mt-3">{error}</p>
            )}
            <div className="w-full flex-1 mt-4">
              <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </div>
              </form>
              <div>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Don&apos;t have an account?{" "}
                  <Link to="/signup" className="text-indigo-400 hover:text-indigo-600">
                    Sign up
                  </Link>
                </p>
              </div>
              <p className="mt-6 text-xs text-gray-600 text-center">
                I agree by continuing our{" "}
                <a href="#" className="border-b border-gray-500 border-dotted">
                  Terms of Service
                </a>{" "}
                and its{" "}
                <a href="#" className="border-b border-gray-500 border-dotted">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-transparent text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-transparent bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg')",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
