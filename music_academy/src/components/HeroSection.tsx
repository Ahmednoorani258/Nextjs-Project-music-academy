import Link from 'next/link'

export default function HeroSection(){
    return(
        <div className="text-white h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <div className="p-4 relative z-10 w-full text-center">
                <h1>Master The Art Of Music</h1>
                <p>Dive inti our comprehensive music courses and transform your musicaljourney today. Whether you are a beginner or looking to refine your skill join us to unlock your  true potential</p>
                <div className="mt-4">
                    <Link href={'/courses'}> Explore Courses</Link>
                </div>
            </div>
        </div>
    )
}