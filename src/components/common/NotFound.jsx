import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glitchActive, setGlitchActive] = useState(false);
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    // Throttled mouse move handler (60fps max)
    let rafId = null;
    const handleMouseMove = (e) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        });
        rafId = null;
      });
    };

    // Click handler for ripple effect (limit to 3 ripples max)
    const handleClick = (e) => {
      setRipples((prev) => {
        const newRipple = {
          x: e.clientX,
          y: e.clientY,
          id: Date.now(),
        };
        const updated = [...prev, newRipple].slice(-3); // Keep max 3 ripples

        setTimeout(() => {
          setRipples((current) => current.filter((r) => r.id !== newRipple.id));
        }, 800);

        return updated;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("click", handleClick);

    // Glitch effect interval
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 5000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      clearInterval(glitchInterval);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex items-center justify-center">
      {/* Click ripples (max 3) */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-30"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-4 h-4 border-2 border-[#46A358] rounded-full animate-ripple" />
        </div>
      ))}

      {/* Gradient orbs (reduced from 3 to 2, using CSS animation only) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#46A358] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-3000" />

      {/* Main content */}
      <div
        className="relative z-10 text-center px-4"
        style={{
          transform: `translate(${mousePosition.x * 0.05}px, ${
            mousePosition.y * 0.05
          }px)`,
          transition: "transform 0.3s ease-out",
          willChange: "transform",
        }}
      >
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1
            className={`text-[200px] md:text-[280px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#46A358] via-purple-400 to-pink-400 select-none ${
              glitchActive ? "animate-glitch" : ""
            }`}
            style={{
              textShadow: glitchActive
                ? "2px 2px 0 #ff00de, -2px -2px 0 #00fff9"
                : "none",
            }}
          >
            404
          </h1>
        </div>

        {/* Plant illustration (simplified, no mouse follow) */}
        <div className="mb-8 relative inline-block">
          <div className="animate-bounce-slow">
            <svg
              className="w-32 h-32 mx-auto"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Pot */}
              <path d="M60 120 L70 160 L130 160 L140 120 Z" fill="#46A358" />
              <ellipse cx="100" cy="120" rx="40" ry="10" fill="#3a8547" />

              {/* Plant stems */}
              <path
                d="M100 120 Q95 100 90 80 Q85 60 85 40"
                stroke="#46A358"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M100 120 Q105 100 110 80 Q115 60 115 40"
                stroke="#46A358"
                strokeWidth="3"
                fill="none"
              />

              {/* Leaves */}
              <ellipse
                cx="75"
                cy="60"
                rx="15"
                ry="25"
                fill="#46A358"
                className="animate-leaf"
                transform="rotate(-30 75 60)"
              />
              <ellipse
                cx="95"
                cy="50"
                rx="15"
                ry="25"
                fill="#46A358"
                className="animate-leaf"
                style={{ animationDelay: "0.3s" }}
                transform="rotate(20 95 50)"
              />
              <ellipse
                cx="120"
                cy="55"
                rx="15"
                ry="25"
                fill="#46A358"
                className="animate-leaf"
                style={{ animationDelay: "0.6s" }}
                transform="rotate(30 120 55)"
              />

              {/* Wilted leaf */}
              <ellipse
                cx="105"
                cy="70"
                rx="12"
                ry="20"
                fill="#46A358"
                opacity="0.5"
                transform="rotate(60 105 70)"
              />
            </svg>
          </div>

          {/* Reduced floating emojis */}
          <div className="absolute -top-8 -left-8 text-4xl animate-float-slow opacity-50">
            🤔
          </div>
          <div
            className="absolute -top-4 -right-8 text-3xl animate-float-slow opacity-50"
            style={{ animationDelay: "1s" }}
          >
            ❓
          </div>
        </div>

        {/* Text content */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
          Oops! Lost in the Garden
        </h2>
        <p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Looks like this plant wandered off the path. Don't worry, we'll help
          you find your way back!
        </p>

        {/* Action buttons */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            to="/"
            className="group relative px-10 py-5 bg-[#46A358] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#46A358]/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3a8547] to-[#46A358] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>

          <Link
            to="/shop"
            className="group relative px-10 py-5 bg-white text-[#46A358] font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              Visit Shop
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>
        </div>
      </div>

      {/* Optimized CSS animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }
        @keyframes leaf {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-2px, 2px); }
          66% { transform: translate(2px, -2px); }
        }
        @keyframes ripple {
          0% { width: 4px; height: 4px; opacity: 1; }
          100% { width: 60px; height: 60px; opacity: 0; }
        }
        
        .animate-blob { 
          animation: blob 8s ease-in-out infinite;
          will-change: transform;
        }
        .animation-delay-3000 { animation-delay: 3s; }
        .animate-bounce-slow { 
          animation: bounce-slow 3s ease-in-out infinite;
          will-change: transform;
        }
        .animate-float-slow { 
          animation: float-slow 4s ease-in-out infinite;
          will-change: transform;
        }
        .animate-leaf { 
          animation: leaf 3s ease-in-out infinite;
          will-change: opacity;
        }
        .animate-fade-in { 
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-glitch { 
          animation: glitch 0.15s ease-in-out;
        }
        .animate-ripple { 
          animation: ripple 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
