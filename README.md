# Currency Exchange Rate App

A simple React application that displays currency exchange rates from the Czech National Bank and provides currency conversion functionality.

## Requirements

Create a simple React app (don't use NextJS please), which:

1. **When it starts, retrieve the latest currency exchange rates from the Czech National Bank.**
   - API URL: https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt
   - Documentation: https://www.cnb.cz/en/faq/Format-of-the-foreign-exchange-market-rates/

2. **Parses the downloaded data and clearly displays a list to the user in the UI.**

3. **Add a simple form, into which the customer can enter an amount in CZK and select a currency, and after submitting (clicking a button or in real-time) sees the amount entered in CZK converted into the selected currency.**

4. **Commit your code throughout your work and upload the resulting codebase into a Github repo.**

5. **Deploy the app so it can be viewed online (it doesn't matter where - e.q. Vercel, Netflify, etc.).**

6. **Add automated tests which might be appropriate to ensure that your solution is working correctly.**

7. **Tech stack: React (+ Hooks), TypeScript, Styled Components, React Query.**

**Overall: Keep the code simple and the UI nice and easy to use for the user.**

## Tech Stack

- **React** with Hooks
- **TypeScript**
- **Styled Components**
- **React Query** (TanStack Query)

## Features

- Real-time currency exchange rates from Czech National Bank
- Currency conversion calculator (CZK to other currencies)
- Clean, user-friendly interface
- Responsive design

## Getting Started

### Prerequisites

- Node.js (version 22.18 LTS)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/itaihamami/momence-task
cd momence-task
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # React components
├── hooks/          # Custom hooks
├── api/            # API services
└── App.jsx         # Main application component
```

## API Integration

The app integrates with the Czech National Bank API to fetch daily exchange rates. The API provides exchange rates in a simple text format that gets parsed and displayed in the UI.

## Testing

### Current Test Suite

A basic test suite has been implemented using **Vitest** (Vite's native testing solution) to test core functionality:

- **API Service Tests** (`src/services/__tests__/getRates.test.js`)
  - Tests successful API calls
  - Tests error handling for non-200 HTTP status codes
  - Tests network error scenarios
  - Uses module mocking to avoid real HTTP calls
- **Data Parsing Tests** (`src/services/__tests__/parseRates.test.js`)
  - Tests parsing of CNB text format
  - Tests data structure validation
  - Tests error handling for malformed data

### Future Testing Development

For comprehensive testing coverage, consider implementing:

- **Frontend Component Testing** - Test React components using React Testing Library
- **End-to-End Testing** - Use Playwright or Cypress for full user journey testing
- **Integration Tests** - Test API integration with real endpoints in test environment
- **Visual Regression Testing** - Ensure UI consistency across changes

**Note:** The current test suite focuses on core business logic (API calls, data parsing) rather than UI rendering, providing a solid foundation for future testing expansion.

## Deployment

The application is deployed and accessible online at: **https://momence.itai.cz**

The app is served using nginx and includes a reverse proxy configuration to handle CORS issues with the Czech National Bank API.

## License

This project is created for the Momence task assignment.