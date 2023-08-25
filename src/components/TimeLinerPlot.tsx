'use client'

import { Layout, ScatterData } from 'plotly.js'
import { Plot } from './Plot'

const trace1 = {
  x: [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
  y: [12.79, 260.65, 264.32, 105.64, 90.06, 46.27, 51.36, 102.85, 85.51, 5.37],
  fill: 'tozerox',
  fillcolor: 'rgba(55, 48, 163, 0.2)',
  line: { color: 'transparent' },
  name: 'Group A',
  showlegend: false,
  type: 'scatter',
} satisfies Partial<ScatterData>
const trace4 = {
  x: [1, 2, 3, 4, 5],
  y: [9.08, 173.08, 183.58, 78.5, 68.17],
  line: { color: 'rgb(55, 48, 163)' },
  mode: 'lines',
  name: 'Group A',
  type: 'scatter',
} satisfies Partial<ScatterData>

const trace2 = {
  x: [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
  y: [
    245.37, 551.12, 570.79, 319.0, 282.07, 144.93, 133.5, 322.21, 331.04, 93.3,
  ],
  fill: 'tozerox',
  fillcolor: 'rgba(39, 39, 42, 0.2)',
  line: { color: 'transparent' },
  name: 'Group B',
  showlegend: false,
  type: 'scatter',
} satisfies Partial<ScatterData>
const trace5 = {
  x: [1, 2, 3, 4, 5],
  y: [169.33, 441.08, 446.5, 226.25, 213.5],
  line: { color: 'rgb(39, 39, 42)' },
  mode: 'lines',
  name: 'Group B',
  type: 'scatter',
} satisfies Partial<ScatterData>
const data = [trace1, trace2, trace4, trace5]

const layout = {
  title: 'Time it took participants to perform tasks',
  paper_bgcolor: 'rgb(255,255,255)',
  plot_bgcolor: '#e4e4e7',
  xaxis: {
    gridcolor: 'rgb(255,255,255)',
    range: [1, 5],
    showgrid: true,
    showline: false,
    showticklabels: true,
    tickcolor: 'rgb(127,127,127)',
    ticks: 'outside',
    tickvals: [1, 2, 3, 4, 5],
    ticktext: [
      'Preparation',
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
    ],
    zeroline: false,
    dtick: 1,
  },
  yaxis: {
    title: {
      text: 'Time (s)',
    },
    gridcolor: 'rgb(255,255,255)',
    showgrid: true,
    showline: false,
    showticklabels: true,
    tickcolor: 'rgb(127,127,127)',
    ticks: 'outside',
    zeroline: false,
  },
  modebar: { orientation: 'v' },
} satisfies Partial<Layout>

export function TimeLinerPlot() {
  return <Plot data={data} layout={layout} />
}
