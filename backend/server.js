import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import csv from "csv-parser";
import xlsx from "xlsx";
import path from "path";

const app = express();
app.use(cors());

const PORT = 5000;

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

// Upload Route
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const filePath = req.file.path;
    const ext = path.extname(filePath);

    let urls = [];

    // 📊 Excel
    if (ext === ".xlsx" || ext === ".xls") {
      const workbook = xlsx.readFile(filePath);
      const sheetName = workbook.SheetNames[0];
      const data = xlsx.utils.sheet_to_json(
        workbook.Sheets[sheetName]
      );

      urls = data.map(row => row.URL).filter(Boolean);
    }

    // 📄 CSV
    else if (ext === ".csv") {
      await new Promise((resolve) => {
        fs.createReadStream(filePath)
          .pipe(csv())
          .on("data", (row) => {
            if (row.URL) urls.push(row.URL);
          })
          .on("end", resolve);
      });
    }

    res.json({ urls });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "File processing failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});