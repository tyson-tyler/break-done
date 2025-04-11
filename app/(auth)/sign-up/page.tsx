import AuthForm from "@/components/AuthForm";

const Page = () => {
  return (
    <div className="w-full h-full flex">
      {/* Left Image - Hidden on small screens */}
      <div className="hidden md:flex w-1/2 h-full border-2 border-green-500 rounded-full bg-green-400">
        <img
          src="https://img.freepik.com/free-photo/headhunters-interviewing-female-job-candidate_1163-4674.jpg?t=st=1744362135~exp=1744365735~hmac=69b08f7965d5d7f6d5ffd1b790d473c9a679713ddc3179d2623b302767f97b2d&w=996"
          alt="Side visual"
          className="object-cover w-[600px] h-[600px] rounded-full"
        />
      </div>

      {/* AuthForm Section */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center">
        <AuthForm type="sign-up" />
      </div>
    </div>
  );
};

export default Page;
