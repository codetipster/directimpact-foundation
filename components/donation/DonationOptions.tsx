'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { Copy } from 'lucide-react'
import { toast } from 'sonner'

const bankDetails = [
  {
    accountNumber: '3004683145',
    accountName: 'Direct Impact Empowerment Foundation',
    bankName: 'United Bank For Africa (UBA)',
  },
  {
    accountNumber: '1027681829',
    accountName: 'Direct Impact',
    bankName: 'United Bank For Africa (UBA)',
  },
]

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

          <Tabs defaultValue="bank" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
              <TabsTrigger value="paypal">PayPal</TabsTrigger>
            </TabsList>

            <TabsContent value="bank">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <p className="text-gray-600 mb-4">
                        Support us directly by transferring funds to the account details below. 
                        You can choose a one-time donation or set up recurring contributions 
                        to support our ongoing programs.
                      </p>
                    </div>
                     
                    <div className="grid gap-4">
                      {bankDetails.map((details, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg bg-[#59B7E7]/5 flex justify-between items-center"
                        >
                          <div>
                            <p className="text-sm text-gray-500">Account Number</p>
                            <p className="font-medium">{details.accountNumber}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="hover:bg-[#59B7E7]/10"
                            onClick={() =>
                              handleCopy(details.accountNumber, 'Account number')
                            }
                          >
                            <Copy
                              className={`w-4 h-4 ${
                                copied === details.accountNumber
                                  ? 'text-[#B5D858]'
                                  : 'text-gray-500'
                              }`}
                            />
                          </Button>

                          <div>
                            <p className="text-sm text-gray-500">Account Name</p>
                            <p className="font-medium">{details.accountName}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="hover:bg-[#59B7E7]/10"
                            onClick={() =>
                              handleCopy(details.accountName, 'Account name')
                            }
                          >
                            <Copy
                              className={`w-4 h-4 ${
                                copied === details.accountName
                                  ? 'text-[#B5D858]'
                                  : 'text-gray-500'
                              }`}
                            />
                          </Button>

                          <div>
                            <p className="text-sm text-gray-500">Bank Name</p>
                            <p className="font-medium">{details.bankName}</p>
                          </div>
                          <Image
                            src="/logoUBA.jpeg"
                            alt="Bank Logo"
                            width={200}
                            height={100}
                            className="mr-2"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="paypal">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center space-y-6">
                    <p className="text-gray-600">
                      Convenient and secure. Click the button below to make a one-time or 
                      recurring donation through PayPal.
                    </p>
                    <div className="flex justify-center">
                      <Button 
                        size="lg"
                        className="bg-[#B5D858] hover:bg-[#59B7E7] transition-colors"
                      >
                        <Image
                          src="/paypal.png"
                          alt="PayPal"
                          width={80}
                          height={20}
                          className="mr-2"
                        />
                        Donate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
