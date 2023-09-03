'use client';
import { Header } from '../components/header';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import particlesConfig from '../config/particles-config';

export default function Work() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    [],
  );
  return (
    <>
      <main>
        <div className="w-screen h-screen flex justify-center items-center text-5xl">
            Work
        </div>
        <div>
            Under Construction
        </div>
      </main>
    </>
  );
}
