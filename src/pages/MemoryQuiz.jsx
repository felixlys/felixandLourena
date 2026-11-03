
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import MinionBuddy from '../components/MinionBuddy';

import {
    ArrowLeft,
    ArrowRight,
    Check,
    Heart,
    RotateCcw,
    X,
    Star,
    Sparkles,
} from 'lucide-react';

import memories from '../data/memories';

const reveal = {
    hidden: {
        opacity: 0,
        y: 15,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

function FloatingMinion({ className = '', delay = 0, scale = 'scale-75' }) {
    return (
        <motion.div
            className={`pointer-events-none absolute z-[5] hidden sm:block ${className} ${scale}`}
            animate={{
                y: [0, -12, 0],
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

export default function MemoryQuiz({ onBack, onComplete }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [score, setScore] = useState(0);

    const memory = memories[currentQuestion];

    const isCorrect = selectedAnswer === memory.correctAnswer;
    const isLastQuestion = currentQuestion === memories.length - 1;
    const isPhotoQuestion = memory.type === 'photo';

    function chooseAnswer(index) {
        if (showFeedback) return;

        setSelectedAnswer(index);
        setShowFeedback(true);

        if (index === memory.correctAnswer) {
            setScore((previousScore) => previousScore + 1);
        }
    }

    function nextQuestion() {
        if (!showFeedback) return;

        if (isLastQuestion) {
            onComplete(score);
            return;
        }

        setCurrentQuestion((previousQuestion) => previousQuestion + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
    }

    function restartQuiz() {
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setShowFeedback(false);
        setScore(0);
    }

    return (
        <motion.main
            className="quiz-screen relative flex min-h-[100svh] w-full flex-col overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
        >
            {/* Background */}
            <div className="ambient-light" aria-hidden="true" />

            <div className="minion-world-bg" aria-hidden="true">
                <span className="banana banana-one">🍌</span>
                <span className="banana banana-two">🍌</span>
                <span className="banana banana-three">🍌</span>
                <span className="minion-cloud cloud-one">✦</span>
                <span className="minion-cloud cloud-two">✦</span>
            </div>

            {/* Minions decorations */}
            <FloatingMinion
                className="right-2 top-28"
                delay={0.3}
                scale="scale-75"
            />

            <FloatingMinion
                className="left-0 bottom-32"
                delay={0.8}
                scale="scale-75"
            />

            <FloatingMinion
                className="right-5 bottom-20"
                delay={1.2}
                scale="scale-50"
            />

            {/* Header */}
            <header className="relative z-10 flex items-center justify-between px-6 pt-7 sm:px-10 sm:pt-9">
                <button
                    type="button"
                    onClick={onBack}
                    className="minion-secondary-button"
                >
                    <ArrowLeft size={16} />
                    KEMBALI
                </button>

                <span className="chapter-label">
                    BAB 01 / 05
                </span>
            </header>

            {/* Progress */}
            <div
                className="relative z-10 mx-6 mt-6 h-3 overflow-hidden rounded-full border border-[#173B68]/20 bg-[#C8D0D8] sm:mx-10"
                aria-label={`Pertanyaan ${currentQuestion + 1} dari ${memories.length}`}
            >
                <motion.div
                    className="h-full origin-left rounded-full bg-[#FFD928]"
                    animate={{
                        scaleX: (currentQuestion + 1) / memories.length,
                    }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            {/* Main content */}
            <section className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-10 sm:px-10 sm:py-12">

                {/* Quiz heading */}
                <motion.div
                    className="mb-7 flex items-end justify-between gap-4"
                    initial="hidden"
                    animate="visible"
                    variants={reveal}
                >
                    <div>
                        <div className="mb-3 flex items-center gap-2">
                            <Star
                                size={17}
                                fill="#FFD928"
                                color="#2864A5"
                            />

                            <p className="eyebrow">
                                A LITTLE MEMORY CHALLENGE
                            </p>
                        </div>

                        <h1 className="minion-heading text-4xl sm:text-5xl">
                            Masih ingat
                            <br />
                            <span className="text-[#2864A5]">
                                yang ini?
                            </span>
                        </h1>
                    </div>

                    <div className="rounded-2xl border-2 border-[#2864A5] bg-[#FFD928] px-3 py-2 text-center shadow-[3px_4px_0_#173B68]">
                        <p className="text-[10px] font-black tracking-wider text-[#173B68]">
                            QUESTION
                        </p>

                        <p className="text-lg font-black tabular-nums text-[#173B68]">
                            {String(currentQuestion + 1).padStart(2, '0')}
                            {' / '}
                            {String(memories.length).padStart(2, '0')}
                        </p>
                    </div>
                </motion.div>

                {/* Question content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={memory.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* Question text */}
                        <div className="rounded-2xl border-2 border-[#2864A5] bg-white p-5 shadow-[4px_5px_0_#173B68] sm:p-6">
                            <div className="mb-3 flex items-center gap-2">
                                <Sparkles
                                    size={17}
                                    className="text-[#E5AE00]"
                                />

                                <span className="text-[10px] font-black tracking-[0.15em] text-[#2864A5]">
                                    YOUR MEMORY TEST
                                </span>
                            </div>

                            <p className="text-lg font-extrabold leading-relaxed text-[#173B68] sm:text-xl">
                                {memory.question}
                            </p>

                            <p className="mt-3 text-xs leading-6 text-[#52627A]">
                                {isPhotoQuestion
                                    ? 'Pilih foto yang menurutmu benar!'
                                    : 'Pilih satu jawaban yang paling tepat!'}
                            </p>
                        </div>

                        {/* Photo options */}
                        {isPhotoQuestion && (
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                {memory.options.map((option, index) => {
                                    const isSelected = selectedAnswer === index;
                                    const isAnswerKey =
                                        index === memory.correctAnswer;

                                    let optionStyle =
                                        'border-[#2864A5]/30 bg-white shadow-[3px_4px_0_rgba(23,59,104,0.15)]';

                                    if (showFeedback && isAnswerKey) {
                                        optionStyle =
                                            'border-[#2864A5] ring-4 ring-[#FFD928]/70 shadow-[3px_4px_0_#173B68]';
                                    } else if (showFeedback && isSelected) {
                                        optionStyle =
                                            'border-red-400 ring-2 ring-red-200';
                                    } else if (!showFeedback) {
                                        optionStyle +=
                                            ' hover:border-[#2864A5] hover:-translate-y-1';
                                    }

                                    return (
                                        <motion.button
                                            key={option.label}
                                            type="button"
                                            onClick={() => chooseAnswer(index)}
                                            disabled={showFeedback}
                                            whileHover={
                                                !showFeedback
                                                    ? { y: -3 }
                                                    : {}
                                            }
                                            whileTap={
                                                !showFeedback
                                                    ? { scale: 0.98 }
                                                    : {}
                                            }
                                            aria-label={`Pilih foto ${option.label}`}
                                            className={`group relative overflow-hidden rounded-2xl border-2 text-left transition duration-300 disabled:cursor-default ${optionStyle}`}
                                        >
                                            <div className="relative aspect-[4/5] overflow-hidden bg-[#E8EDF2]">
                                                <img
                                                    src={option.image}
                                                    alt={`Pilihan foto ${option.label}`}
                                                    loading="lazy"
                                                    className={`h-full w-full object-cover transition duration-500 ${
                                                        showFeedback &&
                                                        !isAnswerKey
                                                            ? 'brightness-75'
                                                            : !showFeedback
                                                              ? 'group-hover:scale-105'
                                                              : ''
                                                    }`}
                                                />

                                                <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#FFD928] text-sm font-black text-[#173B68] shadow-md">
                                                    {option.label}
                                                </span>

                                                {showFeedback && isAnswerKey && (
                                                    <motion.span
                                                        initial={{
                                                            opacity: 0,
                                                            scale: 0.5,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            scale: 1,
                                                        }}
                                                        className="absolute inset-0 flex items-center justify-center bg-[#173B68]/15"
                                                    >
                                                        <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#173B68] bg-[#FFD928] text-[#173B68] shadow-lg">
                                                            <Check size={25} />
                                                        </span>
                                                    </motion.span>
                                                )}

                                                {showFeedback &&
                                                    isSelected &&
                                                    !isCorrect && (
                                                        <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white shadow-lg">
                                                            <X size={19} />
                                                        </span>
                                                    )}
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        )}

                        {/* Multiple choice options */}
                        {!isPhotoQuestion && (
                            <div className="mt-6 grid gap-3">
                                {memory.options.map((option, index) => {
                                    const isSelected = selectedAnswer === index;
                                    const isAnswerKey =
                                        index === memory.correctAnswer;

                                    let optionStyle =
                                        'border-[#2864A5]/30 bg-white hover:border-[#2864A5] hover:bg-[#FFF9D9] shadow-[3px_4px_0_rgba(23,59,104,0.12)]';

                                    if (showFeedback && isAnswerKey) {
                                        optionStyle =
                                            'border-[#2864A5] bg-[#FFF4B8] ring-2 ring-[#FFD928] shadow-[3px_4px_0_#173B68]';
                                    } else if (showFeedback && isSelected) {
                                        optionStyle =
                                            'border-red-300 bg-red-50';
                                    }

                                    return (
                                        <motion.button
                                            key={option.label}
                                            type="button"
                                            onClick={() => chooseAnswer(index)}
                                            disabled={showFeedback}
                                            whileHover={
                                                !showFeedback
                                                    ? { x: 4 }
                                                    : {}
                                            }
                                            whileTap={
                                                !showFeedback
                                                    ? { scale: 0.99 }
                                                    : {}
                                            }
                                            className={`flex min-h-16 items-center gap-4 rounded-2xl border-2 px-4 py-3 text-left transition-all duration-300 disabled:cursor-default ${optionStyle}`}
                                        >
                                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#2864A5] bg-[#FFD928] text-sm font-black text-[#173B68]">
                                                {option.label}
                                            </span>

                                            <span className="flex-1 text-sm font-bold leading-6 text-[#263449]">
                                                {option.text}
                                            </span>

                                            {showFeedback && isAnswerKey && (
                                                <motion.span
                                                    initial={{
                                                        scale: 0,
                                                        rotate: -90,
                                                    }}
                                                    animate={{
                                                        scale: 1,
                                                        rotate: 0,
                                                    }}
                                                >
                                                    <Check
                                                        size={21}
                                                        className="shrink-0 text-[#2864A5]"
                                                    />
                                                </motion.span>
                                            )}

                                            {showFeedback &&
                                                isSelected &&
                                                !isCorrect && (
                                                    <X
                                                        size={21}
                                                        className="shrink-0 text-red-500"
                                                    />
                                                )}
                                        </motion.button>
                                    );
                                })}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Answer feedback */}
                <AnimatePresence>
                    {showFeedback && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 15,
                                scale: 0.96,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: -5,
                            }}
                            transition={{ duration: 0.35 }}
                            className={`relative mt-7 overflow-hidden rounded-2xl border-2 p-5 shadow-[4px_5px_0_#173B68] ${
                                isCorrect
                                    ? 'border-[#2864A5] bg-[#FFF4B8]'
                                    : 'border-[#C8D0D8] bg-white'
                            }`}
                        >
                            <div className="pointer-events-none absolute -right-3 -top-5 text-5xl opacity-20">
                                🍌
                            </div>

                            <div className="relative z-10 flex items-center gap-2">
                                {isCorrect ? (
                                    <Star
                                        size={20}
                                        fill="#FFD928"
                                        color="#2864A5"
                                    />
                                ) : (
                                    <Heart
                                        size={19}
                                        className="text-[#2864A5]"
                                    />
                                )}

                                <p className="text-xs font-black tracking-[0.15em] text-[#2864A5]">
                                    {isCorrect
                                        ? 'BANANA! KAMU BENAR!'
                                        : 'TIDAK APA-APA, SEYENG!'}
                                </p>
                            </div>

                            <p className="relative z-10 mt-3 text-sm font-bold leading-7 text-[#263449]">
                                {isCorrect
                                    ? memory.correctMessage
                                    : memory.wrongMessage}
                            </p>

                            {isCorrect && (
                                <motion.div
                                    className="absolute bottom-2 right-12 text-2xl"
                                    animate={{
                                        y: [0, -8, 0],
                                        rotate: [0, 15, -15, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                    }}
                                >
                                    ✨
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Navigation buttons */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                    <button
                        type="button"
                        onClick={restartQuiz}
                        className="minion-secondary-button"
                    >
                        <RotateCcw size={14} />
                        ULANGI KUIS
                    </button>

                    <motion.button
                        type="button"
                        onClick={nextQuestion}
                        disabled={!showFeedback}
                        whileHover={
                            showFeedback ? { y: -3 } : {}
                        }
                        whileTap={
                            showFeedback ? { scale: 0.97 } : {}
                        }
                        className="minion-primary-button disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        {isLastQuestion
                            ? 'SELESAI'
                            : 'PERTANYAAN BERIKUTNYA'}

                        <ArrowRight size={17} />
                    </motion.button>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 flex items-center justify-between px-6 pb-7 sm:px-10 sm:pb-9">
                <p className="eyebrow">
                    EVERY MEMORY HAS ITS OWN STORY
                </p>

                <span className="text-xl" aria-hidden="true">
                    🍌
                </span>
            </footer>
        </motion.main>
    );
}
