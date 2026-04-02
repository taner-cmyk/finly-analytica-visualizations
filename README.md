# Finly Analytica - Professional Visualization Suite

This repository contains a suite of high-performance community visualizations for **Looker Studio**, developed by **Dataconnecta**. These components are specifically engineered for advanced financial analysis, real-time market tracking, and industry-specific auditing.

## 🌟 The Innovation: Sector-Aware Intelligence
Unlike native Looker Studio components, our financial tables feature a **Dynamic Sectoral Metric Engine**. They automatically adapt their internal accounting logic and KPI hierarchies based on the selected industry (e.g., Banking vs. Manufacturing), providing context-aware reporting currently unavailable in the native library.

## 🚀 Key Components

### 1. [Financial Marquee](https://github.com/taner-cmyk/finly-analytica-visualizations/tree/main/marquee)
A high-fidelity horizontal scrolling band designed for real-time stock prices and indices. Optimized for low-latency performance and automatic color-coding for market movements.

### 2. [Analytica Heatmap](https://github.com/taner-cmyk/finly-analytica-visualizations/tree/main/heatmap)
A professional market performance radar. Specifically tuned for price-change density analysis across multiple sectors, allowing for instant visual audits of market winners and losers.

### 3. [Interactive Scorecard](https://github.com/taner-cmyk/finly-analytica-visualizations/tree/main/scorecard)
Features **"Metric-to-Filter"** technology. It displays the value of the selected period (1M, 3M, YTD) while simultaneously acting as a global filter for the entire dashboard.

### 4. [Sequential PP (Previous Period)](https://github.com/taner-cmyk/finly-analytica-visualizations/tree/main/sequential-pp)
Automates the pairing of the current period with its **immediate predecessor**. Powered by sectoral logic to display relevant KPIs for side-by-side growth analysis.

### 5. [Sequential YOY (Year-over-Year)](https://github.com/taner-cmyk/finly-analytica-visualizations/tree/main/sequential-yoy)
An audit-ready comparison engine that strictly aligns data with the **same period from the previous year**, utilizing adaptive sectoral rows for industry-specific financial reporting.

### 6. [4-Period Analysis (Side-by-Side)](https://github.com/taner-cmyk/finly-analytica-visualizations/tree/main/4-period-financials)
The flagship financial terminal view. Synchronizes **4 fiscal periods** in a single row-level view with independent delta calculations, eliminating the need for multiple filtered tables.

## 🛠 Deployment & Technology
* **Host:** Google Cloud Storage (GCS)
* **Library:** DSCC (Looker Studio Community Component Library)
* **Compliance:** Fully compliant with Google's manifest requirements (devMode: false).

## 📄 Legal & Support
Developed and maintained by **Dataconnecta**, Istanbul.
* **Terms of Service:** [https://www.dataconnecta.com/legal](https://www.dataconnecta.com/legal)
* **Contact & Support:** [https://www.dataconnecta.com/contact](https://www.dataconnecta.com/contact)
