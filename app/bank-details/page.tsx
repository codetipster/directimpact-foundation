"use client";
import { Metadata } from 'next'
import React, { useState } from 'react'
import Image from 'next/image'

export default function BankDetails() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Function to handle copy to clipboard
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000); // Reset toast after 2s
  };

  const nigeriaRows = [
    { label: 'Account Name', value: 'Direct Impact Empowerment Foundation' },
    { label: 'Bank', value: 'United Bank for Africa (UBA)' },
    { label: 'Account Number', value: '1027681829' },
  ];

  const swissRows = [
    { label: 'Account Name', value: 'Direct Impact Empowerment Foundation' },
    { label: 'Bank', value: 'Yapeal AG' },
    { label: 'IBAN', value: 'CH94 83019 DIRECTIMP002' },
    { label: 'QR-IBAN', value: 'CH69 30334 DIRECTIMP002' },
    { label: 'Currency', 'value': 'CHF' },
  ];

  return (
    <div className="bg-[#FCFCFC] min-h-screen font-sans pb-20">
      {/* Toast Notification for Copying */}
      {copiedText && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl z-50 animate-bounce">
          Copied to clipboard! ✅
        </div>
      )}

      {/* --- Hero Section --- */}
      <section className="bg-[#7B1E1E] text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-serif max-w-3xl mx-auto leading-tight">
          Bank Transfer Details
        </h1>
      </section>

      <div className="max-w-5xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* --- Nigeria Account Card --- */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
            <div className="p-8">
              {/* Flag and Title (Matching your image) */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#FEF9E7] rounded-xl flex items-center justify-center text-2xl shadow-sm border border-yellow-100">
                  🇳🇬
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 leading-none">Nigeria account</h3>
                  <p className="text-gray-400 text-sm mt-1">For NGN transfers</p>
                </div>
                <div className="ml-auto relative w-12 h-12">
                   <Image src="/logoUBA.jpeg" alt="UBA" fill className="object-contain rounded-md" />
                </div>
              </div>

              <div className="space-y-4">
                {nigeriaRows.map((item) => (
                  <div key={item.label} className="group relative border-b border-gray-50 pb-3 last:border-0">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">{item.label}</span>
                    <div className="flex justify-between items-center">
                      <span className="text-[15px] font-medium text-gray-800 pr-4">{item.value}</span>
                      <button 
                        onClick={() => handleCopy(item.value)}
                        className="text-[10px] bg-gray-100 hover:bg-[#7B1E1E] hover:text-white text-gray-500 px-2 py-1 rounded transition-colors font-bold uppercase"
                      >
                        {copiedText === item.value ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- Switzerland Account Card --- */}
          <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
            <div className="p-8">
              {/* Flag and Title (Matching your image) */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#EAF4FB] rounded-xl flex items-center justify-center text-2xl shadow-sm border border-blue-100">
                  🇨🇭
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 leading-none">Switzerland account</h3>
                  <p className="text-gray-400 text-sm mt-1">For CHF and international</p>
                </div>
                <div className="ml-auto relative w-12 h-12">
                   <Image src="/yapeal.jpeg" alt="Yapeal" fill className="object-contain rounded-md" />
                </div>
              </div>

              <div className="space-y-4">
                {swissRows.map((item) => (
                  <div key={item.label} className="group border-b border-gray-50 pb-3 last:border-0">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">{item.label}</span>
                    <div className="flex justify-between items-center">
                      <span className="text-[15px] font-medium text-gray-800 pr-4">{item.value}</span>
                      <button 
                        onClick={() => handleCopy(item.value)}
                        className="text-[10px] bg-gray-100 hover:bg-[#7B1E1E] hover:text-white text-gray-500 px-2 py-1 rounded transition-colors font-bold uppercase"
                      >
                         {copiedText === item.value ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* --- Card Payment --- */}
        <div className="text-center bg-gray-50 border border-dashed border-gray-200 rounded-3xl p-10 max-w-2xl mx-auto">
          <p className="text-gray-600 mb-6">Alternatively, you can donate instantly using a credit or debit card.</p>
          <a 
            href="https://buy.stripe.com/4gMaEXeHH5Hi6yDgfQ3cc00" 
            target="_blank" 
            className="inline-flex items-center bg-[#7B1E1E] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
          >
            Donate by Card instead 💳
          </a>
        </div>
      </div>
    </div>
  )
}
