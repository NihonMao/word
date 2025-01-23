import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/intro";

export default async function Home() {
  return (
    <main className="m-0 min-h-screen min-w-screen flex flex-col items-center">
      <div className="md:w-full max-w-3xl flex flex-col items-center w-full min-h-screen ">
        <div className="w-full">
          <Header />
        </div>
        <div className="grow w-full flex items-center">
          <Intro />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}
