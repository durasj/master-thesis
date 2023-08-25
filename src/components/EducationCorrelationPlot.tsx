'use client'

import { BoxPlotData, Layout, ScatterData } from 'plotly.js'
import { linearRegression, linearRegressionLine } from 'simple-statistics'

import { Plot } from './Plot'

const trace1 = {
  x: [2, 0, 0, 1, 2, 1, 1, 2, 1, 1, 0, 0],
  y: [552, 415, 1086, 918, 180, 455, 298, 509, 629, 139, 771, 197],
  xaxis: 'x',
  yaxis: 'y',
  boxpoints: 'all',
  jitter: 0.3,
  pointpos: 0,
  name: 'Group A',
  marker: {
    color: '#3730a3',
    size: 10,
  },

  // Hide whisker boxes
  fillcolor: 'rgba(255,255,255,0)',
  line: { color: 'rgba(255,255,255,0)' },
  hoverinfo: 'none',

  mode: 'markers',
  type: 'box',
} satisfies Partial<BoxPlotData>

const trace2 = {
  x: [1, 1, 2, 2, 0, 1, 2, 2, 2, 2, 2, 2],
  y: [1202, 1885, 1469, 1724, 2399, 2210, 1002, 1713, 1061, 928, 1561, 806],
  xaxis: 'x',
  yaxis: 'y2',
  boxpoints: 'all',
  jitter: 0.3,
  pointpos: 0,
  name: 'Group B',
  marker: {
    color: '#71717a',
    size: 10,
  },

  // Hide whisker boxes
  fillcolor: 'rgba(255,255,255,0)',
  line: { color: 'rgba(255,255,255,0)' },
  hoverinfo: 'none',

  mode: 'markers',
  type: 'box',
} satisfies Partial<BoxPlotData>

const regressionA = linearRegressionLine(
  linearRegression(trace1.x.map((x, i) => [x, trace1.y[i]])),
)
const regressionB = linearRegressionLine(
  linearRegression(trace2.x.map((x, i) => [x, trace2.y[i]])),
)

const trendLineA = {
  x: [Math.min(...trace1.x), Math.max(...trace1.x)],
  y: [regressionA(Math.min(...trace1.x)), regressionA(Math.max(...trace1.x))],
  xaxis: 'x',
  yaxis: 'y',
  name: 'Group A Trend',
  marker: {
    color: '#3730a3',
  },
  mode: 'lines',
  hoverinfo: 'skip',
  type: 'scatter',
} satisfies Partial<ScatterData>

const trendLineB = {
  x: [Math.min(...trace2.x), Math.max(...trace2.x)],
  y: [regressionB(Math.min(...trace2.x)), regressionB(Math.max(...trace2.x))],
  xaxis: 'x',
  yaxis: 'y2',
  name: 'Group B Trend',
  marker: {
    color: '#71717a',
  },
  mode: 'lines',
  hoverinfo: 'skip',
  type: 'scatter',
} satisfies Partial<ScatterData>

const data = [trace1, trace2, trendLineA, trendLineB]

const layout = {
  title: 'Relation between education and total time',
  modebar: { orientation: 'v' },
  yaxis: {
    title: 'Time (s) - Group A',
    fixedrange: true,
    titlefont: { color: '#3730a3' },
    tickfont: { color: '#3730a3' },
    showgrid: false,
    showline: false,
  },
  yaxis2: {
    title: 'Time (s) - Group B',
    side: 'right',
    fixedrange: true,
    titlefont: { color: '#71717a' },
    tickfont: { color: '#71717a' },
    overlaying: 'y',
    showgrid: false,
    showline: false,
  },
  xaxis: {
    title: 'Education',
    domain: [0, 2],
    dtick: 1,
  },
  legend: { x: 1.5, xanchor: 'right' },
} satisfies Partial<Layout>

export function EducationCorrelationPlot() {
  return <Plot data={data} layout={layout} />
}
