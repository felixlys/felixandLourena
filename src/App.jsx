
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
    ArrowLeft,
    ArrowRight,
    RotateCcw,
    Heart,
} from 'lucide-react';

import Intro from './pages/Intro';
import MemoryQuiz from './pages/MemoryQuiz';
import MinionBuddy from './components/MinionBuddy';
import StoryTransition from './pages/StoryTransition';
import Photobooth from './pages/Photobooth';
import FinalQuestion from './pages/FinalQuestion';
export default function App() {
    const [currentScene, setCurrentScene] = useState('intro');
    const [finalScore, setFinalScore] = useState(0);

    function beginStory() {
        setCurrentScene('memories');
    }

    function beginQuiz() {
        setCurrentScene('quiz');
    }

    function returnToIntro() {
        setCurrentScene('intro');
    }

    function returnToMemories() {
        setCurrentScene('memories');
    }

    function finishQuiz(score) {
        setFinalScore(score);
        setCurrentScene('result');
    }

    function restartStory() {
        setFinalScore(0);
        setCurrentScene('intro');
    }
    function goToTransition() {
        setCurrentScene('transition');
    }
    function goToPhotobooth() {
        setCurrentScene('photobooth');
    }
    function goToFinalQuestion() {
        setCurrentScene('finalQuestion');
    }



    return (
        <div className="app-shell min-h-[100svh]">
            <AnimatePresence mode="wait">

                {/* HALAMAN 1: INTRO */}
                {currentScene === 'intro' && (
                    <Intro
                        key="intro"
                        onBegin={beginStory}
                    />
                )}

                {/* HALAMAN 2: PENGANTAR CERITA */}
                {currentScene === 'memories' && (
                    <motion.main
                        key="memories"
                        className="intro-screen relative flex min-h-[100svh] flex-col overflow-hidden px-7 py-8 sm:px-12"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="ambient-light" aria-hidden="true" />

                        <header className="relative z-10 flex items-center justify-between">
                            <button
                                type="button"
                                onClick={returnToIntro}
                                className="inline-flex items-center gap-2 rounded-full border border-[#2864A5]/30 bg-white/50 px-4 py-2 text-xs font-bold tracking-wider"
                            >
                                <ArrowLeft size={15} />
                                KEMBALI
                            </button>

                            <span className="chapter-label">
                                BAB 01 / 05
                            </span>
                        </header>

                        <section className="relative z-10 mx-auto flex w-full max-w-xl flex-1 flex-col justify-center py-12">
                            <div className="mb-6 flex items-center gap-5">
                                <div className="min-w-0 flex-1">
                                    <p className="eyebrow">
                                        AWAL CERITA
                                    </p>

                                    <h1 className="mt-5 font-[Fredoka] text-4xl font-semibold leading-tight text-[#173B68] sm:text-6xl">
                                        Seyeng, kita coba kuis bentar!
                                        <br />
                                        <span className="text-[#2864A5]">
                                            Kira-kira seyeng inget ga...
                                        </span>
                                    </h1>
                                </div>

                                <MinionBuddy className="hidden sm:block" />
                            </div>

                            <p className="mt-3 max-w-md text-sm leading-7 text-[#52627A] sm:text-base">
                                Mudah-mudahan inget wkwkkwkw.
                            </p>

                            <div className="minion-card mt-9 p-5 sm:p-7">
                                <p className="text-xs font-black tracking-widest text-[#2864A5]">
                                    BAGIAN 01
                                </p>

                                <p className="mt-2 font-[Fredoka] text-2xl font-semibold text-[#173B68]">
                                    Mini Quiz about us
                                </p>

                                <p className="mt-3 text-sm leading-6 text-[#52627A]">
                                    Gaada soal matematika sama sekali kok seng.
                                </p>

                                <div className="mt-4 flex gap-2" aria-hidden="true">
                                    <span className="h-2 w-8 rounded-full bg-[#FFD928]" />
                                    <span className="h-2 w-8 rounded-full bg-[#2864A5]" />
                                    <span className="h-2 w-8 rounded-full bg-[#FFD928]" />
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={beginQuiz}
                                className="minion-primary-button mt-8 self-start"
                            >
                                MULAI KUIS
                                <ArrowRight size={16} />
                            </button>
                        </section>

                        <footer className="relative z-10 eyebrow">
                            CERITA DI ANTARA KITA
                        </footer>
                    </motion.main>
                )}

                {/* HALAMAN 3: KUIS KENANGAN */}
                {currentScene === 'quiz' && (
                    <MemoryQuiz
                        key="quiz"
                        onBack={returnToMemories}
                        onComplete={finishQuiz}
                    />
                )}

                {/* HALAMAN 4: HASIL AKHIR */}
                {currentScene === 'result' && (
                    <motion.main
                        key="result"
                        className="intro-screen relative flex min-h-[100svh] flex-col overflow-hidden px-7 py-8 sm:px-12"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="ambient-light" aria-hidden="true" />

                        <header className="relative z-10 flex items-center justify-between">
                            <span className="chapter-label">
                                AKHIR BAB 01
                            </span>

                            <Heart
                                size={20}
                                fill="#FFD928"
                                className="text-[#2864A5]"
                            />
                        </header>

                        <section className="relative z-10 mx-auto flex w-full max-w-xl flex-1 flex-col justify-center py-12">
                            <div className="mb-6 flex items-center justify-between gap-5">
                                <div>
                                    <p className="eyebrow">
                                        TERIMA KASIH SUDAH MENGINGAT
                                    </p>

                                    <h1 className="mt-5 font-[Fredoka] text-5xl font-semibold leading-tight text-[#173B68] sm:text-7xl">
                                        Cerita kita
                                        <br />
                                        <span className="text-[#2864A5]">
                                            berlanjut...
                                        </span>
                                    </h1>
                                </div>

                                <MinionBuddy className="hidden sm:block" />
                            </div>

                            <p className="mt-5 text-sm leading-7 text-[#52627A] sm:text-base">
                                Seyeng benar {finalScore} dari 14 pertanyaan.
                            </p>

                            <div className="minion-card mt-8 p-6 sm:p-8">
                                <p className="text-xs font-black tracking-[0.15em] text-[#2864A5]">
                                    SATU HAL YANG INGIN KUSAMPAIKAN
                                </p>

                                <p className="mt-4 font-[Fredoka] text-2xl font-medium leading-relaxed text-[#173B68] sm:text-3xl">
                                    I Love You, Lourena.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={goToTransition}
                                className="minion-primary-button"
                            >
                                <RotateCcw size={15} />
                                LANJUTKAN CERITA <ArrowRight size={18} />
                            </button>
                        </section>

                        <footer className="relative z-10 eyebrow">
                            OUR D-DAY.
                        </footer>
                    </motion.main>
                )}
                {currentScene === 'transition' && (
                    <StoryTransition
                        key="transition"
                        onContinue={goToPhotobooth}
                    />
                )}
                {currentScene === 'photobooth' && (
                    <Photobooth
                        key="photobooth"
                        onBack={goToTransition}
                        onContinue={goToFinalQuestion}
                    />
                )}
                {currentScene === 'finalQuestion' && (
                    <FinalQuestion
                        key="finalQuestion"
                        onRestart={restartStory}
                    />
                )}

            </AnimatePresence>
        </div>
    );
}
