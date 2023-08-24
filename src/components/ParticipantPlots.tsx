'use client'

import React, { useEffect, useRef } from 'react'

const xValue = ['Prior Experience', 'Education', 'Occupation', 'Paid', 'Intr. Motiv.']

const yValue = [3, 11, 10, 6, 10]
const yValue2 = [3, 17, 15, 6, 12]

const trace1 = {
  x: xValue,
  y: yValue,
  type: 'bar',
  text: yValue.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  opacity: 0.5,
  marker: {
    color: 'rgb(158,202,225)',
    line: {
      color: 'rgb(8,48,107)',
      width: 1.5,
    },
  },
} as const

const trace2 = {
  x: xValue,
  y: yValue2,
  type: 'bar',
  text: yValue2.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color: 'rgba(58,200,225,.5)',
    line: {
      color: 'rgb(8,48,107)',
      width: 1.5,
    },
  },
} as const

const data = [trace1, trace2]

const layout = {
  title: 'Cumulative profile points between groups',
}

export function ParticipantPlots() {
  const plotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ;(async () => {
      if (!plotRef.current) return

      plotRef.current.innerText = 'Loading plots...'

      const Plotly = await import('plotly.js')

      plotRef.current.innerText = ''

      Plotly.newPlot(plotRef.current, data, layout)
    })()
  }, [])

  return <div ref={plotRef} />
}
