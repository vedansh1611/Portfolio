import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Music, Waves } from "lucide-react";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.2);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Calming ambient music tracks suitable for a design portfolio
  const tracks = [
    {
      name: "Creative Flow",
      url: "https://www.bensound.com/bensound-music/bensound-relaxing.mp3", // Ambient track
      description: "Soft ambient tones for creative focus"
    },
    {
      name: "Design Zen", 
      url: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3", // Ambient track
      description: "Peaceful background for visual inspiration"
    },
    {
      name: "Mindful Design",
      url: "https://www.bensound.com/bensound-music/bensound-inspire.mp3", // Ambient track
      description: "Gentle sounds for thoughtful design work"
    }
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

  useEffect(() => {
    // Auto-switch to next track when current ends (if not looping)
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => {
        setCurrentTrack((prev) => (prev + 1) % tracks.length);
      };
      audio.addEventListener('ended', handleEnded);
      return () => audio.removeEventListener('ended', handleEnded);
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          console.log("Autoplay prevented by browser");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const newMuted = !isMuted;
      audioRef.current.volume = newMuted ? 0 : volume;
      setIsMuted(newMuted);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current && !isMuted) {
      audioRef.current.volume = newVolume;
    }
  };

  const switchTrack = (trackIndex: number) => {
    setCurrentTrack(trackIndex);
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(() => {
        console.log("Autoplay prevented by browser");
      });
    }
  };

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-40"
      style={{ 
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        transform: 'translateZ(0)',
        willChange: 'transform'
      }}
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0
      }}
      transition={{ duration: 0.6, delay: 2 }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <audio
        ref={audioRef}
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        src={tracks[currentTrack].url}
      />

      {/* Expanded Controls Panel */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            className="absolute bottom-20 right-0 bg-white/98 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white/30 min-w-[320px] max-w-[320px]"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            style={{
              transform: 'translateZ(0)',
              willChange: 'transform'
            }}
          >
            {/* Current Track Info */}
            <div className="mb-4 text-center">
              <motion.div
                className="flex items-center justify-center gap-2 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Waves className="w-4 h-4 text-purple-600" />
                <h3 className="text-sm font-semibold text-gray-800">
                  {tracks[currentTrack].name}
                </h3>
              </motion.div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {tracks[currentTrack].description}
              </p>
            </div>

            {/* Track Selection */}
            <div className="mb-4">
              <p className="text-xs text-gray-600 mb-2 font-medium">Ambient Tracks:</p>
              <div className="grid grid-cols-3 gap-1">
                {tracks.map((track, index) => (
                  <motion.button
                    key={index}
                    onClick={() => switchTrack(index)}
                    className={`p-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                      currentTrack === index
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {index + 1}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Volume Control */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <button onClick={toggleMute} className="text-gray-600 hover:text-purple-600">
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
                <div className="flex-1 relative">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #a855f7 0%, #a855f7 ${(isMuted ? 0 : volume) * 100}%, #e5e7eb ${(isMuted ? 0 : volume) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                </div>
                <span className="text-xs text-gray-600 w-8 text-right">
                  {Math.round((isMuted ? 0 : volume) * 100)}%
                </span>
              </div>
            </div>

            {/* Info Text */}
            <motion.p
              className="text-xs text-gray-500 text-center leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Carefully curated ambient sounds to enhance your creative experience while exploring this portfolio.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Play Button */}
      <motion.div className="relative">
        {/* Pulsing Background Ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30"
          animate={isPlaying ? {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3]
          } : {}}
          transition={{
            duration: 2,
            repeat: isPlaying ? Infinity : 0,
            ease: "easeInOut"
          }}
        />

        {/* Sound Wave Visualizer */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              className="absolute -inset-6 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-purple-400/20"
                  animate={{
                    scale: [1, 1.5 + i * 0.3],
                    opacity: [0.6, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          onClick={togglePlay}
          className="relative w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white shadow-2xl flex items-center justify-center cursor-pointer overflow-hidden"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            animate={isPlaying ? { rotate: 360 } : {}}
            transition={{
              duration: 10,
              repeat: isPlaying ? Infinity : 0,
              ease: "linear"
            }}
          />
          
          {/* Icon Container */}
          <motion.div
            className="relative z-10 flex items-center justify-center"
            animate={isPlaying ? {
              scale: [1, 1.1, 1]
            } : {}}
            transition={{
              duration: 1,
              repeat: isPlaying ? Infinity : 0,
              ease: "easeInOut"
            }}
          >
            {isPlaying ? (
              <Pause size={22} />
            ) : (
              <Play size={22} className="ml-1" />
            )}
          </motion.div>

          {/* Music Note Particles */}
          <AnimatePresence>
            {isPlaying && (
              <>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-white/60"
                    initial={{ 
                      scale: 0,
                      x: 0,
                      y: 0,
                      rotate: 0
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      x: [0, (i - 1) * 20],
                      y: [0, -30 - i * 5],
                      rotate: [0, (i - 1) * 45]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeOut"
                    }}
                  >
                    <Music size={8} />
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Status Indicator */}
        <motion.div
          className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white"
          animate={{
            backgroundColor: isPlaying ? "#10b981" : "#6b7280"
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-full h-full rounded-full"
            animate={isPlaying ? {
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            } : {}}
            transition={{
              duration: 1,
              repeat: isPlaying ? Infinity : 0,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}