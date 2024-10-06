import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-lg mt-2">Sorry, the page you're looking for does not exist.</p>
      <button
        onClick={() => navigate("/")}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
