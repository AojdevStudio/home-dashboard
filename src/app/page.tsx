import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-80"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        
        {/* Glowing orb effect */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-600 rounded-full filter blur-[128px] opacity-20"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-teal-600 rounded-full filter blur-[128px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">
              Take Control of Your Financial Future
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-300">
              AI-powered budgeting, intelligent savings, and automated investments all in one dashboard.
            </p>
            <div className="mt-10 flex justify-center">
              <Link href="/signup" className="bg-gradient-to-r from-purple-600 to-teal-600 text-white font-medium py-3 px-8 rounded-md shadow-lg hover:shadow-purple-500/20 hover:from-purple-500 hover:to-teal-500 transition duration-300 mr-4">
                Get Started
              </Link>
              <Link href="/login" className="bg-transparent border border-gray-700 text-gray-300 font-medium py-3 px-8 rounded-md hover:bg-white/5 transition duration-300">
                Log In
              </Link>
            </div>
          </div>
          
          {/* Dashboard Preview Image */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 h-20 bottom-0"></div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
              <div className="relative w-full h-[500px]">
                {/* Replace with your actual dashboard preview image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="max-w-4xl w-full mx-8">
                      {/* Mock dashboard UI */}
                      <div className="flex justify-between items-center mb-8">
                        <div>
                          <h2 className="text-2xl font-bold text-white">$ 19,546.50</h2>
                          <p className="text-gray-400">Available Balance</p>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                          <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                          <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                        </div>
                      </div>
                      
                      {/* Chart mockup */}
                      <div className="h-48 mb-8 bg-gray-800 rounded-lg overflow-hidden relative">
                        <div className="absolute bottom-0 left-0 right-0 h-32">
                          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
                            <path
                              d="M0,150 L0,120 C50,100 100,80 150,110 C200,140 250,90 300,70 C350,50 400,80 450,90 L500,100 L500,150 Z"
                              fill="rgba(139, 92, 246, 0.2)"
                              stroke="rgba(139, 92, 246, 0.8)"
                              strokeWidth="2"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Recent transactions mockup */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center mr-3">
                              <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
                            </div>
                            <div>
                              <p className="text-white">Salary Deposit</p>
                              <p className="text-gray-400 text-sm">Mar 01, 2023</p>
                            </div>
                          </div>
                          <p className="text-green-400">+$2,600.00</p>
                        </div>
                        
                        <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                            </div>
                            <div>
                              <p className="text-white">Grocery Store</p>
                              <p className="text-gray-400 text-sm">Mar 01, 2023</p>
                            </div>
                          </div>
                          <p className="text-red-400">-$120.45</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">Smart Financial Tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-purple-500/10">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Smart Budgeting</h3>
              <p className="text-gray-400">Automatically categorize expenses and get AI-powered insights to optimize your spending habits.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-purple-500/10">
              <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Automated Investing</h3>
              <p className="text-gray-400">Set up intelligent investment rules with Fibonacci analysis to maximize your returns.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl border border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-purple-500/10">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">AI Financial Assistant</h3>
              <p className="text-gray-400">Get personalized financial advice and answers to your questions from our GPT-4 powered assistant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-mono font-bold text-white">13,000+</p>
              <p className="text-gray-500 mt-2">Businesses</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-mono font-bold text-white">5,400+</p>
              <p className="text-gray-500 mt-2">Bank accounts</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-mono font-bold text-white">1.2M</p>
              <p className="text-gray-500 mt-2">Transactions</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-mono font-bold text-white">$812M</p>
              <p className="text-gray-500 mt-2">Transaction value</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Glowing orb effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full filter blur-[128px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to transform your finances?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-400">
            Join thousands of users who have already taken control of their financial future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup" className="bg-gradient-to-r from-purple-600 to-teal-600 text-white font-medium py-3 px-8 rounded-md shadow-lg hover:shadow-purple-500/20 hover:from-purple-500 hover:to-teal-500 transition duration-300">
              Get Started for Free
            </Link>
            <Link href="#" className="bg-transparent border border-gray-700 text-gray-300 font-medium py-3 px-8 rounded-md hover:bg-white/5 transition duration-300">
              Talk to Founders
            </Link>
          </div>
          <p className="text-gray-500 mt-6 text-sm">Claim $49/mo deal, free during beta.</p>
        </div>
      </section>
    </div>
  );
}
