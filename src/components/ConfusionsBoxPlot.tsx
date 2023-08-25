'use client'

import { BoxPlotData, Layout } from 'plotly.js'
import { Plot } from './Plot'

const trace1 = {
  y: [1, 0, 1, 1, 0, 2, 0, 0, 1, 0, 1, 0],
  boxpoints: 'all',
  jitter: 0.3,
  pointpos: -1.8,
  name: 'Group A',
  marker: {
    color: '#3730a3',
  },
  type: 'box',
} satisfies Partial<BoxPlotData>

const trace2 = {
  y: [2, 4, 3, 5, 4, 2, 2, 3, 3, 2, 4, 0],
  boxpoints: 'all',
  jitter: 0.3,
  pointpos: -1.8,
  name: 'Group B',
  marker: {
    color: '#a1a1aa',
  },
  type: 'box',
} satisfies Partial<BoxPlotData>

const data = [trace1, trace2]

const layout = {
  title: 'Number of times participants were confused',
  modebar: { orientation: 'v' },
  yaxis: {
    title: 'Count',
    dtick: 1
  },
} satisfies Partial<Layout>

export function ConfusionsBoxPlot() {
  return <Plot data={data} layout={layout} />
}
