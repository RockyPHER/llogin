import Image from "next/image";
import LoginContainer from "./ui/LoginContainer";

export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <LoginContainer />
    </main>
  );
}
