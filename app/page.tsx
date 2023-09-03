import { Header } from './components/header';
import ParticlesBackground from './components/ParticlesBackground';

export default function Home() {
  return (
    <main>
      <ParticlesBackground />
      <Header />
      <div className="w-screen h-screen flex flex-col	justify-center">
        <h1 className="text-center text-7xl">CumTech</h1>
        <h2 className="text-center text-xl">Change the World by Technology</h2>
      </div>
    </main>
  );
}
