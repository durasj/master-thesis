'use client'

import React, { useEffect, useRef } from 'react'
import type { Data, Layout } from 'plotly.js'

/**
 * Hacky way to get plotly to work as next.js dynamic without SSR wouldn't work with react-plotly
 */
export function Plot({ data, layout }: { data: Data[], layout: Partial<Layout> }) {
  const plotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ;(async () => {
      if (!plotRef.current) return

      plotRef.current.innerText = 'Loading plots...'

      const Plotly = await import('plotly.js')

      plotRef.current.innerText = ''

      Plotly.newPlot(plotRef.current, data, layout, { autosizable: true, responsive: true })
    })()
  }, [])

  return <div ref={plotRef} />
}
