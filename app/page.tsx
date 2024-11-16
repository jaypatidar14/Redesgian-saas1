import About from "@/components/About";
import Navbar from "@/components/Navbar";
// import Main from "@/components/Main";
export default function Home() {
  return (
    <main className="overflow-hidden bg-black">
      <Navbar />
       {/* <Main/> */}
      <About />
    </main>
  );
}
