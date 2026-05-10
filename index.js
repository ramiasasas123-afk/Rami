// index.js

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("MikroTik API Working ✅");
});

app.get("/test", (req, res) => {
    res.json({
        status: "success",
        message: "API is online"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});