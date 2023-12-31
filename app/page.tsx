import Contact from "./components/Contact";
import Works from "./components/Works";

export default function Home() {
  return (
    <>
      <main>
        <div className="w-screen h-screen flex flex-col	justify-center">
          <h1 className="text-center text-7xl">CumTech</h1>
          <h2 className="text-center text-xl px-2">
            Certify Your Manhood by Technology
          </h2>
        </div>
        <Works />
        <Contact />
      </main>
    </>
  );
}
