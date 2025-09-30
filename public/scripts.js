import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm"
import data from './data.json' with {type : 'json'}

const width = 900, height = 600

const cantidadScale = d3.scaleLinear([0, 1.5e6], [0, 500])

d3.select('.barras')
    .selectAll('rect')
    .data(data)
    .join('rect')
    .attr('width', function(d){
        return cantidadScale(d.pasajeros)
    })
    .attr('height', 40)
    .attr('y', function(d, i){
        return 42 * i
    })
    .attr('rx', 25)
    .attr('ry', 25)


d3.select('.labels')
    .selectAll('text')
    .data(data)
    .join('text')
    .attr('x', 240)
    .attr('y', function(d, i){
    return i * 42
    })
    .text(function(d){
    return d.mes
    })
    .attr('transform', 'translate(-130, 140)')
    .attr('font-size', '13px')
    .attr('fill', '#460127ff')


d3.select('.axis-y')
    .append('text')
    .text('Meses')
    .attr('text-anchor', 'middle')
    .attr('font-size', '20px')
    .attr('transform', 'translate(70, 370), rotate(-90)')
    .attr('fill', '#460127ff')

d3.select('.axis-x')
    .append('text')
    .text('Cantidad pasajeros')
    .attr('transform', 'translate(300, 60)')
    .attr('text-anchor', 'middle')
    .attr('font-size', '20px')
    .attr('fill', '#460127ff')

const xAxis = d3.axisBottom(cantidadScale)
    .tickValues([0, 9e5, 1e6, 1.1e6, 1.2e6, 1.3e6, 1.4e6, 1.5e6])
    .tickFormat(d3.format(".2s"));
d3.select('.axis-x')
    .attr('transform', 'translate(200, 640)')
    .call(xAxis)



d3.select('.titulo')
    .append('text')
    .text('Flujo mensual de pasajeros nacionales en Chile 2024')
    .attr('x', 500)
    .attr('y', 60)
    .attr('text-anchor', 'middle')
    .attr('font-size', '25px')
    .attr('fill', '#460127ff')



