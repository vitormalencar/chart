import React, {Component} from 'react'
import * as d3 from 'd3';

export default class BarChart extends Component {

  state = {
    value: 0,
    max: 10,
    min: 0,
    step: 1
  }

  static defaultProps = {
    min: 0,
    max: 1000,
    step: 100,
    value: 0,
    ticks: true,
    tooltip: true
  }

  componentDidMount() {
    this.createBarChart()
  }

  componentDidUpdate() {
    this.createBarChart()
  }

  onChangeHandler = e => {
    const value = e.target.value;
    this.setState({value});
  }

  drawTicks = (x) => d3
    .svg
    .axis()
    .scale(x)
    .ticks(20)
    .tickSize(10)

  createBarChart = () => {

    const {node, props} = this

    const x = d3
      .scale
      .linear()
      .domain([0, 100])
      .range([0, 400])

    const xDateAxis = d3
      .svg
      .axis()
      .scale(x)
      .orient("bottom")
      .tickSize(0)

    d3
      .select("#range")
      .select("#svg")
      .append("g")
      .attr("class", "grid")
      .attr("transform", "translate(20,15)")
      .call(this.drawTicks(x))
      .selectAll(".tick")
      .data(x.ticks(10), (d) => d)
      .exit()

    d3
      .select("#range")
      .select("svg")
      .append("g")
      .attr("transform", "translate(20,35)")
      .attr("class", "spratly axis date")
      .call(xDateAxis)
  }

  render() {
    const {value, min, max, step} = this.props

    return (
      <div id="range">
        <div id="current-year">
          <h1>{this.state.value}</h1>
        </div>
        <svg id="svg">#</svg>
        <input
          type="range"
          id="range-input"
          min={min}
          max={max}
          step={step}
          defaultValue={value}
          onChange={this.onChangeHandler}></input>
      </div>
    )
  }
}
