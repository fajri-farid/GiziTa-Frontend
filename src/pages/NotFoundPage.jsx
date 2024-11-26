import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <p className="text-6xl font-semibold">404: Page not found!</p>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default NotFoundPage;
