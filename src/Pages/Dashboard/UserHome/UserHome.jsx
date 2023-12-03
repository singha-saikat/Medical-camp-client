import useUserData from "../../../Hook/useUserData";

const UserHome = () => {
  const [userData, isLoading, isError] = useUserData();
  console.log(userData);

  // Check if data is loading
  if (isLoading) {
    return (
      <div className="mt-8 text-center">
        <p>Loading user data...</p>
      </div>
    );
  }

  // Check for error while fetching data
  if (isError) {
    return (
      <div className="mt-8 text-center">
        <p>Error loading user data.</p>
      </div>
    );
  }

  // Once data is loaded, you can use the userData object
  return (
    <div className="mt-8 bg-gray-100 flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome to the <span className="text-3xl text-green-500 font-semibold">{userData.name}</span> Dashboard
        </h1>
        <p className="text-gray-600">You are logged in as an Participant user.</p>
        {/* You can use userData here as needed */}
      </div>
    </div>
  );
};

export default UserHome;
