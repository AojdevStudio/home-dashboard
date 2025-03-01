import { createClient } from '@supabase/supabase-js';
import { Configuration, OpenAIApi } from 'openai';
import { PlaidApi, Configuration as PlaidConfiguration, PlaidEnvironments } from 'plaid';
import Alpaca from '@alpacahq/alpaca-trade-api';

// Supabase Configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// OpenAI Configuration
const openaiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
export const openai = new OpenAIApi(openaiConfig);

// Plaid Configuration (server-side only)
const plaidConfig = new PlaidConfiguration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV as keyof typeof PlaidEnvironments] || PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
});
export const plaidClient = new PlaidApi(plaidConfig);

// Alpaca Configuration (server-side only)
export const alpaca = new Alpaca({
  keyId: process.env.ALPACA_API_KEY || '',
  secretKey: process.env.ALPACA_API_SECRET || '',
  paper: true, // Use paper trading for development
  baseUrl: process.env.ALPACA_API_BASE_URL || 'https://paper-api.alpaca.markets',
});

// Export a function to check if we're on the server side
export const isServer = () => typeof window === 'undefined'; 