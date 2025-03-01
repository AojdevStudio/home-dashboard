# Home Dashboard

![Home Dashboard](public/github.png)

A modern, AI-powered financial dashboard that helps users take control of their financial future through intelligent budgeting, savings tracking, and automated investments.

## 🌟 Features

- **Financial Overview**: Track your account balance, monthly income, and expenses at a glance
- **Transaction Tracking**: Monitor and categorize your recent financial transactions
- **Spending Analysis**: Visualize your spending patterns by category
- **Savings Goals**: Set and track progress towards your savings targets
- **AI Financial Assistant**: Get personalized financial advice and insights
- **Responsive Design**: Beautiful UI that works on desktop and mobile devices

## 🚀 Technologies

- **Frontend**: Next.js 15, React 19, TailwindCSS 4
- **State Management**: Zustand
- **Data Visualization**: Recharts, Chart.js
- **API Integration**: 
  - Plaid (banking connections)
  - Alpaca (investment API)
  - OpenAI (AI assistant)
- **Backend & Database**: Supabase, PostgreSQL
- **Testing**: Jest, Cypress, Playwright

## 📋 Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager
- Supabase account (for database)
- API keys for Plaid, Alpaca, and OpenAI (for full functionality)

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AojdevStudio/home-dashboard.git
   cd home-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Fill in your API keys and configuration values

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
home-dashboard/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── dashboard/  # Dashboard page
│   │   ├── login/      # Authentication pages
│   │   ├── signup/     # User registration
│   │   └── page.tsx    # Landing page
│   ├── components/     # Reusable UI components
│   ├── lib/            # Utility functions and API clients
│   └── types/          # TypeScript type definitions
├── .env.local.example  # Example environment variables
└── package.json        # Project dependencies
```

## 🧪 Testing

Run the test suite:

```bash
# Unit and integration tests
npm run test

# End-to-end tests with Cypress
npm run cypress

# End-to-end tests with Playwright
npm run playwright
```

## 🚢 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🔒 Security

This application handles sensitive financial data. Always:
- Use HTTPS in production
- Never commit API keys or secrets to the repository
- Follow best practices for authentication and data protection

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

AojdevStudio - [GitHub](https://github.com/AojdevStudio)

Project Link: [https://github.com/AojdevStudio/home-dashboard](https://github.com/AojdevStudio/home-dashboard)
