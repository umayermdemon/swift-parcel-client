import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className="w-full  min-h-screen flex bg-orange-50 flex-col items-center justify-center">
      <img src="https://i.ibb.co/724d2K5/404error.png" alt="" className='md:h-[450px] lg:h-[550px]'/>
      <p className='text-2xl font-rubik font-medium mt-2 text-gray-500'>Please go to <Link to='/' className='text-blue-900 underline'>Home</Link> </p>
    </div>
  );
};

export default ErrorPage;