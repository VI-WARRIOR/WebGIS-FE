const AuthButtons = () => {
  return (
    <div className="space-y-4">
      {/* Login Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Login
      </button>

      {/* Register Button */}
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
        Register
      </button>
    </div>
  );
};

export default AuthButtons;
