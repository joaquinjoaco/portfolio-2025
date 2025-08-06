"use client"

import Link from "next/link";

const Error = () => {
    const faces = ["(>_<)", "(o^^)o", "(^-^*)", "(='X'=)", "(;-;)", "(^_^)b", "\(o_o)/", "(·_·)", "(·.·)", "(≥o≤)", "(˚Δ˚)b", "\(^Д^)/"]
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <p className="tracking-tighter font-extrabold text-[9rem] lg:text-[16rem] mb-4">
                {faces[Math.floor(Math.random() * faces.length)]}
            </p>
            <p className="font-bold mb-2">
                Well... you found an unexpected error...
            </p>
            <Link href="/" className="underline tracking-tighter" title="Go back to the main page">
                Take me to &apos; / &apos;
            </Link>
        </div>
    )
}

export default Error;