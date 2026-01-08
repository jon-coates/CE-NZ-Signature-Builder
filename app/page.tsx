'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import SignatureForm, { SignatureData } from '@/components/SignatureForm';
import SignaturePreview from '@/components/SignaturePreview';
import { Country } from '@/config/socialMedia';

const getInitialData = (country: Country): SignatureData => ({
  country,
  fullName: '',
  jobTitle: '',
  email: '',
  phone: '',
  address: country === 'au' ? 'Brisbane | Sydney | Melbourne' : 'Auckland',
});

export default function Home() {
  const searchParams = useSearchParams();
  const countryParam = searchParams.get('country');

  // Parse and validate the country parameter
  const initialCountry: Country =
    countryParam === 'nz' || countryParam === 'au'
      ? countryParam
      : 'au';

  const [signatureData, setSignatureData] = useState<SignatureData>(getInitialData(initialCountry));

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            CarExpert Email Signature Generator
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <SignatureForm data={signatureData} onChange={setSignatureData} />
          </div>
          <div>
            <SignaturePreview data={signatureData} />
          </div>
        </div>
      </div>
    </main>
  );
}

