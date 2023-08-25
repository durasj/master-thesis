'use client'

import { Layout, ScatterData } from 'plotly.js'
import { Plot } from './Plot'

const trace1 = {
  x: [552, 415, 1086, 918, 180, 455, 298, 509, 629, 139, 771, 197],
  y: [77.5, 85, 92.5, 85, 82.5, 87.5, 97.5, 100, 65, 95, 77.5, 95],
  name: 'Group A',
  marker: {
    color: '#3730a3',
    size: 10,
  },
  mode: 'markers',
  type: 'scatter',
} satisfies Partial<ScatterData>

const trace2 = {
  x: [1202, 1885, 1469, 1724, 2399, 2210, 1002, 1713, 1061, 928, 1561, 806],
  y: [82.5, 70, 90, 37.5, 77.5, 92.5, 97.5, 87.5, 65, 90, 75, 90],
  name: 'Group B',
  marker: {
    color: '#71717a',
    size: 10,
  },
  mode: 'markers',
  type: 'scatter',
} satisfies Partial<ScatterData>

const data = [trace1, trace2]

const layout = {
  title: 'Relation between total time and SUS score',
  modebar: { orientation: 'v' },
  yaxis: {
    title: 'Score',
    fixedrange: true,
  },
  xaxis: {
    title: 'Time (s)',
  },
} satisfies Partial<Layout>

export function TimeUsabilityPlot() {
  return <Plot data={data} layout={layout} />
}
