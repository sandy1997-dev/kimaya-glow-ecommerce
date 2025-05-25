
import { useEffect, useState } from 'react';

const FuturisticBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setParticles(particleArray);
  }, []);

  return (
    <>
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-kimaya-light via-kimaya-secondary to-kimaya-light opacity-90 -z-10" 
           style={{
             background: 'linear-gradient(135deg, #f8f5f2 0%, #ded1c1 25%, #a69b8d 50%, #ded1c1 75%, #f8f5f2 100%)',
             backgroundSize: '400% 400%',
             animation: 'hologram-shift 15s ease infinite'
           }} />
      
      {/* Cyberpunk Grid Overlay */}
      <div className="fixed inset-0 cyber-grid opacity-30 -z-10" />
      
      {/* Floating Particles */}
      <div className="particles fixed inset-0 -z-10">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle floating-element"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Scanning Lines */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-kimaya-primary to-transparent opacity-30 animate-pulse" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-kimaya-accent to-transparent opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-kimaya-primary to-transparent opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Data Stream Effects */}
      <div className="fixed right-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-kimaya-primary to-transparent opacity-20 data-stream" />
      <div className="fixed left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-kimaya-accent to-transparent opacity-20 data-stream" style={{ animationDelay: '1s' }} />
      
      {/* Matrix Rain Effect */}
      <div className="fixed inset-0 matrix-bg opacity-5 -z-10" />
    </>
  );
};

export default FuturisticBackground;
