<script>
    import { onMount } from 'svelte';
    import Papa from 'papaparse';
    import * as d3 from 'd3';

    let stockData = [];
    let loading = true;
    let svgElement;

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
            .range([0, width]);

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(stockData, d => +d[desiredType])])
            .range([height, 0]);
        
        // Append the line to the SVG
        // error here
        svg
            .append('path')
            .datum(stockData)
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 2)
            .attr('d', d3.line()
                .x(d => xScale(+d.Date))
                .y(d => yScale(+d[desiredType]))
            );
    }
    function showOpenGraph() {
        return createLineGraph('Open');
    }
</script>

{#if loading}
    <h2>Loading...</h2>
{:else}
<main>
    <input type="checkbox" on:click={showOpenGraph}>Show Open Graph
    <!-- <button on:click={() => createLineGraph('desiredType')}>Change Line Graph</button> -->
    <svg bind:this={svgElement} width="600" height="400"></svg>
</main>
{/if}

<style>
    /* Styles omitted for brevity */
</style>
