
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
    ArrowLeft,
    ArrowRight,
    Camera,
    Heart,
    Sparkles,
    Star,
} from 'lucide-react';
import MinionBuddy from '../components/MinionBuddy';

const photos = [
    {
        src: '/memories/photobooth-1.png',
        caption: 'A little moment with you',
        label: '01',
    },
    {
        src: '/memories/photobooth-2.png',
        caption: 'My favorite person',
        label: '02',
    },
    {
        src: '/memories/photobooth-3.png',
        caption: 'Another happy memory',
        label: '03',
    },
    {
        src: '/memories/photobooth-4.png',
        caption: 'Another happy memory',
        label: '03',
    },
    {
        src: '/memories/photobooth-5.png',
        caption: 'Lanjut...',
        label: '03',
    },
];

export default function Photobooth({ onBack, onContinue }) {
    const [activePhoto, setActivePhoto] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);

    const current = photos[activePhoto];

    function nextPhoto() {
        setImageLoaded(false);
        setActivePhoto((prev) => (prev + 1) % photos.length);
    }

    function previousPhoto() {
        setImageLoaded(false);
        setActivePhoto((prev) =>
            (prev - 1 + photos.length) % photos.length
        );
    }

    return (
        <motion.main
            className="intro-screen relative flex min-h-[100svh] flex-col overflow-hidden px-5 py-6 sm:px-10 sm:py-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45 }}
        >
            <div className="ambient-light" aria-hidden="true" />

            {/* Background decorations */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute left-[5%] top-[20%] text-3xl"
                    animate={{ y: [0, -14, 0], rotate: [-8, 8, -8] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    🍌
                </motion.div>

                <motion.div
                    className="absolute right-[7%] top-[25%] text-2xl"
                    animate={{ y: [0, 12, 0], rotate: [8, -8, 8] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                >
                    ⭐
                </motion.div>

                <motion.div
                    className="absolute bottom-[15%] left-[8%] text-2xl"
                    animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.15, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    ✨
                </motion.div>

                <MinionBuddy className="absolute -left-8 top-[42%] scale-75 opacity-70" />
                <MinionBuddy className="absolute -right-9 bottom-[18%] scale-75 opacity-70" />
            </div>

            {/* Header */}
            <header className="relative z-20 flex items-center justify-between gap-3">
                <button
                    onClick={onBack}
                    className="minion-secondary-button"
                    aria-label="Kembali"
                >
                    <ArrowLeft size={17} />
                    <span>Kembali</span>
                </button>

                <span className="minion-section-label text-right">
                    BAB 03 / OUR MEMORIES
                </span>
            </header>

            {/* Main content */}
            <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center py-8 text-center">

                {/* Eyebrow */}
                <motion.div
                    className="mb-4 flex items-center gap-3"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                >
                    <Camera className="text-[#2864A5]" size={24} />
                    <span className="minion-section-label">
                        MINIONS PHOTOBOOTH
                    </span>
                    <Sparkles size={19} className="text-[#E9AD00]" />
                </motion.div>

                <motion.h1
                    className="minion-heading mb-3 text-4xl sm:text-5xl lg:text-6xl"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Little Moments,
                    <br />
                    Big Memories!
                </motion.h1>

                <motion.p
                    className="mb-8 max-w-lg text-sm leading-7 text-[#263449] sm:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Karena beberapa momen sederhana bisa menjadi
                    kenangan yang paling berharga.
                </motion.p>

                {/* Photobooth layout */}
                <div className="relative flex w-full items-center justify-center">

                    {/* Left decoration */}
                    <motion.div
                        className="absolute -left-2 top-1/4 hidden lg:block"
                        animate={{ y: [0, -12, 0], rotate: [-5, 5, -5] }}
                        transition={{ duration: 3.5, repeat: Infinity }}
                    >
                        <MinionBuddy className="scale-90" />
                    </motion.div>

                    {/* Right decoration */}
                    <motion.div
                        className="absolute -right-2 bottom-1/4 hidden lg:block"
                        animate={{ y: [0, 12, 0], rotate: [5, -5, 5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        <MinionBuddy className="scale-90" />
                    </motion.div>

                    {/* Photo print */}
                    <div className="relative w-full max-w-[760px]">

                        <motion.div
                            className="absolute -right-5 -top-7 z-20 rounded-full border-4 border-white bg-[#FFD928] p-3 text-[#173B68] shadow-md sm:-right-7"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <Star size={23} fill="currentColor" />
                        </motion.div>

                        <motion.div
                            className="relative rounded-[30px] border-[5px] border-[#2864A5] bg-white p-3 shadow-[9px_10px_0_#173B68] sm:rounded-[36px] sm:border-[7px] sm:p-5"
                            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Yellow title strip */}
                            <div className="mb-4 flex items-center justify-between rounded-2xl bg-[#FFD928] px-4 py-3 sm:px-6">
                                <div className="text-left">
                                    <p className="text-[10px] font-black tracking-[0.3em] text-[#2864A5]">
                                        SPECIAL EDITION
                                    </p>
                                    <p className="text-lg font-black tracking-[0.15em] text-[#173B68] sm:text-xl">
                                        YOU & ME
                                    </p>
                                </div>

                                <Camera
                                    size={27}
                                    className="text-[#173B68]"
                                />
                            </div>

                            {/* Photo area */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current.src}
                                    className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#E8EDF2] shadow-inner"
                                    initial={{
                                        opacity: 0,
                                        scale: 0.96,
                                        rotate: -1.5,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        rotate: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.96,
                                        rotate: 1.5,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={current.src}
                                        alt={current.caption}
                                        className={`absolute inset-0 z-10 h-full w-full object-contain transition-opacity duration-300 ${
                                            imageLoaded ? 'opacity-100' : 'opacity-0'
                                        }`}
                                        onLoad={() => setImageLoaded(true)}
                                        onError={() => setImageLoaded(false)}
                                    />

                                    {!imageLoaded && (
                                        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-3 text-[#2864A5]">
                                            <Camera size={38} />
                                            <p className="text-sm font-bold">
                                                Loading our memory...
                                            </p>
                                            <p className="break-all px-4 text-xs text-[#526174]">
                                                public{current.src}
                                            </p>
                                        </div>
                                    )}

                                    {/* Photo number */}
                                    <div className="absolute bottom-3 right-3 z-20 rounded-full bg-[#173B68]/80 px-3 py-1 text-xs font-bold tracking-widest text-white backdrop-blur-sm">
                                        {current.label} / 03
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Caption */}
                            <div className="px-2 pb-1 pt-5">
                                <p className="text-center text-base font-black text-[#173B68] sm:text-lg">
                                    {current.caption}
                                </p>

                                <p className="mt-1 text-center text-[10px] font-bold tracking-[0.25em] text-[#8A96A5]">
                                    OUR LITTLE WORLD
                                </p>
                            </div>

                            {/* Photo indicators */}
                            <div className="mt-4 flex justify-center gap-2">
                                {photos.map((photo, index) => (
                                    <button
                                        key={photo.src}
                                        onClick={() => {
                                            setImageLoaded(false);
                                            setActivePhoto(index);
                                        }}
                                        aria-label={`Lihat foto ${index + 1}`}
                                        className={`h-2.5 rounded-full transition-all duration-300 ${
                                            index === activePhoto
                                                ? 'w-9 bg-[#2864A5]'
                                                : 'w-2.5 bg-[#C8D0D8] hover:bg-[#FFD928]'
                                        }`}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Bottom decoration */}
                        <motion.div
                            className="absolute -bottom-5 -left-5 z-20 rounded-full border-4 border-white bg-[#FFD928] p-3 text-[#2864A5] shadow-md sm:-left-7"
                            animate={{ y: [0, -7, 0], rotate: [0, 8, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <Heart size={22} fill="currentColor" />
                        </motion.div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="mt-9 flex items-center gap-5">
                    <button
                        onClick={previousPhoto}
                        className="minion-icon-button"
                        aria-label="Foto sebelumnya"
                    >
                        <ArrowLeft size={20} />
                    </button>

                    <div className="min-w-[65px]">
                        <p className="text-sm font-black text-[#173B68]">
                            {String(activePhoto + 1).padStart(2, '0')}
                            <span className="mx-1 text-[#9AA5B1]">/</span>
                            {String(photos.length).padStart(2, '0')}
                        </p>
                        <p className="text-[9px] font-bold tracking-widest text-[#526174]">
                            PHOTO STRIP
                        </p>
                    </div>

                    <button
                        onClick={nextPhoto}
                        className="minion-icon-button"
                        aria-label="Foto berikutnya"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>

                <p className="mt-5 flex items-center gap-2 text-xs font-medium text-[#526174]">
                    <Heart size={14} fill="#FFD928" className="text-[#FFD928]" />
                    A tiny gallery of our story
                    <Heart size={14} fill="#FFD928" className="text-[#FFD928]" />
                </p>

                {/* Continue */}
                <button
                    onClick={onContinue}
                    className="minion-primary-button mt-7"
                >
                    NEXT CHAPTER <ArrowRight size={18} />
                </button>
            </section>

            <footer className="relative z-10 pt-5 text-center text-[10px] font-bold tracking-[0.3em] text-[#2864A5]">
                BELLO! OUR LITTLE WORLD
            </footer>
        </motion.main>
    );
}
