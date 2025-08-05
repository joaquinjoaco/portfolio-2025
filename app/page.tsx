import { projects } from '@/projects';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-3 justify-center items-center mx-8 my-6 text-xs tracking-tighter">
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

      {/* SELECTED PROJECTS */}
      <div className="flex flex-row justify-between gap-x-4 mx-8">
        <div className="mb-3 w-[60%] flex flex-row justify-between items-center text-xs font-extrabold tracking-tighter">
          <span></span>
          <span>SELECTED PROJECTS</span>
        </div>
        <div className="w-[80%]"></div>
      </div>

      {projects.map((project, idx) => (
        <div key={idx} className="flex flex-col mx-8">
          <div className="flex flex-row justify-between gap-x-4">
            <Link
              className="w-[60%] group flex flex-row justify-between items-center text-xs font-semibold tracking-tighter"
              href={project.repository_url}
              target="_blank"
              title={"GitHub repository"}
            >
              <span className="group-hover:text-gray-500">{project.year}</span>
              <span className="group-hover:text-gray-500">{project.title.toUpperCase()}</span>
            </Link>

            <div className="w-[80%] flex flex-row justify-start items-center text-xs font-semibold tracking-tighter">
              <Link
                href={project.demo_url}
                target="_blank"
                className="hover:text-gray-500"
              >
                {project.demo_url}
              </Link>
            </div>
          </div>

        </div>
      ))}

    </div>
  );
}
