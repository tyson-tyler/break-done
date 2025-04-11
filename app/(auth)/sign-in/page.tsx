import AuthForm from "@/components/AuthForm";

const Page = () => {
  return (
    <div className="w-full h-full flex">
      {/* Left Image - Hidden on small screens */}
      <div className="hidden md:flex w-1/2 h-full border-2 border-purple-500 rounded-full bg-purple-400">
        <img
          src="https://img.freepik.com/free-photo/friendly-partners-handshaking-group-meeting-thanking-successful-teamwork_1163-4691.jpg?t=st=1744362315~exp=1744365915~hmac=14ef9911d469e70253577dd6d44658a7acce1ffd93210b79249bc21beb8cd25a&w=996"
          alt="Side visual"
          className="object-cover w-[600px] h-[600px] rounded-full"
        />
      </div>

      {/* AuthForm Section */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center">
        <AuthForm type="sign-in" />
      </div>
    </div>
  );
};

export default Page;
