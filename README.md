# React-Grid-performance-sample

## Repository Description

This repository contains a React-based performance demonstration showcasing how a data grid behaves when rendering and operating on large datasets using different scrolling and paging strategies.

## Project Overview

This project is a performance testing sample for a React Grid component configured to handle large-scale data efficiently. In this demo, the grid is bound to 100,000 records across five columns. The primary goal of the sample is to evaluate how the grid performs during initial rendering and while executing common data operations such as sorting, filtering, searching, grouping, and paging.

The sample allows developers to experiment with multiple data navigation techniques to understand their impact on rendering speed and user experience. These techniques are useful when building enterprise-grade applications that must handle high data volumes smoothly.

## Key Features

- Binds and renders 100,000 data records
- Supports sorting, filtering, searching, and grouping operations
- Allows testing with configurable page sizes
- Supports paging, virtual scrolling, and infinite scrolling modes
- Helps compare performance between different data loading strategies

> **Note:** Paging, Virtual Scrolling, and Infinite Scrolling are mutually exclusive features, and only one can be enabled at a time.

## Configuration Options

You can control grid behavior using the following properties:
- `pageSettings.pageSize` to adjust the number of records per page
- `allowPaging` to enable pagination
- `enableVirtualization` to activate virtual scrolling
- `enableInfiniteScrolling` to test infinite scrolling behavior

These options can be modified at the sample level to observe performance differences.


## Running the Application

1. Clone the repository:

```cmd
git https://github.com/SyncfusionExamples/React-Grid-performance-sample.git
```

2. Navigate to the project folder:

```cmd
cd your-application-root-folder
```

3. Install dependencies:

```cmd
npm install
```

3. Start the development server:

```cmd
npm run serve
```

## Resources

- Documentation: https://ej2.syncfusion.com/react/documentation/grid/performance
- Demo: https://ej2.syncfusion.com/react/demos/#/tailwind3/grid/overview