'use client'
import { useRouter } from "next/navigation";
const Intro = () => {
    const router = useRouter();
    return (
        <div className="w-full flex flex-col items-center space-y-4">
            <div className="hover:cursor-pointer flex flex-col space-y-4 items-center justify-center" onClick={() => { router.push('/quiz') }}>
                <div className="rounded-[20px] w-[150px] h-[150px]  hover:scale-[1.01] active:scale-[0.98] bg-contain bg-[url(/tango.png)] shadow-xl">
                </div>
                <div className="text-[24px]">
                    日本語
                </div>
            </div>
            <p className="opacity-50">
                单词练习，一本满足~
            </p>
        </div>
    )
}

export default Intro;
