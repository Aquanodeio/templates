import express, { Express, Request, Response } from "express";

const app: Express = express();

const { PORT = 3000 } = process.env;

// Middleware to parse JSON bodies
app.use(express.json());

// Simulate variable processing time
const simulateWork = (minMs = 100, maxMs = 500) => {
    const processingTime = Math.floor(Math.random() * (maxMs - minMs) + minMs);
    return new Promise(resolve => setTimeout(resolve, processingTime));
};

// Basic health check endpoint
app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ status: "healthy" });
});

// Simulate a CPU-intensive task
app.post("/process", async (req: Request, res: Response) => {
    try {
        // Simulate some CPU work
        const startTime = Date.now();
        await simulateWork();

        // Optional: Create some memory load
        const arr = new Array(1000000).fill('x');
        
        const processingTime = Date.now() - startTime;
        
        res.status(200).json({
            success: true,
            processingTime,
            timestamp: new Date().toISOString()
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Test server running on port ${PORT}`);
});
