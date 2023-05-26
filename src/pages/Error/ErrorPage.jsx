import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ErrorPage = () => {
  useTitle('Error | Superfinity');
  return (
    <div className="w-full h-screen error-page text-white flex justify-center items-center">
      <div className="text-center space-y-6">
        <h3 className="lg:text-5xl text-3xl font-bold">
          Oops! Lost in the <span className="text-[#F0141E]">Multiverse</span>
        </h3>
        <p className="font-semibold">Seems like the superhero you&apos;re looking for is on a mission elsewhere. But don&apos;t worry, we&apos;ll guide you back to the Superfinity universe!</p>
        <Link to="/"><button className="mt-3 bg-[#F0141E] lg:px-7 px-3 lg:py-3 py-2 rounded-md font-semibold">Go Back</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;
