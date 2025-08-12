import { projects } from '@/projects';
import { ExternalLink } from 'lucide-react';
import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';

const Arimo = localFont({
  src: './fonts/Arimo-VariableFont_wght.ttf',
})

export default function Home() {

  return (
    <div className="relative h-[100dvh] flex flex-col">

      <div className="flex-shrink-0">
        <div className="hidden sm:grid grid-cols-3 justify-between items-center mx-8 my-6 text-xs tracking-tighter">
          <span className="text-start font-extrabold">
            JOAQUÍN GÓMEZ
          </span>
          <span className="text-center">
            PORTFOLIO
          </span>
          <div className="flex items-center justify-end">
            <Image
              src="/favicon.ico"
              alt="favicon"
              width={16}
              height={16}
            />
          </div>
        </div>

        <div className="flex flex-row justify-between mx-8 sm:hidden">
          <div className="mb-4 mt-6 w-[64%] flex flex-row justify-between items-center text-xs font-extrabold tracking-tighter">
            <span></span>
            <span>JOAQUÍN GÓMEZ</span>
          </div>
          <div className="w-[60%]"> </div>
          <div className="flex items-center justify-end">
            <Image
              src="/favicon.ico"
              alt="favicon"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between min-h-0">
        <div className="flex-shrink-0">
          {/* SELECTED PROJECTS */}
          <div className="flex flex-row justify-between md:gap-x-4 mx-8">
            <div className="mb-3 w-[60%] flex flex-row justify-between items-center text-xs font-extrabold tracking-tighter">
              <span></span>
              <span>SELECTED PROJECTS</span>
            </div>
            <div className="w-[60%]"></div>
          </div>

          {/* Projects list */}
          <div className="space-y-[6px] overflow-y-auto max-h-[40vh]">
            {projects.map((project, idx) => (
              <div key={idx} className="flex flex-col mx-8">
                <div className="flex flex-row justify-between md:gap-x-4">
                  <Link
                    className="w-[80%] group flex flex-row justify-between items-center text-xs tracking-tight"
                    href={project.repository_url}
                    target="_blank"
                    title={"GitHub repository"}
                  >
                    <span className="group-hover:text-gray-500">{project.year}</span>
                    <span className="hidden xl:flex items-center gap-x-2 opacity-0 group-hover:opacity-100 text-gray-500">
                      <ExternalLink className="size-3" />
                      Github Repository
                    </span>
                    <span className="group-hover:text-gray-500">{project.title.toUpperCase()}</span>
                  </Link>

                  <div className="w-[80%] flex flex-row justify-end sm:justify-between items-center text-xs tracking-tight">
                    {project.demo_url !== "local" ?
                      <Link
                        href={project.demo_url}
                        target="_blank"
                        className="w-full hover:text-gray-500 text-ellipsis whitespace-nowrap overflow-hidden max-w-32 lg:max-w-sm"
                        title={project.data_title}
                      >
                        {project.demo_url}
                      </Link>
                      :
                      <span className="cursor-not-allowed text-gray-500 text-ellipsis whitespace-nowrap overflow-hidden max-w-sm" >
                        Intended to be run locally
                      </span>
                    }
                    {project.made_with.length > 0 &&
                      project.made_with.map((person, idx) => (
                        <Link
                          key={idx}
                          href={person.url}
                          target="_blank"
                          className="hidden lg:flex hover:text-gray-500 text-ellipsis whitespace-nowrap overflow-hidden max-w-sm"
                          title={person.name}
                        >
                          (W/ {person.name})
                        </Link>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="flex-1 flex items-center justify-center mx-8">
          <a
            className={`${Arimo.className} text-[1.10rem] sm:text-3xl font-bold hover:underline`}
            href="mailto:joaquingomezleites@gmail.com"
          >
            (JOAQUINGOMEZLEITES<span className="text-[#599564]">@</span>GMAIL.COM)
          </a>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 flex flex-col text-xs mx-8 mb-8 ml-auto">
          <Link
            className="hover:text-gray-500"
            href="https://www.linkedin.com/in/joaquingomezleites/"
            target="_blank"
          >
            LINKEDIN
          </Link>
          <Link
            className="hover:text-gray-500"
            href="https://github.com/joaquinjoaco"
            target="_blank"
          >
            GITHUB
          </Link>
        </div>
      </div>
    </div>
  );
}