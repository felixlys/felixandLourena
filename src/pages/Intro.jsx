
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowRight, Star } from 'lucide-react';
import MinionBuddy from '../components/MinionBuddy';

const minions = [
    { position: 'left-[2%] top-[20%]', size: 'scale-75', delay: 0 },
    { position: 'right-[3%] top-[16%]', size: 'scale-90', delay: 0.5 },
    { position: 'left-[5%] bottom-[13%]', size: 'scale-75', delay: 0.9 },
    { position: 'right-[5%] bottom-[12%]', size: 'scale-75', delay: 0.3 },
];

function FloatingMinion({ position, size, delay }) {
    return (
        <motion.div
            className={`pointer-events-none absolute z-[5] hidden sm:block ${position} ${size}`}
            animate={{
                y: [0, -15, 0],
                rotate: [-4, 4, -4],
            }}
            transition={{
                duration: 3 + delay,
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

export default function Intro({ onBegin }) {
    return (
        <motion.main
            className="intro-screen relative flex min-h-[100svh] w-full flex-col overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
            <div className="ambient-light" aria-hidden="true" />

            {/* Decorative background */}
            <div className="minion-world-bg" aria-hidden="true">
                <span className="banana banana-one">🍌</span>
                <span className="banana banana-two">🍌</span>
                <span className="banana banana-three">🍌</span>
                <span className="minion-cloud cloud-one">✦</span>
                <span className="minion-cloud cloud-two">✦</span>
            </div>

            {/* Minion crowd */}
            {minions.map((minion, index) => (
                <FloatingMinion key={index} {...minion} />
            ))}

            <header className="relative z-10 flex items-center justify-between px-6 pt-7 sm:px-10 sm:pt-9">
                <span className="eyebrow">
                    A LITTLE SURPRISE FOR YOU
                </span>

                <span className="chapter-label">
                    BAB 00 / 05
                </span>
            </header>

            <div className="relative z-10 mx-6 mt-5 h-2 overflow-hidden rounded-full bg-[#2864A5]/15 sm:mx-10">
                <motion.div
                    className="h-full origin-left rounded-full bg-[#2864A5]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 0.08 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                />
            </div>

            <section className="relative z-10 flex flex-1 flex-col justify-center px-7 py-16 sm:px-16">
                <motion.div
                    className="mx-auto w-full max-w-4xl"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.24 },
                        },
                    }}
                >
                    <motion.div
                        className="mb-7 flex items-center gap-3"
                        variants={reveal}
                    >
                        <Star size={18} fill="#FFD928" color="#2864A5" />
                        <span className="eyebrow">
                            WELCOME TO OUR LITTLE MINION WORLD
                        </span>
                    </motion.div>

                    <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-12">
                        <div className="min-w-0 flex-1 text-center sm:text-left">
                            <motion.h1
                                className="intro-title text-5xl leading-tight sm:text-7xl"
                                variants={reveal}
                            >
                                Hi, Lourena!
                                <br />
                                <span className="text-[#2864A5]">
                                    Banananana!
                                </span>
                            </motion.h1>

                            <motion.p
                                className="mx-auto mt-7 max-w-md text-sm leading-7 text-[#52627A] sm:mx-0 sm:text-base sm:leading-8"
                                variants={reveal}
                            >
                                Ini spesial buat km, seyeng.
                                Ada sedikit cerita, kuis, dan kejutan
                                yang sudah kusiapkan.
                            </motion.p>
                        </div>

                        <motion.div
                            variants={reveal}
                            className="relative flex items-center justify-center"
                        >
                            <motion.div
                                animate={{
                                    rotate: [0, 5, -5, 0],
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                className="relative z-10 scale-125 sm:scale-150"
                            >
                                <MinionBuddy />
                            </motion.div>

                            <motion.span
                                className="absolute -right-7 -top-5 text-3xl"
                                animate={{ rotate: [0, 20, -10, 0], scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                🍌
                            </motion.span>

                            <motion.span
                                className="absolute -bottom-5 -left-7 text-2xl"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 1.8, repeat: Infinity }}
                            >
                                ⭐
                            </motion.span>
                        </motion.div>
                    </div>

                    <motion.div
                        className="mt-10 flex justify-center sm:justify-start"
                        variants={reveal}
                    >
                        <motion.button
                            type="button"
                            onClick={onBegin}
                            whileHover={{ y: -4, scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="minion-primary-button"
                        >
                            MULAI PETUALANGAN
                            <ArrowRight size={18} />
                        </motion.button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Bottom Minion decoration */}
            <div className="relative z-[6] flex justify-center gap-5 pb-3 sm:gap-10">
                {[0, 1, 2].map((item) => (
                    <motion.div
                        key={item}
                        className="scale-[0.55] sm:scale-75"
                        animate={{
                            y: [0, -9, 0],
                            rotate: [0, item % 2 === 0 ? 7 : -7, 0],
                        }}
                        transition={{
                            duration: 2.2 + item * 0.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: item * 0.3,
                        }}
                    >
                        <MinionBuddy />
                    </motion.div>
                ))}
            </div>

            <footer className="relative z-10 flex items-end justify-between px-6 pb-7 sm:px-10 sm:pb-9">
                <div className="space-y-1">
                    <p className="eyebrow">
                        DIBUAT DENGAN SEPENUH HATI
                    </p>
                    <p className="text-[10px] font-bold tracking-wider text-[#52627A]">
                        DAN AGAK MENDADAK WKWKWKW.
                    </p>
                </div>

                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="text-[#2864A5]"
                    aria-hidden="true"
                >
                    <ArrowDownRight size={20} />
                </motion.div>
            </footer>
        </motion.main>
    );
}

const reveal = {
    hidden: {
        opacity: 0,
        y: 18,
        filter: 'blur(5px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};
