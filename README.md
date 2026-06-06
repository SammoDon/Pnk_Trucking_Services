# PNK Trucking Services Website

This is a React + Vite website for **PNK Trucking Services**, a logistics, delivery and removals business based in Montego Bay, Jamaica. The website presents the company's services, contact information, policy documents, promotional media and an interactive delivery location feature using Google Maps.

## Project Overview

The website was designed to provide visitors with information about PNK Trucking Services and make it easier for customers to learn about available services, request quotes, view company information and access policy documents.

## Features

- Multi-page React website
- Home page with background video and promotional content
- Services page with Google Maps delivery location feature
- About Us page
- Contact Us page
- Responsive navigation menu
- Service cards for different trucking/removal services
- Downloadable Privacy Policy and Terms and Conditions documents
- Contact information section
- Footer with quick links and company details
- Media assets including images, videos and company logo
- Google Maps and Places integration for pickup/destination selection

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- React Router DOM
- React Scroll
- Google Maps API
- Google Places API
- Headless UI
- GitHub Pages deployment support

## Main Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Main landing page with promotional content and service highlights |
| Services | `/Services` | Delivery location/map feature for service requests |
| Contact Us | `/Contact` | Contact details, quote request link, social information and policy downloads |
| About Us | `/About Us` | Company information and background |

## Project Structure

```text
PNK_Trucking_Website/
├── public/
│   └── logo.png
├── src/
│   ├── assets/
│   │   ├── images
│   │   ├── videos
│   │   ├── Privacy Policy.pdf
│   │   └── Terms and Conditions.pdf
│   ├── components/
│   │   ├── About.jsx
│   │   ├── BackgroundVideo.jsx
│   │   ├── Button.jsx
│   │   ├── Contact.jsx
│   │   ├── Contact_Form.jsx
│   │   ├── Content.jsx
│   │   ├── Footer.jsx
│   │   ├── Google_Map.jsx
│   │   ├── Map.jsx
│   │   ├── Nav.jsx
│   │   ├── Places.jsx
│   │   ├── Promotion.jsx
│   │   └── Service_Cards.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Service.jsx
│   │   ├── Contact_Us.jsx
│   │   └── About_Us.jsx
│   ├── styling/
│   │   └── CSS files for each page/component
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Installation and Setup

To run this project locally, make sure Node.js is installed.

1. Clone or download the project.
2. Open the project folder in a terminal.
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local development URL shown in the terminal, usually:

```text
http://localhost:5173/
```

## Google Maps Setup

This project uses the Google Maps API and Places library.

Create a `.env` file in the project root and add your Google API key:

```env
VITE_GOOGLE_API_KEY=your_google_maps_api_key_here
```

The API key is loaded in the map component using:

```js
import.meta.env.VITE_GOOGLE_API_KEY
```

Make sure the following APIs are enabled in your Google Cloud project:

- Maps JavaScript API
- Places API
- Directions API

## Available Scripts

Run the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

Deploy to GitHub Pages, if configured:

```bash
npm run deploy
```

## Deployment Notes

The project includes GitHub Pages deployment support through the `gh-pages` package.

Before deploying, check the `homepage` field in `package.json` and make sure it matches your GitHub Pages URL.

Example:

```json
"homepage": "https://your-username.github.io/your-repository-name/"
```

Then deploy using:

```bash
npm run deploy
```

## Important Notes

- Do not upload private API keys directly to GitHub.
- Store API keys in a `.env` file and add `.env` to `.gitignore`.
- The contact and policy download sections are front-end features.
- The Google Maps feature requires a valid API key to work properly.
- Some routes contain spaces and capital letters, such as `/About Us`. For long-term deployment, consider changing this to `/about-us` for cleaner URLs.

## Business Contact Information

- Business Name: PNK Trucking Services
- Location: Montego Bay, Jamaica
- Phone: 876-426-6197
- Email: pnktrucking@yahoo.com

## Author

Created as a React/Vite website project for PNK Trucking Services.

## License

This project is intended for educational, portfolio and business presentation purposes.
