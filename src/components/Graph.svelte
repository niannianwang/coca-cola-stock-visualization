<script>
	import * as d3 from 'd3';
	// our interactive data
    import Papa from 'papaparse';
    import { onMount } from 'svelte';

    let parsedData;

    onMount(async () => {
        const response = await fetch('Coca-Cola_stock_history.csv');
        const csvData = await response.text();
        parsedData = Papa.parse(csvData, { header: true }).data;
    });

    export { parsedData };
</script>

<div class="visualization">
	<svg width="500" height="500">
		<script>
			import { onMount } from 'svelte';

			// Function to create the line graph
			function createLineGraph() {
				const svg = d3.select('svg');
				const width = +svg.attr('width');
				const height = +svg.attr('height');

				// Define the scales
				const xScale = d3
					.scaleTime()
					.domain(d3.extent(parsedData, d => d.date))
					.range([0, width]);

				const yScale = d3
					.scaleLinear()
					.domain([0, d3.max(parsedData, d => d.value)])
					.range([height, 0]);

				// Define the line generator
				const line = d3
					.line()
					.x(d => xScale(d.date))
					.y(d => yScale(d.value));

				// Append the line to the SVG
				svg
					.append('path')
					.datum(parsedData)
					.attr('fill', 'none')
					.attr('stroke', 'steelblue')
					.attr('stroke-width', 2)
					.attr('d', line);
			}

			onMount(createLineGraph);
		</script>
	</svg>
	
</div>

<style>
	.visualization {
		font: 25px sans-serif;
		margin: auto;
		margin-top: 1px;
		text-align: middle;
	}

	/* dynamic classes for the tooltip */
	.tooltip-hidden {
		visibility: hidden;
		font-family: "Nunito", sans-serif;
		width: 200px;
		position: absolute;
	}

	.tooltip-visible {
		font: 25px sans-serif;
		font-family: "Nunito", sans-serif;
		visibility: visible;
		background-color: #f0dba8;
		border-radius: 10px;
		width: 200px;
		color: black;
		position: absolute;
		padding: 10px;
	}
</style>