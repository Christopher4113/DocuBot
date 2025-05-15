import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="fixed inset-0 h-full w-full flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <h1 className="text-5xl font-extrabold mb-6 text-center">
        Welcome to <span className="text-blue-400">DocuBot</span>
      </h1>
      <p className="text-lg text-gray-300 mb-8 text-center max-w-md">
        Your intelligent assistant for document understanding, querying, and summarization. Start using AI to work smarter.
      </p>
      <Link to="/main">
        <Button className="bg-blue-400 hover:bg-blue-500 text-black font-medium px-6 py-2">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default Landing;