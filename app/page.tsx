import { projects } from '@/projects';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
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

      <div className="flex flex-row justify-between gap-x-4 mx-8 sm:hidden">
        <div className="my-6 w-[60%] flex flex-row justify-between items-center text-[0.70rem] font-extrabold tracking-tighter">
          <span></span>
          <span>JOAQUÍN GÓMEZ</span>
        </div>
        <div className="w-[60%]"></div>
        <div className="flex items-center justify-end">
          <Image
            src="/favicon.ico"
            alt="favicon"
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* SELECTED PROJECTS */}
      <div className="flex flex-row justify-between gap-x-4 mx-8">
        <div className="mb-3 w-[60%] flex flex-row justify-between items-center text-[0.70rem] sm:text-xs font-extrabold tracking-tighter">
          <span></span>
          <span>SELECTED PROJECTS</span>
        </div>
        <div className="w-[60%]"></div>
      </div>
      <div className="space-y-[6px]">
        {projects.map((project, idx) => (
          <div key={idx} className="flex flex-col mx-8">
            <div className="flex flex-row justify-between gap-x-4">
              <Link
                className="w-[80%] group flex flex-row justify-between items-center text-[0.70rem] sm:text-xs tracking-tight"
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

              <div className="w-[80%] flex flex-row justify-end sm:justify-between items-center text-[0.70rem] sm:text-xs tracking-tight">
                {project.demo_url !== "local" ?
                  <Link
                    href={project.demo_url}
                    target="_blank"
                    className="hover:text-gray-500 text-ellipsis whitespace-nowrap overflow-hidden max-w-32 lg:max-w-sm"
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
  );
}
