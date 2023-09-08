'use client'

import { Layout } from 'plotly.js'
import { Plot } from './Plot'

const xValue = [
  'By Global Web Market Share',
  'By Reliance on Smartphones in Developing Countries',
]

const yValue = [98, 98]
const yValue2 = [44, 71]

const trace1 = {
  name: 'Proposed Software',
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
  name: 'Existing Software',
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
  yaxis: {
    title: {
      text: '%',
    },
  },
  modebar: { orientation: 'v' },
} satisfies Partial<Layout>

export function SizeComparisonPlot() {
  return <Plot data={data} layout={layout} />
}
