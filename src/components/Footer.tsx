import { GridPattern } from '@/components/GridPattern'

export function Footer() {
  return (
    <footer className="relative pb-20 pt-5 sm:pb-32 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-32 text-zinc-900/10 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <div className="relative text-center text-sm text-zinc-600">
        <p>Copyright &copy; 2023 <a href="https://duras.me">Jakub Duras</a></p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  )
}
