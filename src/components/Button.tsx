import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none',
  outline:
    'inline-flex justify-center rounded-md border py-[calc(theme(spacing.1)-1px)] px-[calc(theme(spacing.4)-1px)] text-base font-semibold tracking-tight focus:outline-none',
}

const variantStyles = {
  solid: {
    zinc:
      'bg-zinc-900 text-white hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 active:bg-zinc-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-zinc-900',
    indigo: 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:bg-indigo-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-indigo-600',
    white:
      'bg-white text-indigo-600 hover:text-indigo-700 focus-visible:text-indigo-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-indigo-50 active:text-indigo-900/80 disabled:opacity-40 disabled:hover:text-indigo-600',
  },
  outline: {
    zinc:
      'border-zinc-200 text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 active:border-zinc-200 active:bg-zinc-50 active:text-zinc-900/70 disabled:opacity-40 disabled:hover:border-zinc-200 disabled:hover:bg-transparent',
    indigo: 'border-indigo-300 text-indigo-600 hover:border-indigo-400 hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:text-indigo-600/70 disabled:opacity-40 disabled:hover:border-indigo-300 disabled:hover:bg-transparent',
  },
}

type VariantKey = keyof typeof variantStyles
type ColorKey<Variant extends VariantKey> =
  keyof (typeof variantStyles)[Variant]

type ButtonProps<
  Variant extends VariantKey,
  Color extends ColorKey<Variant>,
> = {
  variant?: Variant
  color?: Color
} & (
  | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
  | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
      href?: undefined
    })
)

export function Button<
  Color extends ColorKey<Variant>,
  Variant extends VariantKey = 'solid',
>({ variant, color, className, ...props }: ButtonProps<Variant, Color>) {
  variant = variant ?? ('solid' as Variant)
  color = color ?? ('zinc' as Color)

  className = clsx(
    baseStyles[variant],
    // @ts-ignore
    variantStyles[variant][color],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
