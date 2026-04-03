## Website Navigator (Full Stack)

Website Navigator is a full-stack web application that allows users to upload an Excel or CSV file containing website URLs and browse them directly inside the app.

The application extracts URLs from the uploaded file using a Node.js backend and displays each website in an iframe on the frontend. Users can navigate through the websites using Next and Previous buttons or keyboard arrow keys.

It also handles real-world limitations such as iframe blocking by providing fallback options like opening the website in a new tab.

## Features

- Upload Excel (.xlsx, .xls) or CSV files
- Extract URLs from uploaded file
- Display websites inside an iframe
- Navigate using Previous and Next buttons
- Keyboard navigation (Arrow keys)
- Detect iframe blocking and show fallback message
- Open blocked sites in new tab

## Backend Setup

- cd backend
- npm install
- node server.js
- Runs on: http://localhost:5000
- Handles file upload and URL extraction

## Frontend Setup

- cd frontend
- npm install
- npm run dev
- Runs on: http://localhost:5173 (Vite default)
- Handles UI and website navigation
- Sample Excel / CSV Format

Upload file must contain a column named URL

## Example:
Name              URL
Example	    https://example.com
Wikipedia	https://wikipedia.org
Quotes 	    https://quotes.toscrape.com

## Assumptions Made
- The uploaded file contains a column named "URL"
- URLs include http:// or https://
- Only the first sheet of Excel file is processed
- Some websites may block iframe embedding due to security policies
- In such cases, users can open the site in a new tab using the provided link

## Tech Stack

- Frontend: React.js (Vite) + Tailwind CSS
- Backend: Node.js + Express
- File Parsing: multer, xlsx, csv-parser

## Future Improvements

- Save history of uploaded URLs
- Better iframe error detection
