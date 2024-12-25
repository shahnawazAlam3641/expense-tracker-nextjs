import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = async () => {
  return (
    <div className="flex justify-between p-5 items-center shadow-[#515151] shadow-md">
      <h1 className="text-[#212121] font-bold">Expense Tracker</h1>
      <div>
        <SignedOut>
          <div className=" p-2 bg-purple-800 rounded-lg ">
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
