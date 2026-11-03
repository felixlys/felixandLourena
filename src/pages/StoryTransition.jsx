
import { motion } from 'motion/react';
import {
    ArrowRight,
    Heart,
    Star,
    Sparkles,
} from 'lucide-react';

import MinionBuddy from '../components/MinionBuddy';

function FloatingMinion({ className = '', delay = 0, scale = '' }) {
    return (
        <motion.div
            className={`pointer-events-none absolute z-[5] hidden sm:block ${className} ${scale}`}
            animate={{
                y: [0, -13, 0],
                rotate: [-4, 4, -4],
            }}
            transition={{
                duration: 3.5,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
            aria-hidden="true"
        >
            <MinionBuddy />
        </motion.div>
    );
}

export default function StoryTransition({ onContinue }) {
    return (
        <motion.main
            className="story-transition-screen relative flex min-h-[100svh] flex-col overflow-hidden px-7 py-8 sm:px-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8 }}
        >
            {/* Background */}
            <div className="ambient-light" aria-hidden="true" />

            <div className="story-world-bg" aria-hidden="true">
                <span className="story-banana banana-one">🍌</span>
                <span className="story-banana banana-two">🍌</span>
                <span className="story-banana banana-three">🍌</span>
                <span className="story-star star-one">✦</span>
                <span className="story-star star-two">✦</span>
                <span className="story-star star-three">✧</span>
                <span className="story-cloud cloud-one" />
                <span className="story-cloud cloud-two" />
            </div>

            {/* Minion decorations */}
            <FloatingMinion
                className="right-8 top-32"
                delay={0.2}
                scale="scale-75"
            />

            <FloatingMinion
                className="left-2 bottom-28"
                delay={0.8}
                scale="scale-75"
            />

            <FloatingMinion
                className="right-5 bottom-12"
                delay={1.3}
                scale="scale-50"
            />

            {/* Header */}
            <header className="relative z-10 flex items-center justify-between">
                <span className="eyebrow">
                    CERITA DI ANTARA KITA
                </span>

                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 8, -8, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    <Heart
                        size={21}
                        fill="#FFD928"
                        className="text-[#2864A5]"
                    />
                </motion.div>
            </header>

            {/* Main content */}
            <section className="relative z-10 mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center py-12">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                >
                    <div className="mb-6 flex items-center gap-3">
                        <Star
                            size={18}
                            fill="#FFD928"
                            color="#2864A5"
                        />

                        <p className="eyebrow">
                            SEBELUM MELANJUTKAN
                        </p>

                        <Sparkles
                            size={17}
                            className="text-[#E5AE00]"
                        />
                    </div>

                    <div className="relative">
                        <h1 className="font-[Fredoka] text-5xl font-bold leading-[1.12] tracking-tight text-[#173B68] sm:text-7xl">
                            Ternyata,
                            <br />
                            <span className="text-[#2864A5]">
                                kita punya cerita.
                            </span>
                        </h1>

                        <motion.span
                            className="absolute -right-1 top-0 text-3xl sm:right-8 sm:text-5xl"
                            animate={{
                                rotate: [0, 15, -15, 0],
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                            }}
                        >
                            ✨
                        </motion.span>
                    </div>

                    <p className="mt-7 max-w-lg text-sm leading-7 text-[#52627A] sm:text-base sm:leading-8">
                        Dari obrolan sederhana sampai hal-hal
                        kecil yang mungkin cuma kita berdua
                        yang mengerti.
                    </p>
                </motion.div>

                {/* Story card */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.65,
                    }}
                    className="story-card relative mt-10 overflow-hidden rounded-3xl border-2 border-[#2864A5] bg-white p-5 shadow-[5px_6px_0_#173B68] sm:p-7"
                >
                    {/* Decorative corner */}
                    <div className="absolute -right-5 -top-7 rotate-12 text-7xl opacity-20">
                        🍌
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-2">
                            <span className="rounded-full bg-[#FFD928] px-3 py-1 text-[10px] font-black tracking-widest text-[#173B68]">
                                ADA SATU HAL LAGI...
                            </span>

                            <Star
                                size={15}
                                fill="#FFD928"
                                color="#2864A5"
                            />
                        </div>

                        <p className="mt-4 font-[Fredoka] text-2xl font-semibold leading-relaxed text-[#173B68] sm:text-3xl">
                            Jangan pergi dulu, ya.
                        </p>

                        <p className="mt-3 max-w-md text-sm leading-7 text-[#52627A]">
                            Berikutnya, ada sesuatu yang ingin
                            kutunjukkan kepadamu.
                        </p>

                        <div className="mt-5 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-[#FFD928]" />
                            <span className="h-2 w-2 rounded-full bg-[#2864A5]" />
                            <span className="h-2 w-2 rounded-full bg-[#C8D0D8]" />
                            <span className="ml-1 text-[10px] font-bold tracking-wider text-[#2864A5]">
                                TO BE CONTINUED...
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Continue button */}
                <motion.button
                    type="button"
                    onClick={onContinue}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 1,
                    }}
                    whileHover={{
                        y: -4,
                        boxShadow: '0 9px 0 #173B68',
                    }}
                    whileTap={{
                        scale: 0.97,
                        y: 2,
                    }}
                    className="minion-primary-button mt-9 self-start"
                >
                    LANJUTKAN CERITA
                    <ArrowRight size={17} />
                </motion.button>
            </section>

            {/* Footer */}
            <footer className="relative z-10 flex items-center justify-between gap-3">
                <span className="eyebrow">
                    BAB 02 — HAL-HAL KECIL YANG BERARTI
                </span>

                <span className="text-xl" aria-hidden="true">
                    💛
                </span>
            </footer>
        </motion.main>
    );
}
