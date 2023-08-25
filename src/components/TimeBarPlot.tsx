'use client'

import { Layout, ScatterData } from 'plotly.js'
import { Plot } from './Plot'

const groupA = [9.08, 173.08, 183.58, 78.5, 68.17]
const groupB = [169.33, 441.08, 446.5, 226.25, 213.5]

const groupATotal = groupA.reduce((acc, n) => acc + n).toFixed(2)
const groupBTotal = groupB.reduce((acc, n) => acc + n).toFixed(2)

const trace1 = {
  x: [groupA[0], groupB[0]],
  y: ['Group A', 'Group B'],
  name: 'Preparation',
  orientation: 'h',
  marker: {
    color: '#1e1b4b',
    width: 1,
  },
  type: 'bar',
} satisfies Partial<ScatterData>

const trace2 = {
  x: [groupA[1], groupB[1]],
  y: ['Group A', 'Group B'],
  name: 'First Task',
  orientation: 'h',
  marker: {
    color: '#312e81',
    width: 1,
  },
  type: 'bar',
} satisfies Partial<ScatterData>

const trace3 = {
  x: [groupA[2], groupB[2]],
  y: ['Group A', 'Group B'],
  name: 'Second Task',
  orientation: 'h',
  marker: {
    color: '#4f46e5',
    width: 1,
  },
  type: 'bar',
} satisfies Partial<ScatterData>

const trace4 = {
  x: [groupA[3], groupB[3]],
  y: ['Group A', 'Group B'],
  name: 'Third Task',
  orientation: 'h',
  marker: {
    color: '#818cf8',
    width: 1,
  },
  type: 'bar',
} satisfies Partial<ScatterData>

const trace5 = {
  x: [groupA[4], groupB[4]],
  y: ['Group A', 'Group B'],
  name: 'Fourth Task',
  orientation: 'h',
  marker: {
    color: '#c7d2fe',
    width: 1,
  },
  error_x: {
    type: 'data',
    array: [190.01, 326.18],
    visible: true,
  },
  hoverinfo: 'text',
  hovertext: [
    `(${groupA[4]}, Group A) Fourth Task<br>Total: ${groupATotal} ± 190.01`,
    `(${groupB[4]}, Group B) Fourth Task<br>Total: ${groupBTotal} ± 326.18`,
  ],
  type: 'bar',
} satisfies Partial<ScatterData>

const layout = {
  title: 'Time it took participants to perform tasks',
  barmode: 'stack',
  xaxis: {
    title: {
      text: 'Time (s)',
    },
  },
  modebar: { orientation: 'v' },
} satisfies Partial<Layout>

const data = [trace1, trace2, trace3, trace4, trace5]

export function TimeBarPlot() {
  return <Plot data={data} layout={layout} />
}
