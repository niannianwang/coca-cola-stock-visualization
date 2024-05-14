# DSC 106 Project 3 Write Up

## Our Dataset

We use the dataset from [Kaggle](https://www.kaggle.com/datasets/kalilurrahman/coca-cola-stock-live-and-updated?select=Coca-Cola_stock). It is a dataset about the stock price of Coca Cola from 1962 to 2022.

It have the following columns:

- Date
- Open
- High
- Low
- Close
- Volume
- Dividends
- Stock Splits

## Visualizaton

We decided to use line graph to visualize the data because our data is based on date, and we believe that line graph can best show the trend of stock price. We also add x-axis label (date) and y-axis label (price in USD) to help viewers to understand the graph. For the interaction techniques, we use radio to allow users to click on open, close, high, low to see the trends of different indicators. We considered the interaction of clicking on the line to see the exact amount of stock price at the day, but we found that it was hard since the data range is too large to specifically locate the exact day.

## Development Process

Samuel worked on parsing the data into the app because we were not able to read the data directly by using `d3.csv()`. Samuel also worked on the overall structure of the website and the line graph. Jasmine worked on the details of the graph, and she also worked on the deployment of our website. Nian-nian helped find and clean the dataset, and she also worked on editing and improving the interactivity of our graph.

Overall, we spent about 10 hours on the application. The most time-spending part is to create the visualization and integrate the interactivity into our visualization because we are not very familiar with d3 and svelte. We think the development process was challenging but interesting.
