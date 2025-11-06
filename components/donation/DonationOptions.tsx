'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Copy, Mail } from 'lucide-react'
import { toast } from 'sonner'

export function DonationOptions() {
  const [copied, setCopied] = useState('')

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopied(text)
    toast.success(`${label} copied to clipboard`)
    setTimeout(() => setCopied(''), 3000)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How to Donate</h2>

          <div className="space-y-8">
            {/* Stripe Donation Section */}
            <div className="bg-white rounded-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.08)] max-w-[480px] mx-auto my-12 p-10 text-center border border-[#e5e5e5]">
              <Image
                src="/dimpactlogo.jpg"
                alt="Direct Impact Empowerment Logo"
                width={120}
                height={80}
                className="h-16 mx-auto mb-5 object-contain"
              />
              
              <h2 className="text-[28px] text-[#333] mb-4 font-semibold">💚 Donate Instantly by Card</h2>
              
              <p className="text-[#555] leading-relaxed mb-6">
                Your kindness feeds families and restores hope. Use your <strong>Visa</strong>, <strong>MasterCard</strong>, or <strong>Amex</strong> to give securely.
              </p>

              <div className="flex items-center justify-center gap-4 mb-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                  alt="Visa"
                  className="h-8 w-auto"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
                  alt="MasterCard"
                  className="h-8 w-auto"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
                  alt="Amex"
                  className="h-8 w-auto"
                />
              </div>

              <Link
                href="https://buy.stripe.com/4gMaEXeHH5Hi6yDgfQ3cc00"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#A5DC60] hover:bg-[#8ecf4f] text-white font-semibold py-3.5 px-8 my-6 rounded-[10px] no-underline transition-colors duration-200"
              >
                DONATE SECURELY VIA STRIPE
              </Link>

              <p className="text-[13px] text-[#777] italic mb-8">
                Secure • Encrypted • No card details stored
              </p>

              <div className="my-8 mx-auto w-4/5 border-t border-[#eee]"></div>

              <div className="mt-8">
                <p className="text-[13px] text-[#666] mb-2"><strong>Prefer to scan?</strong></p>
                <Image
                  src="/stripe.jpg"
                  alt="QR code to donate via Stripe"
                  width={150}
                  height={150}
                  className="h-[150px] w-auto mx-auto mt-2"
                />
                <p className="text-[13px] text-[#666] italic mt-2">
                  Scan to Give Instantly — Fast • Secure • Impactful Giving via Stripe
                </p>
              </div>

              <p className="text-[15px] text-[#444] mt-6 font-medium">
                &quot;Together, we can restore dignity — one act of kindness at a time.&quot;
              </p>
            </div>

            {/* Nigerian Account Section */}
            <div className="bg-white rounded-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.08)] max-w-[480px] mx-auto my-12 p-10 text-center border border-[#e5e5e5]">
              <Image
                src="/logoUBA.jpeg"
                alt="UBA Bank Logo"
                width={200}
                height={80}
                className="h-16 mx-auto mb-5 object-contain"
              />
              
              <h2 className="text-[28px] text-[#333] mb-4 font-semibold">🇳🇬 Donate in Nigeria (NGN)</h2>
              
              <p className="text-[#555] leading-relaxed mb-6">
                For donations within Nigeria, you can transfer directly to our United Bank for Africa (UBA) account.
              </p>

              <div className="space-y-4 mt-8">
                <h4 className="text-lg font-semibold">Account Details:</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="text-left">
                      <p className="text-sm text-gray-500">Account Number</p>
                      <p className="font-medium text-[#333]">1027681829</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-[#59B7E7]/10"
                      onClick={() => handleCopy('1027681829', 'Account number')}
                    >
                      <Copy
                        className={`w-4 h-4 ${
                          copied === '1027681829'
                            ? 'text-[#B5D858]'
                            : 'text-gray-500'
                        }`}
                      />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="text-left">
                      <p className="text-sm text-gray-500">Account Name</p>
                      <p className="font-medium text-[#333]">Direct Impact Empowerment Foundation</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-[#59B7E7]/10"
                      onClick={() => handleCopy('Direct Impact Empowerment Foundation', 'Account name')}
                    >
                      <Copy
                        className={`w-4 h-4 ${
                          copied === 'Direct Impact Empowerment Foundation'
                            ? 'text-[#B5D858]'
                            : 'text-gray-500'
                        }`}
                      />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="text-left">
                      <p className="text-sm text-gray-500">Bank Name</p>
                      <p className="font-medium text-[#333]">United Bank For Africa (UBA)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Switzerland Section */}
            <div className="bg-white rounded-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.08)] max-w-[480px] mx-auto my-12 p-10 text-center border border-[#e5e5e5]">
              <h2 className="text-[28px] text-[#333] mb-4 font-semibold">🇨🇭 Donate in Switzerland (CHF)</h2>
              
              <p className="text-[#555] leading-relaxed mb-6">
                If you&apos;re based in Switzerland, you can easily donate by scanning the QR-bill or using the bank details below.
              </p>

              <div className="space-y-6 mt-8">
                {/* Account Details Section */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Account Details:</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="text-left">
                        <p className="text-sm text-gray-500">Beneficiary</p>
                        <p className="font-medium text-[#333]">Direct Impact Empowerment Foundation</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-[#59B7E7]/10"
                        onClick={() => handleCopy('Direct Impact Empowerment Foundation', 'Beneficiary name')}
                      >
                        <Copy
                          className={`w-4 h-4 ${
                            copied === 'Direct Impact Empowerment Foundation'
                              ? 'text-[#B5D858]'
                              : 'text-gray-500'
                          }`}
                        />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="text-left">
                        <p className="text-sm text-gray-500">Account Number</p>
                        <p className="font-medium text-[#333]">CH94 83019 DIRECTIMP002</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-[#59B7E7]/10"
                        onClick={() => handleCopy('CH94 83019 DIRECTIMP002', 'Account number')}
                      >
                        <Copy
                          className={`w-4 h-4 ${
                            copied === 'CH94 83019 DIRECTIMP002'
                              ? 'text-[#B5D858]'
                              : 'text-gray-500'
                          }`}
                        />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="text-left">
                        <p className="text-sm text-gray-500">QR-IBAN</p>
                        <p className="font-medium text-[#333]">CH69 30334 DIRECTIMP002</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-[#59B7E7]/10"
                        onClick={() => handleCopy('CH69 30334 DIRECTIMP002', 'QR-IBAN')}
                      >
                        <Copy
                          className={`w-4 h-4 ${
                            copied === 'CH69 30334 DIRECTIMP002'
                              ? 'text-[#B5D858]'
                              : 'text-gray-500'
                          }`}
                        />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="text-left">
                        <p className="text-sm text-gray-500">Bank</p>
                        <p className="font-medium text-[#333]">YAPEAL</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="text-left">
                        <p className="text-sm text-gray-500">BIC</p>
                        <p className="font-medium text-[#333]">YAPECHZZ</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-[#59B7E7]/10"
                        onClick={() => handleCopy('YAPECHZZ', 'BIC')}
                      >
                        <Copy
                          className={`w-4 h-4 ${
                            copied === 'YAPECHZZ'
                              ? 'text-[#B5D858]'
                              : 'text-gray-500'
                          }`}
                        />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* QR Code Section */}
                <div className="text-center mt-8">
                  <h4 className="text-lg font-semibold mb-4">Scan the QR Code:</h4>
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/yapeal.jpeg"
                      alt="Yapeal QR-bill"
                      width={200}
                      height={250}
                      className="h-[200px] w-auto rounded-lg border-2 border-gray-200"
                    />
                  </div>
                  <p className="text-sm text-[#666]">
                    → Works with any Swiss banking app that supports QR-bill payments.
                  </p>
                </div>
              </div>
            </div>

            {/* International Section */}
            <div className="bg-white rounded-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.08)] max-w-[480px] mx-auto my-12 p-10 text-center border border-[#e5e5e5]">
              <h2 className="text-[28px] text-[#333] mb-4 font-semibold">🌍 Donate from Outside Switzerland (International Transfers)</h2>
              
              <p className="text-[#555] leading-relaxed mb-6">
                If you&apos;re outside Switzerland, please use these international (SWIFT) transfer details.
              </p>

              <div className="space-y-4 mt-8">
                <h4 className="text-lg font-semibold">Account Details:</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="text-left">
                      <p className="text-sm text-gray-500">Beneficiary</p>
                      <p className="font-medium text-[#333]">Direct Impact Empowerment Foundation</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-[#59B7E7]/10"
                      onClick={() => handleCopy('Direct Impact Empowerment Foundation', 'Beneficiary name')}
                    >
                      <Copy
                        className={`w-4 h-4 ${
                          copied === 'Direct Impact Empowerment Foundation'
                            ? 'text-[#B5D858]'
                            : 'text-gray-500'
                        }`}
                      />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="text-left">
                      <p className="text-sm text-gray-500">IBAN</p>
                      <p className="font-medium text-[#333]">CH94 83019 DIRECTIMP002</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-[#59B7E7]/10"
                      onClick={() => handleCopy('CH94 83019 DIRECTIMP002', 'IBAN')}
                    >
                      <Copy
                        className={`w-4 h-4 ${
                          copied === 'CH94 83019 DIRECTIMP002'
                            ? 'text-[#B5D858]'
                            : 'text-gray-500'
                        }`}
                      />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="text-left">
                      <p className="text-sm text-gray-500">Bank</p>
                      <p className="font-medium text-[#333]">YAPEAL AG</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="text-left">
                      <p className="text-sm text-gray-500">Bank Address</p>
                      <p className="font-medium text-[#333]">Hardturmstrasse 161, 8005 Zürich, Switzerland</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-[#59B7E7]/10"
                      onClick={() => handleCopy('Hardturmstrasse 161, 8005 Zürich, Switzerland', 'Bank address')}
                    >
                      <Copy
                        className={`w-4 h-4 ${
                          copied === 'Hardturmstrasse 161, 8005 Zürich, Switzerland'
                            ? 'text-[#B5D858]'
                            : 'text-gray-500'
                        }`}
                      />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="text-left">
                      <p className="text-sm text-gray-500">SWIFT/BIC</p>
                      <p className="font-medium text-[#333]">YAPECHZZ</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-[#59B7E7]/10"
                      onClick={() => handleCopy('YAPECHZZ', 'SWIFT/BIC')}
                    >
                      <Copy
                        className={`w-4 h-4 ${
                          copied === 'YAPECHZZ'
                            ? 'text-[#B5D858]'
                            : 'text-gray-500'
                        }`}
                      />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="text-left">
                      <p className="text-sm text-gray-500">Currency</p>
                      <p className="font-medium text-[#333]">CHF (Swiss Franc)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Receipt Information */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#59B7E7]/10 mb-4">
                    <Mail className="w-6 h-6 text-[#59B7E7]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Donation Receipt & Anonymous Donations</h3>
                  <p className="text-gray-600 mb-4">
                    If you&apos;d like a donation receipt or prefer to remain anonymous, please email:
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <Button
                      variant="outline"
                      className="border-[#59B7E7] text-[#59B7E7] hover:bg-[#59B7E7]/10"
                      onClick={() => handleCopy('donations@directimpactempowerment.org', 'Email address')}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      donations@directimpactempowerment.org
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}