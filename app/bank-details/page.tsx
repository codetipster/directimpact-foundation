import { Metadata } from 'next';
import BankDetailsClient from '@/components/BankDetailsClient';

export const metadata: Metadata = {
  title: 'Donate - Direct Impact Empowerment Foundation',
  description: 'Support youth empowerment and community transformation through your generous donation.',
};

export default function BankDetailsPage() {
  return <BankDetailsClient />;
}
