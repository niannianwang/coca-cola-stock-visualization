<script>
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