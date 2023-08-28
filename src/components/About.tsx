import Image from 'next/image'
import Link from 'next/link'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import aboutImage from '@/images/logo.svg'

function PdfIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z" />
    </svg>
  )
}

function GithubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-zinc-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-zinc-50 pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 flex h-44 w-44 items-center justify-center overflow-hidden rounded-full bg-indigo-600 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="ove inset-0 block h-2/3 w-2/3"
              src={aboutImage}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionHeading number="5" id="author-title">
              About
            </SectionHeading>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl">
              <span className="block text-indigo-600">Chips and Code –</span>{' '}
              reimagined Nand2Tetris tools powered by the modern web.
            </p>
            <p className="mt-4 text-lg tracking-tight text-zinc-700">
              <a
                href="https://www.nand2tetris.org/"
                target="_blank"
                className="underline"
              >
                Nand2Tetris
              </a>{' '}
              is a very popular course that introduces a wide range of computer
              principles by building a virtual computer from the group up.
              However, it is accompanied by an older Java desktop application
              inaccessible from a large range of devices (like tablets,
              Chromebooks, smartphones... -{' '}
              <a
                href="https://www.pewresearch.org/internet/2019/03/07/use-of-smartphones-and-social-media-is-common-across-most-emerging-economies/"
                target="_blank"
                className="underline"
              >
                one third
              </a>
              of people from developing countries relies on smartphones!). Chips
              and Code aims to reimplement the same functionality using the
              modern web with improved user experience.
            </p>

            <p className="mt-4 text-lg tracking-tight text-zinc-700">
              This webpage captures just a small part of the full research done
              as a master&apos;s thesis at the{' '}
              <a
                href="https://www.universityofgalway.ie"
                target="_blank"
                className="underline"
              >
                University of Galway
              </a>
              . For context and more information, feel free to check the full
              thesis document or take a peek at the code.
            </p>

            <p className="mt-8">
              <Link
                href="/main.pdf"
                target="_blank"
                className="inline-flex items-center text-base font-medium tracking-tight text-indigo-600"
              >
                <PdfIcon className="h-8 w-8 fill-current" />
                <span className="ml-3">Open Thesis</span>
              </Link>

              <Link
                href="https://github.com/durasj/chipsandcode"
                target="_blank"
                className="ml-8 inline-flex items-center text-base font-medium tracking-tight text-indigo-600"
              >
                <GithubIcon className="h-8 w-8 fill-current" />
                <span className="ml-3">Check code on Github</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
