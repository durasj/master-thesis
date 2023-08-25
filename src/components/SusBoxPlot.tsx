'use client'

import { BoxPlotData, Layout, ScatterData } from 'plotly.js'
import { Plot } from './Plot'

const trace1 = {
  y: [77.5, 85, 92.5, 85, 82.5, 87.5, 97.5, 100, 65, 95, 77.5, 95],
  boxpoints: 'all',
  jitter: 0.3,
  pointpos: -1.8,
  name: 'Group A',
  marker: {
    color: '#3730a3',
  },
  boxmean: 'sd',
  type: 'box',
} satisfies Partial<BoxPlotData>

const trace2 = {
  y: [82.5, 70, 90, 37.5, 77.5, 92.5, 97.5, 87.5, 65, 90, 75, 90],
  boxpoints: 'all',
  jitter: 0.3,
  pointpos: -1.8,
  name: 'Group B',
  marker: {
    color: '#a1a1aa',
  },
  boxmean: 'sd',
  type: 'box',
} satisfies Partial<BoxPlotData>

const adjectiveTraces = [
  {
    y: [25],
    xaxis: 'x2',
    yaxis: 'y',
    width: 1,
    showlegend: false,
    hoverinfo: 'skip',
    text: 'Worst<br>Imaginable',
    marker: { color: '#F24726' },
    insidetextanchor: 'middle',
    type: 'bar',
  },
  {
    y: [26.7],
    xaxis: 'x2',
    yaxis: 'y',
    width: 1,
    showlegend: false,
    hoverinfo: 'skip',
    text: 'Poor',
    marker: { color: '#FAC710' },
    insidetextanchor: 'middle',
    type: 'bar',
  },
  {
    y: [19.3],
    xaxis: 'x2',
    yaxis: 'y',
    width: 1,
    showlegend: false,
    hoverinfo: 'skip',
    text: 'OK',
    marker: { color: '#FEF445' },
    insidetextanchor: 'middle',
    type: 'bar',
  },
  {
    y: [9.7],
    xaxis: 'x2',
    yaxis: 'y',
    width: 1,
    showlegend: false,
    hoverinfo: 'skip',
    text: 'Good',
    marker: { color: '#CEE741' },
    insidetextanchor: 'middle',
    type: 'bar',
  },
  {
    y: [3.3],
    xaxis: 'x2',
    yaxis: 'y',
    width: 1,
    showlegend: false,
    hoverinfo: 'skip',
    text: 'Excellent',
    marker: { color: '#8FD14F' },
    insidetextanchor: 'middle',
    type: 'bar',
  },
  {
    y: [16],
    xaxis: 'x2',
    yaxis: 'y',
    width: 1,
    showlegend: false,
    hoverinfo: 'skip',
    text: 'Best<br>Imaginable',
    marker: { color: '#008000' },
    insidetextanchor: 'middle',
    type: 'bar',
  },
] satisfies Partial<ScatterData>[]

const gradeTraces = [
  {
    y: [51.6],
    xaxis: 'x3',
    yaxis: 'y',
    width: 1,
    showlegend: false,
    hoverinfo: 'skip',
    text: 'F',
    marker: { color: '#F24726' },
    insidetextanchor: 'middle',
    type: 'bar',
  },
  {
    y: [11],
    xaxis: 'x3',
    yaxis: 'y',
    width: 1,
    showlegend: false,
    hoverinfo: 'skip',
    text: 'D',
    marker: { color: '#FAC710' },
    insidetextanchor: 'middle',
    type: 'bar',
  },
  {
    y: [9.9],
    xaxis: 'x3',
    yaxis: 'y',
    width: 1,
    showlegend: false,
    hoverinfo: 'skip',
    text: 'C',
    marker: { color: '#FEF445' },
    insidetextanchor: 'middle',
    type: 'bar',
  },
  {
    y: [6.3],
    xaxis: 'x3',
    yaxis: 'y',
    width: 1,
    showlegend: false,
    hoverinfo: 'skip',
    text: 'B',
    marker: { color: '#CEE741' },
    insidetextanchor: 'middle',
    type: 'bar',
  },
  {
    y: [21.2],
    xaxis: 'x3',
    yaxis: 'y',
    width: 1,
    showlegend: false,
    hoverinfo: 'skip',
    text: 'A',
    marker: { color: '#8FD14F' },
    insidetextanchor: 'middle',
    type: 'bar',
  },
] satisfies Partial<ScatterData>[]

const acceptabilityTraces = [
  {
    y: [51.6],
    xaxis: 'x4',
    yaxis: 'y',
    width: 1,
    showlegend: false,
    hoverinfo: 'skip',
    text: 'Not<br>Acceptable',
    marker: { color: '#F24726' },
    insidetextanchor: 'middle',
    type: 'bar',
  },
  {
    y: [20.9],
    xaxis: 'x4',
    yaxis: 'y',
    width: 1,
    showlegend: false,
    hoverinfo: 'skip',
    text: 'Marginal',
    marker: { color: '#FEF445' },
    insidetextanchor: 'middle',
    type: 'bar',
  },
  {
    y: [27.5],
    xaxis: 'x4',
    yaxis: 'y',
    width: 1,
    showlegend: false,
    hoverinfo: 'skip',
    text: 'Acceptable',
    marker: { color: '#8FD14F' },
    insidetextanchor: 'middle',
    type: 'bar',
  },
] satisfies Partial<ScatterData>[]

const data = [
  trace1,
  trace2,
  ...adjectiveTraces,
  ...gradeTraces,
  ...acceptabilityTraces,
]

const layout = {
  title: 'SUS score comparison',
  barmode: 'stack',
  xaxis: {
    domain: [0, 0.55],
    showticklabels: false,
  },
  yaxis: {
    title: 'SUS Score',
    domain: [0, 1],
    range: [0, 100],
  },
  xaxis2: {
    domain: [0.55, 0.7],
    range: [-0.5, 0.5],
    showgrid: false,
    showticklabels: false,
  },
  xaxis3: {
    domain: [0.7, 0.85],
    range: [-0.5, 0.5],
    showgrid: false,
    showticklabels: false,
  },
  xaxis4: {
    domain: [0.85, 1],
    range: [-0.5, 0.5],
    showgrid: false,
    showticklabels: false,
  },
  height: 800,
  modebar: { orientation: 'v' },
} satisfies Partial<Layout>

export function SusBoxPlot() {
  return <Plot data={data} layout={layout} />
}
