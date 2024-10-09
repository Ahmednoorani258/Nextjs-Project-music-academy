"use client";
import Link from 'next/link';
import { Button } from './ui/moving-border';
import { AuroraBackground } from './ui/aurora-background';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <div className="text-white h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
            <AuroraBackground className="absolute inset-0 h-full w-full">
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center w-full px-4"
            >
                <div className="p-4 relative z-10 text-center max-w-2xl">
                    <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-600'>
                        Master The Art Of Music
                    </h1>
                    <p className='mt-4 font-normal text-base md:text-lg text-neutral-300'>
                        Dive into our comprehensive music courses and transform your musical journey today. Whether you are a beginner or looking to refine your skills, join us to unlock your true potential.
                    </p>
                    <div className="mt-4">
                        <Link href={'/courses'}>
                            <Button>Explore Courses</Button>
                        </Link>
                    </div>
                </div>
            </motion.div>
            </AuroraBackground>
        </div>
    );
}
