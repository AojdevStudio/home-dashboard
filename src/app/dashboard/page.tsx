'use client';

import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
  // Placeholder data for demonstration
  const accountBalance = 12458.93;
  const monthlyIncome = 5200;
  const monthlyExpenses = 3750;
  const savingsGoal = 20000;
  const currentSavings = 8500;
  const savingsProgress = (currentSavings / savingsGoal) * 100;

  // Placeholder data for recent transactions
  const recentTransactions = [
    { id: 1, date: '2023-03-01', description: 'Grocery Store', amount: -120.45, category: 'Groceries' },
    { id: 2, date: '2023-03-01', description: 'Salary Deposit', amount: 2600.00, category: 'Income' },
    { id: 3, date: '2023-02-28', description: 'Electric Bill', amount: -95.20, category: 'Utilities' },
    { id: 4, date: '2023-02-27', description: 'Restaurant', amount: -65.30, category: 'Dining' },
    { id: 5, date: '2023-02-26', description: 'Gas Station', amount: -45.00, category: 'Transportation' },
  ];

  // Placeholder data for spending by category
  const spendingByCategory = [
    { category: 'Housing', amount: 1500, percentage: 40 },
    { category: 'Food', amount: 800, percentage: 21 },
    { category: 'Transportation', amount: 400, percentage: 11 },
    { category: 'Utilities', amount: 350, percentage: 9 },
    { category: 'Entertainment', amount: 300, percentage: 8 },
    { category: 'Other', amount: 400, percentage: 11 },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
      
      {/* Dashboard Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Financial Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-teal-600 text-white px-4 py-2 rounded-md hover:from-purple-500 hover:to-teal-500 transition duration-300 shadow-lg shadow-purple-900/20">
                Add Transaction
              </button>
              <div className="relative">
                <button className="flex items-center text-gray-300 focus:outline-none">
                  <span className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-teal-500 flex items-center justify-center">
                    <span className="text-sm font-medium">JD</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Account Balance */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl p-6 border border-gray-800">
            <h2 className="text-sm font-medium text-gray-400 mb-1">Account Balance</h2>
            <p className="text-2xl font-bold text-white">${accountBalance.toLocaleString()}</p>
            <div className="mt-2 flex items-center text-sm">
              <span className="text-green-400 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                3.2% from last month
              </span>
            </div>
          </div>

          {/* Monthly Income */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl p-6 border border-gray-800">
            <h2 className="text-sm font-medium text-gray-400 mb-1">Monthly Income</h2>
            <p className="text-2xl font-bold text-white">${monthlyIncome.toLocaleString()}</p>
            <div className="mt-2 flex items-center text-sm">
              <span className="text-green-400 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                5.0% from last month
              </span>
            </div>
          </div>

          {/* Monthly Expenses */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl p-6 border border-gray-800">
            <h2 className="text-sm font-medium text-gray-400 mb-1">Monthly Expenses</h2>
            <p className="text-2xl font-bold text-white">${monthlyExpenses.toLocaleString()}</p>
            <div className="mt-2 flex items-center text-sm">
              <span className="text-red-400 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                </svg>
                2.5% from last month
              </span>
            </div>
          </div>

          {/* Savings Goal */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl p-6 border border-gray-800">
            <h2 className="text-sm font-medium text-gray-400 mb-1">Savings Goal</h2>
            <p className="text-2xl font-bold text-white">${currentSavings.toLocaleString()} / ${savingsGoal.toLocaleString()}</p>
            <div className="mt-2">
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-purple-500 to-teal-500 h-2.5 rounded-full" style={{ width: `${savingsProgress}%` }}></div>
              </div>
              <p className="text-sm text-gray-400 mt-1">{savingsProgress.toFixed(0)}% of goal</p>
            </div>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Transactions */}
          <div className="lg:col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl border border-gray-800">
            <div className="px-6 py-5 border-b border-gray-700">
              <h3 className="text-lg font-medium text-white">Recent Transactions</h3>
            </div>
            <div className="px-6 py-5">
              <ul className="divide-y divide-gray-700">
                {recentTransactions.map((transaction) => (
                  <li key={transaction.id} className="py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-white">{transaction.description}</p>
                        <p className="text-sm text-gray-400">{transaction.date} • {transaction.category}</p>
                      </div>
                      <p className={`text-sm font-medium ${transaction.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link href="/transactions" className="text-sm font-medium text-purple-400 hover:text-purple-300">
                  View all transactions →
                </Link>
              </div>
            </div>
          </div>

          {/* Spending by Category */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl border border-gray-800">
            <div className="px-6 py-5 border-b border-gray-700">
              <h3 className="text-lg font-medium text-white">Spending by Category</h3>
            </div>
            <div className="px-6 py-5">
              <ul className="space-y-4">
                {spendingByCategory.map((category) => (
                  <li key={category.category}>
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-white">{category.category}</p>
                      <p className="text-sm font-medium text-white">${category.amount}</p>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-teal-500 h-2.5 rounded-full" 
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{category.percentage}% of total</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/budget" className="text-sm font-medium text-purple-400 hover:text-purple-300">
                  View detailed budget →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* AI Assistant Teaser */}
        <div className="mt-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-xl p-6 border border-gray-800 relative overflow-hidden">
          {/* Glowing orb effect */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-600 rounded-full filter blur-[80px] opacity-20"></div>
          
          <div className="flex items-start relative z-10">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-white">AI Financial Assistant</h3>
              <p className="mt-1 text-sm text-gray-400">
                Get personalized financial advice and insights from our AI assistant. Ask questions about your spending, saving goals, or investment opportunities.
              </p>
              <div className="mt-3">
                <Link href="/assistant" className="text-sm font-medium text-purple-400 hover:text-purple-300">
                  Chat with your assistant →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 