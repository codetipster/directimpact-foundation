'use client'

import { useState } from 'react'
import Image from 'next/image'
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
            {/* Nigerian Account Section */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4">🇳🇬 Donate in Nigeria (NGN)</h3>
                  <p className="text-gray-600 mb-6">
                    For donations within Nigeria, you can transfer directly to our United Bank for Africa (UBA) account.
                  </p>
                </div>

                <div className="flex justify-center mb-6">
                  <Image
                    src="/logoUBA.jpeg"
                    alt="UBA Bank Logo"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-center">Account Details:</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-500">Account Number</p>
                        <p className="font-medium">1027681829</p>
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
                      <div>
                        <p className="text-sm text-gray-500">Account Name</p>
                        <p className="font-medium">Direct Impact Empowerment Foundation</p>
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
                      <div>
                        <p className="text-sm text-gray-500">Bank Name</p>
                        <p className="font-medium">United Bank For Africa (UBA)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Switzerland Section */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4">🇨🇭 Donate in Switzerland (CHF)</h3>
                  <p className="text-gray-600 mb-6">
                    If you&apos;re based in Switzerland, you can easily donate by scanning the QR-bill or using the bank details below.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* QR Code Section */}
                  <div className="text-center">
                    <h4 className="text-lg font-semibold mb-4">Scan the QR Code:</h4>
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/yapeal.jpeg"
                        alt="Yapeal QR-bill"
                        width={300}
                        height={400}
                        className="rounded-lg border-2 border-gray-200"
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      → Works with any Swiss banking app that supports QR-bill payments.
                    </p>
                  </div>

                  {/* Account Details Section */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Account Details:</h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-sm text-gray-500">Beneficiary</p>
                          <p className="font-medium">Direct Impact Empowerment Foundation</p>
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
                        <div>
                          <p className="text-sm text-gray-500">Account Number</p>
                          <p className="font-medium">CH94 83019 DIRECTIMP002</p>
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
                        <div>
                          <p className="text-sm text-gray-500">QR-IBAN</p>
                          <p className="font-medium">CH69 30334 DIRECTIMP002</p>
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
                        <div>
                          <p className="text-sm text-gray-500">Bank</p>
                          <p className="font-medium">YAPEAL</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-sm text-gray-500">BIC</p>
                          <p className="font-medium">YAPECHZZ</p>
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
                </div>
              </CardContent>
            </Card>

            {/* International Section */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-4">🌍 Donate from Outside Switzerland (International Transfers)</h3>
                  <p className="text-gray-600 mb-6">
                    If you&apos;re outside Switzerland, please use these international (SWIFT) transfer details.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Account Details:</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-500">Beneficiary</p>
                        <p className="font-medium">Direct Impact Empowerment Foundation</p>
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
                      <div>
                        <p className="text-sm text-gray-500">IBAN</p>
                        <p className="font-medium">CH94 83019 DIRECTIMP002</p>
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
                      <div>
                        <p className="text-sm text-gray-500">Bank</p>
                        <p className="font-medium">YAPEAL AG</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-500">Bank Address</p>
                        <p className="font-medium">Hardturmstrasse 161, 8005 Zürich, Switzerland</p>
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
                      <div>
                        <p className="text-sm text-gray-500">SWIFT/BIC</p>
                        <p className="font-medium">YAPECHZZ</p>
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
                      <div>
                        <p className="text-sm text-gray-500">Currency</p>
                        <p className="font-medium">CHF (Swiss Franc)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

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