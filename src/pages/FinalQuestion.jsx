
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
    Heart,
    Sparkles,
    RotateCcw,
    Star,
    ArrowRight,
} from 'lucide-react';
import MinionBuddy from '../components/MinionBuddy';

const responses = {
    yes: {
        eyebrow: 'MY FAVORITE ANSWER',
        title: 'YEAAAY! BANANA!!!',
        message:
            'Hehehe, makasih ya seyeng. Semoga masih banyak cerita indah yang bisa kita buat bersama.',
        note: 'To more little adventures together!',
    },
    ofcourse: {
        eyebrow: 'I KNEW IT!',
        title: 'I KNEW IT, SILLY!',
        message:
            'Wkwkwk, aku juga berharap begitu. Let’s make more memories together!',
        note: 'Our story is far from over.',
    },
};

function FloatingDecoration({ children, className = '', duration = 4 }) {
    return (
        <motion.div
            className={`pointer-events-none absolute ${className}`}
            animate={{
                y: [0, -13, 0],
                rotate: [-7, 7, -7],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
            aria-hidden="true"
        >
            {children}
        </motion.div>
    );
}

export default function FinalQuestion({ onRestart }) {
    const [answer, setAnswer] = useState(null);

    const selectedResponse = answer ? responses[answer] : null;

    return (
        <motion.main
            className="intro-screen relative flex min-h-[100svh] flex-col overflow-hidden px-5 py-6 sm:px-10 sm:py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <div className="ambient-light" aria-hidden="true" />

            {/* Animated world decorations */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <FloatingDecoration className="left-[5%] top-[17%] text-4xl">
                    🍌
                </FloatingDecoration>

                <FloatingDecoration
                    className="right-[7%] top-[20%] text-3xl"
                    duration={5}
                >
                    ⭐
                </FloatingDecoration>

                <FloatingDecoration
                    className="bottom-[18%] left-[9%] text-3xl"
                    duration={3.5}
                >
                    ✨
                </FloatingDecoration>

                <FloatingDecoration
                    className="bottom-[15%] right-[8%] text-4xl"
                    duration={4.5}
                >
                    🍌
                </FloatingDecoration>

                <motion.div
                    className="absolute -left-10 top-[45%] opacity-60"
                    animate={{ rotate: [-5, 5, -5], y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                >
                    <MinionBuddy className="scale-75" />
                </motion.div>

                <motion.div
                    className="absolute -right-10 top-[50%] opacity-60"
                    animate={{ rotate: [5, -5, 5], y: [0, 12, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity }}
                >
                    <MinionBuddy className="scale-75" />
                </motion.div>
            </div>

            {/* Top label */}
            <header className="relative z-10 flex justify-center">
                <div className="minion-section-label flex items-center gap-2">
                    <Star size={13} fill="#FFD928" />
                    BAB 04 / ONE LAST QUESTION
                    <Star size={13} fill="#FFD928" />
                </div>
            </header>

            <section className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center py-10 text-center">

                {/* Main character */}
                <motion.div
                    className="relative mb-5"
                    animate={{ y: [0, -9, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity }}
                >
                    <MinionBuddy className="scale-125 sm:scale-150" />

                    <motion.div
                        className="absolute -right-7 -top-3 rounded-full border-2 border-white bg-[#FFD928] p-2 text-[#173B68] shadow-md"
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <Heart size={20} fill="currentColor" />
                    </motion.div>
                </motion.div>

                <div className="mb-4 flex items-center gap-2 text-[#2864A5]">
                    <Sparkles size={19} />
                    <span className="text-[11px] font-black tracking-[0.25em]">
                        THE FINAL QUESTION
                    </span>
                    <Sparkles size={19} />
                </div>

                {/* Question */}
                <motion.h1
                    className="minion-heading text-4xl leading-[1.15] sm:text-6xl lg:text-7xl"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Will we make
                    <br />
                    <span className="relative inline-block text-[#2864A5]">
                        more memories
                        <motion.span
                            className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#FFD928]"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.65, duration: 0.5 }}
                        />
                    </span>
                    <br />
                    with me?
                </motion.h1>

                <motion.p
                    className="mt-6 max-w-lg text-sm leading-7 text-[#263449] sm:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                >
                    Dari segelintir foto photobooth tadi ayok kita tambah foto kita?
                </motion.p>

                <AnimatePresence mode="wait">
                    {!answer ? (
                        <motion.div
                            key="choices"
                            className="mt-9 flex w-full max-w-md flex-col gap-4"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.button
                                onClick={() => setAnswer('yes')}
                                whileHover={{ scale: 1.035, y: -3 }}
                                whileTap={{ scale: 0.97 }}
                                className="group flex w-full items-center justify-center gap-3 rounded-2xl border-[3px] border-[#173B68] bg-[#FFD928] px-6 py-5 font-black tracking-wide text-[#173B68] shadow-[5px_6px_0_#173B68] transition-shadow hover:shadow-[7px_8px_0_#173B68]"
                            >
                                <Heart size={21} fill="currentColor" />
                                YES, OF COURSE!
                                <Sparkles
                                    size={19}
                                    className="transition-transform group-hover:rotate-12"
                                />
                            </motion.button>

                            <motion.button
                                onClick={() => setAnswer('ofcourse')}
                                whileHover={{ scale: 1.035, y: -3 }}
                                whileTap={{ scale: 0.97 }}
                                className="group flex w-full items-center justify-center gap-3 rounded-2xl border-[3px] border-[#2864A5] bg-white px-6 py-5 font-black tracking-wide text-[#2864A5] shadow-[5px_6px_0_#2864A5] transition-shadow hover:shadow-[7px_8px_0_#2864A5]"
                            >
                                OF COURSE, SILLY!
                                <Heart
                                    size={19}
                                    className="transition-transform group-hover:scale-125"
                                />
                            </motion.button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="response"
                            className="relative mt-9 w-full max-w-lg"
                            initial={{ opacity: 0, scale: 0.85, y: 25 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                                type: 'spring',
                                stiffness: 160,
                                damping: 15,
                            }}
                        >
                            {/* Celebration sparkles */}
                            <motion.div
                                className="absolute -left-4 -top-5 z-20 text-[#E9AD00]"
                                animate={{ rotate: 360, scale: [1, 1.3, 1] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                }}
                            >
                                <Sparkles size={34} />
                            </motion.div>

                            <motion.div
                                className="absolute -right-3 -top-4 z-20 text-[#2864A5]"
                                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                }}
                            >
                                <Star size={30} fill="#FFD928" />
                            </motion.div>

                            <div className="overflow-hidden rounded-[30px] border-[4px] border-[#2864A5] bg-white shadow-[8px_9px_0_#173B68]">

                                <div className="bg-[#FFD928] px-5 py-4">
                                    <p className="text-[10px] font-black tracking-[0.3em] text-[#2864A5]">
                                        {selectedResponse.eyebrow}
                                    </p>
                                    <h2 className="mt-1 text-2xl font-black text-[#173B68] sm:text-3xl">
                                        {selectedResponse.title}
                                    </h2>
                                </div>

                                <div className="px-6 py-7 sm:px-9">
                                    <motion.div
                                        className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF4B8] text-[#2864A5]"
                                        animate={{
                                            scale: [1, 1.12, 1],
                                            rotate: [0, 8, -8, 0],
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                        }}
                                    >
                                        <Heart
                                            size={34}
                                            fill="#FFD928"
                                        />
                                    </motion.div>

                                    <p className="text-sm leading-7 text-[#263449] sm:text-base">
                                        {selectedResponse.message}
                                    </p>

                                    <div className="mt-6 rounded-xl bg-[#FFF4B8] px-4 py-3">
                                        <p className="text-xs font-bold italic text-[#173B68]">
                                            “{selectedResponse.note}”
                                        </p>
                                    </div>

                                    <button
                                        onClick={onRestart}
                                        className="minion-primary-button mt-7 w-full justify-center"
                                    >
                                        <RotateCcw size={17} />
                                        REPLAY OUR STORY
                                        <ArrowRight size={17} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            <footer className="relative z-10 pt-5 text-center">
                <p className="flex items-center justify-center gap-2 text-[10px] font-black tracking-[0.3em] text-[#2864A5]">
                    <Heart size={12} fill="#FFD928" />
                    TO BE CONTINUED...
                    <Heart size={12} fill="#FFD928" />
                </p>
            </footer>
        </motion.main>
    );
}
