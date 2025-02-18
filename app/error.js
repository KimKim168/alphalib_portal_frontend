"use client";

const ErrorPage = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Something Went Wrong
      </h1>
      <p className="text-gray-600 mb-6">
        An error occurred while loading the page. Please try refreshing.
      </p>
      <button
        onClick={handleRefresh}
        className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
      >
        Refresh Page
      </button>
    </div>
  );
};

export default ErrorPage;
