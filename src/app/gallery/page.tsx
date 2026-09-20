"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Home, Aperture } from "lucide-react";
import { useRouter } from "next/navigation";
import InfiniteGallery from "@/components/ui/3d-gallery-photography";

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85", alt: "Architecture" },
  { src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=85", alt: "Interior" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85", alt: "Studio" },
  { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=85", alt: "Nature" },
  { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=85", alt: "Landscape" },
  { src: "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=800&q=85", alt: "Forest" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=85", alt: "Woods" },
  { src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=85", alt: "Valley" },
  { src: "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?w=800&q=85", alt: "Desert" },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=85", alt: "Mountains" },
  { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=85", alt: "Space" },
  { src: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=85", alt: "Wildlife" },
  { src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=85", alt: "Bloom" },
  { src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=85", alt: "Sunrise" },
  { src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=85", alt: "Snow" },
  { src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=85", alt: "Cityscape" },
  { src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=85", alt: "Town" },
  { src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=85", alt: "Park" },
  { src: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&q=85", alt: "Abstract" },
  { src: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=800&q=85", alt: "Dark" },
];

const BTN = "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-[0.14em] uppercase transition-all duration-200 hover:scale-[1.04] active:scale-[0.97]";
const BTN_S: React.CSSProperties = { background: "oklch(10% 0.018 270 / 88%)", border: "1px solid oklch(24% 0.028 270)", color: "oklch(86% 0.005 270)", backdropFilter: "blur(10px)" };
const on = (e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.borderColor = "oklch(65% 0.28 290 / 50%)"; e.currentTarget.style.boxShadow = "0 0 22px oklch(65% 0.28 290 / 32%)"; };
const off = (e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.borderColor = "oklch(24% 0.028 270)"; e.currentTarget.style.boxShadow = "none"; };

export default function GalleryPage() {
  const router = useRouter();
  const [entered, setEntered] = useState(false);
  const [cursor, setCursor] = useState({ x: -999, y: -999 });
  const mainRef = useRef<HTMLDivElement>(null);

  const handleBack = useCallback(() => {
    if (window.history.length > 1) router.back(); else router.push("/");
  }, [router]);

  useEffect(() => {
    if (!entered) return;
    const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [entered]);

  return (
    <main ref={mainRef} className="relative min-h-screen h-full w-full overflow-hidden" style={{ background: "#000" }}>

      {/* Entrance screen with lamp */}
      <AnimatePresence>
        {!entered && (
          <motion.div
            key="entrance"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            style={{ background: "oklch(5% 0.01 270)" }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Lamp beams */}
            <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none overflow-hidden" style={{ height: "22rem" }}>
              <div className="relative" style={{ width: "36rem" }}>
                <motion.div
                  initial={{ opacity: 0, scaleX: 0.1 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.25, duration: 1.1, ease: "easeOut" }}
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "conic-gradient(from 70deg at 50% 0%, oklch(65% 0.28 290 / 65%), transparent 42%)", transformOrigin: "top center" }}
                />
                <motion.div
                  initial={{ opacity: 0, scaleX: 0.1 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.25, duration: 1.1, ease: "easeOut" }}
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "conic-gradient(from 290deg at 50% 0%, oklch(65% 0.28 330 / 50%), transparent 42%)", transformOrigin: "top center" }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.9 }}
                  style={{ position: "absolute", top: "-1.5rem", left: "50%", transform: "translateX(-50%)", width: "13rem", height: "7rem", borderRadius: "9999px", filter: "blur(38px)", background: "oklch(65% 0.28 290 / 85%)" }}
                />
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "20rem", opacity: 1 }}
                  transition={{ delay: 0.55, duration: 1, ease: "easeOut" }}
                  style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", height: "1.5px", background: "linear-gradient(90deg, transparent, oklch(65% 0.28 290), oklch(65% 0.28 330), transparent)" }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6 mt-12">
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex items-center gap-2 text-[10px] tracking-[0.35em] uppercase"
                style={{ color: "oklch(65% 0.28 290)" }}
              >
                <Aperture size={11} className="animate-spin" style={{ animationDuration: "5s" }} />
                Visual Archive
                <Aperture size={11} className="animate-spin" style={{ animationDuration: "5s", animationDirection: "reverse" }} />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
                className="text-white"
                style={{ fontFamily: "var(--font-dancing-script)", fontSize: "clamp(4.5rem, 13vw, 9rem)", lineHeight: 1 }}
              >
                Oraxco
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="text-sm max-w-xs leading-relaxed"
                style={{ color: "oklch(40% 0.01 270)" }}
              >
                A curated visual archive of work, reference, and aesthetic exploration.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <span className="text-xs" style={{ color: "oklch(33% 0.01 270)" }}>{GALLERY_IMAGES.length} frames</span>
                <div className="w-1 h-1 rounded-full" style={{ background: "oklch(65% 0.28 290)" }} />
                <span className="text-xs" style={{ color: "oklch(33% 0.01 270)" }}>3D infinite scroll</span>
              </motion.div>

              <motion.button
                onClick={() => setEntered(true)}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5, type: "spring", stiffness: 280, damping: 18 }}
                whileHover={{ scale: 1.07, boxShadow: "0 0 55px oklch(65% 0.28 290 / 55%)" }}
                whileTap={{ scale: 0.95 }}
                className="mt-3 px-9 py-3.5 rounded-full text-sm font-semibold text-white tracking-wide"
                style={{ background: "linear-gradient(135deg, oklch(65% 0.28 290), oklch(65% 0.28 330))" }}
              >
                Enter Gallery
              </motion.button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to top, oklch(5% 0.01 270), transparent)" }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery canvas */}
      <InfiniteGallery images={GALLERY_IMAGES} speed={1.2} visibleCount={12} className="h-screen w-full" />

      {/* Cursor spotlight */}
      {entered && (
        <div
          className="fixed inset-0 pointer-events-none z-10"
          style={{ background: `radial-gradient(300px circle at ${cursor.x}px ${cursor.y}px, oklch(65% 0.28 290 / 7%), transparent 75%)` }}
        />
      )}

      {/* Nav */}
      {entered && (
        <motion.div className="fixed top-5 left-5 z-20 flex items-center gap-2" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
          <button type="button" onClick={handleBack} className={BTN} style={BTN_S} onMouseEnter={on} onMouseLeave={off}><ArrowLeft size={13} /> Back</button>
          <button type="button" onClick={() => router.push("/")} className={BTN} style={BTN_S} onMouseEnter={on} onMouseLeave={off}><Home size={13} /> Home</button>
        </motion.div>
      )}

      {/* Centre wordmark mix-blend */}
      {entered && (
        <motion.div className="fixed inset-0 pointer-events-none flex items-center justify-center mix-blend-exclusion text-white z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1.2 }}>
          <h1 className="select-none text-center" style={{ fontFamily: "var(--font-dancing-script)", fontSize: "clamp(3rem, 9vw, 7rem)", lineHeight: 1 }}>Oraxco</h1>
        </motion.div>
      )}

      {/* Top-right badge */}
      {entered && (
        <motion.div className="fixed top-5 right-5 z-20 flex flex-col items-end gap-1 pointer-events-none" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] tracking-[0.18em] uppercase" style={{ background: "oklch(10% 0.018 270 / 80%)", border: "1px solid oklch(22% 0.025 270)", backdropFilter: "blur(8px)", color: "oklch(55% 0.01 270)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "oklch(65% 0.28 290)" }} />
            Visual Archive
          </div>
          <span className="text-[10px] tracking-widest" style={{ color: "oklch(28% 0.01 270)" }}>{GALLERY_IMAGES.length} frames · 3D scroll</span>
        </motion.div>
      )}

      {/* Bottom hint */}
      {entered && (
        <motion.div className="fixed bottom-6 left-0 right-0 flex justify-center pointer-events-none z-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
          <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "oklch(28% 0.01 270)" }}>scroll · drag · explore</p>
        </motion.div>
      )}
    </main>
  );
}
