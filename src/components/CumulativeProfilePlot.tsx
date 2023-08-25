'use client'

import { Layout } from 'plotly.js'
import { Plot } from './Plot'

const xValue = [
  'Prior Experience',
  'Education',
  'Occupation',
  'Paid',
  'Intrinsic Motivation',
]

const yValue = [3, 11, 10, 6, 10]
const yValue2 = [3, 19, 15, 6, 12]

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
  title: 'Cumulative profile points between groups',
  yaxis: {
    title: {
      text: 'Points',
    },
  },
  modebar: { orientation: 'v' },
} satisfies Partial<Layout>

export function CumulativeProfilePlot() {
  return <Plot data={data} layout={layout} />
}
