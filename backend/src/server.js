import express from "express";
import { chromium } from "playwright";
import cors from "cors";
import { scrapeListings } from "./utils/scraper.js";

const app = express();
const PORT = 5001;

app.use(cors());

app.get("/scrape", async (req, res) => {
    let browser;
    try {
        browser = await chromium.launch();
        const listings = await scrapeListings({ browser, retryCount: 3 });
        res.json(listings);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
