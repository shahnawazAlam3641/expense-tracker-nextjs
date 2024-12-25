import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  if (!user) {
    return (
      <p className="text-[#212121] font-semibold text-center mt-5">
        To continue please Sign In
      </p>
    );
  }

  return (
    <div className="text-center text-[#212121] font-semibold mt-5 text-3xl">
      Hello, {user?.firstName}
    </div>
  );
}
