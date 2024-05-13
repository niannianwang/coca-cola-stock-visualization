<script>
    import { onMount } from 'svelte';
    import Papa from 'papaparse';
    import * as d3 from 'd3';

    let stockData = [];
    let loading = true;
    let svgElement;
    let marginLeft = 30;
    let marginRight = 20;
    let marginTop = 20;
    let marginBottom = 20;

    onMount(async () => {
        const response = await fetch('Coca-Cola_stock_history.csv');
        const csvData = await response.text();
        stockData = Papa.parse(csvData, { header: true }).data;
        stockData = stockData.map(d => {
            return {
                Date: d3.timeParse("%Y-%m-%d")(d.Date),
                Open: +d.Open,
                High: +d.High,
                Low: +d.Low,
                Close: +d.Close,
                Volume: +d.Volume,
            };
        });
        loading = false;
        console.log(stockData);
    });

    function createLineGraph(desiredType) {
        /*const svg = d3.select('svg');*/
        const svg = d3.select(svgElement);
        const width = 500;
        const height = 300;

        // Define the scales
        const xScale = d3
            .scaleTime()
            .domain(d3.extent(stockData, d => d.Date))
            .range([marginLeft, width - marginRight]);

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(stockData, d => +d[desiredType])])
            .range([height - marginBottom, marginTop]);
        

        // Append the line to the SVG
        // Clear existing content
        svg.selectAll("*").remove();

        const graph = svg.append('g')
            .attr('transform', `translate(${marginLeft}, ${marginTop})`);
        graph
            .append('path')
            .datum(stockData)
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 2)
            .attr('d', d3.line()
                .x(d => xScale(d.Date))
                .y(d => yScale(+d[desiredType]))
            );
        // append x-axis and y-axis
        graph
            .append('g')
            .attr('transform', `translate(0, ${height - marginBottom})`)
            .call(d3.axisBottom(xScale));
        graph
            .append('g')
            .attr('transform', `translate(${marginLeft}, 0)`) 
            .call(d3.axisLeft(yScale));
        
        // Append x-axis title
        graph
            .append('text')
            .attr('transform', `translate(${width / 2}, ${height + marginBottom})`) // Position at the middle of the x-axis
            .style('text-anchor', 'middle') // Center the text
            .text('Year');

        // Append y-axis title
        graph
            .append('text')
            .attr('transform', 'rotate(-90)') // Rotate the text
            .attr('y', -25) // Position at the start of the y-axis
            .attr('x', 0 - (height / 2)) // Position at the middle of the y-axis
            .attr('dy', '1em') // Adjust the position
            .style('text-anchor', 'middle') // Center the text
            .text('Y testing');

        // Append graph title
        graph
            .append('text')
            .attr('transform', `translate(${width / 2}, ${marginTop})`) // Position at the top center
            .style('text-anchor', 'middle') // Center the text
            .style('font-size', '20px') // Set the font size
            .style('font-weight', 'bold') // Set the font weight
            .text(`${desiredType} Graph`);
    }
    function showOpenGraph() {
        if (document.getElementById("showOpenGraphCheckbox").checked) {
            createLineGraph('Open');
        } else {
            // Clear the graph
            d3.select(svgElement).selectAll("*").remove();
        }
    }
    function showHighGraph() {
        if (document.getElementById("showHighGraphCheckbox").checked) {
            createLineGraph('High');
        } else {
            // Clear the graph
            d3.select(svgElement).selectAll("*").remove();
        }
    }
    function showLowGraph() {
        if (document.getElementById("showLowGraphCheckbox").checked) {
            createLineGraph('Low');
        } else {
            // Clear the graph
            d3.select(svgElement).selectAll("*").remove();
        }
    }
    function showCloseGraph() {
        if (document.getElementById("showCloseGraphCheckbox").checked) {
            createLineGraph('Close');
        } else {
            // Clear the graph
            d3.select(svgElement).selectAll("*").remove();
        }
    }
</script>

{#if loading}
    <h2>Loading...</h2>
{:else}
<main>
    <h1>Coca Cola Stock Trend 1962-2022</h1>
    <input type="radio" name = "graphType" id="showOpenGraphCheckbox" on:click={showOpenGraph}>Show Open Graph
    <input type="radio" name = "graphType" id="showHighGraphCheckbox" on:click={showHighGraph}>Show High Graph
    <input type="radio" name = "graphType" id="showLowGraphCheckbox" on:click={showLowGraph}>Show Low Graph
    <input type="radio" name = "graphType" id="showCloseGraphCheckbox" on:click={showCloseGraph}>Show Close Graph
    <div class="graph-container">
        <svg bind:this={svgElement} width="600" height="400"></svg>
    </div>
</main>
{/if}

<style>
    /* Styles omitted for brevity */
    .graph-container {
        margin-top: 20px; /* Adjust this value as needed */
    }
</style>
