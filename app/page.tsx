'use client';

import { useState } from 'react';
import SignatureForm, { SignatureData } from '@/components/SignatureForm';
import SignaturePreview from '@/components/SignaturePreview';

const initialData: SignatureData = {
  country: 'au',
  fullName: '',
  jobTitle: '',
  email: '',
  phone: '',
  address: '',
};

export default function Home() {
  const [signatureData, setSignatureData] = useState<SignatureData>(initialData);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            CarExpert Email Signature Generator
          </h1>
          <p className="text-gray-600">
            Create your professional email signature for Australia or New Zealand
          </p>
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

