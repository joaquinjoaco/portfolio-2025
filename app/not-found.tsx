import Link from "next/link";

const NotFound = () => {
    const faces = ["(>_<)", "(o^^)o", "(^-^*)", "(='X'=)", "(;-;)", "(^_^)b", "\(o_o)/", "(·_·)", "(·.·)", "(≥o≤)", "(˚Δ˚)b", "\(^Д^)/"]
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <p className="tracking-tight font-semibold text-[9rem] lg:text-[16rem] mb-4">
                {faces[Math.floor(Math.random() * faces.length)]}
            </p>
            <p className="font-bold mb-2">
                Could not find what you were looking for...
            </p>
            <Link href="/" className="underline tracking-tighter" title="Go back to the main page">
                Go back to ' / '
            </Link>
        </div>
    )
}

export default NotFound;