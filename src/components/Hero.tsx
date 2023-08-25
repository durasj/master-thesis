import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'

export function Hero() {
  return (
    <header className="overflow-hidden bg-zinc-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-1 lg:row-span-2">
          <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-6xl bg-zinc-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
        </div>
        <div className="bg-white pt-16 lg:col-span-11 lg:bg-transparent lg:pt-0">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-zinc-900 sm:text-6xl">
              Research Behind {'\u00A0'} Chips and Code
            </h1>
            <p className="mt-4 text-3xl text-zinc-600">
              Comparative study results showing usability improvements moving
              the existing desktop learning tool to the web.
            </p>
            <div className="mt-8 mb-16 flex gap-4">
              <Button
                href="https://chipsandcode.com"
                target="_blank"
                color="indigo"
              >
                Chips and Code
              </Button>

              <Button
                href="https://github.com/durasj/chipsandcode"
                target="_blank"
                variant="outline"
                color="zinc"
              >
                Repository
              </Button>

              <Button
                href="/main.pdf"
                target="_blank"
                variant="outline"
                color="zinc"
              >
                Thesis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
