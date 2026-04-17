import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Donate - Direct Impact Empowerment Foundation',
  description: 'Support youth empowerment and community transformation through your generous donation.',
}

export default function BankDetails() {
  const nigeriaRows = [
    ['Account Name', 'Direct Impact Empowerment Foundation'],
    ['Bank', 'United Bank for Africa (UBA)'],
    ['Account Number', '1027681829'],
  ];

  const swissRows = [
    ['Account Name', 'Direct Impact Empowerment Foundation'],
    ['Bank', 'Yapeal AG'],
    ['IBAN', 'CH94 83019 DIRECTIMP002'],
    ['QR-IBAN', 'CH69 30334 DIRECTIMP002'],
    ['Currency', 'CHF'],
  ];

  return (
    <div className="bg-[#FCFCFC] min-h-screen font-sans pb-20">
      {/* --- Hero Section --- */}
      <section className="bg-[#7B1E1E] text-white py-16 px-6 text-center">
        <div className="inline-block bg-white/10 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-6 border border-white/20">
          Secure Giving
        </div>
        <h1 className="text-4xl md:text-5xl font-serif max-w-3xl mx-auto leading-tight">
          Bank Transfer Details
        </h1>
      </section>

      <div className="max-w-5xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* --- Nigeria Account Card --- */}
          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="p-8">
              {/* Logo & Flag Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🇳🇬</span>
                  <h3 className="font-bold text-xl text-gray-900">Nigeria Account</h3>
                </div>
                <div className="relative w-16 h-16 bg-white rounded-xl flex items-center justify-center p-1 border border-gray-100 shadow-inner">
                  <Image 
                    src="/logoUBA.jpeg" 
                    alt="UBA Logo" 
                    width={60} 
                    height={60}
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-5">
                {nigeriaRows.map(([label, value]) => (
                  <div key={label} className="border-b border-gray-50 pb-3 last:border-0">
                    <span className="text-[10px] font-black text-[#7B1E1E] uppercase tracking-wider block mb-1">{label}</span>
                    <span className="text-[16px] font-medium text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- Switzerland Account Card --- */}
          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="p-8">
              {/* Logo & Flag Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🇨🇭</span>
                  <h3 className="font-bold text-xl text-gray-900">Switzerland Account</h3>
                </div>
                <div className="relative w-16 h-16 bg-white rounded-xl flex items-center justify-center p-1 border border-gray-100 shadow-inner">
                  <Image 
                    src="/yapeal.jpeg" 
                    alt="Yapeal Logo" 
                    width={60} 
                    height={60}
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-5">
                {swissRows.map(([label, value]) => (
                  <div key={label} className="border-b border-gray-100 pb-3 last:border-0">
                    <span className="text-[10px] font-black text-[#7B1E1E] uppercase tracking-wider block mb-1">{label}</span>
                    <span className="text-[16px] font-medium text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* --- Confirmation Note --- */}
        <div className="bg-[#7B1E1E]/5 border border-[#7B1E1E]/10 rounded-2xl p-6 text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#7B1E1E] font-medium italic">
            &quot;Once your transfer is complete, please send a brief confirmation email to our team so we can acknowledge your gift.&quot;
          </p>
        </div>

        {/* --- Card Payment Link --- */}
        <div className="text-center">
          <a 
            href="https://buy.stripe.com/4gMaEXeHH5Hi6yDgfQ3cc00" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#7B1E1E] text-white px-10 py-4 rounded-full font-bold hover:bg-[#5a1616] transition-all shadow-md active:scale-95"
          >
            Donate by Card instead 💳
          </a>
        </div>
      </div>
    </div>
  )
}
