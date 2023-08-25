'use client'

import { Layout } from 'plotly.js'
import { Plot } from './Plot'

const xValue = ['Windows', 'macOS', 'Linux', 'Laptop', 'Desktop']

const yValue = [9, 1, 2, 8, 4]
const yValue2 = [9, 2, 1, 9, 3]

const trace1 = {
  name: 'Group A',
  x: xValue,
  y: yValue,
  type: 'bar',
  text: yValue.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color: '#3730a3',
    line: {
      color: '#1e1b4b',
      width: 1.5,
    },
  },
} as const

const trace2 = {
  name: 'Group B',
  x: xValue,
  y: yValue2,
  type: 'bar',
  text: yValue2.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color: '#e4e4e7',
    line: {
      color: '#a1a1aa',
      width: 1.5,
    },
  },
} as const

const data = [trace1, trace2]

const layout = {
  title: 'Platforms used by participants',
  yaxis: {
    title: {
      text: 'Count',
    },
  },
  modebar: { orientation: 'v' },
} satisfies Partial<Layout>

export function PlatformProfilePlot() {
  return <Plot data={data} layout={layout} />
}
