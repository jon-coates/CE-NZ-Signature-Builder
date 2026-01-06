'use client';

import { Country } from '@/config/socialMedia';

export interface SignatureData {
  country: Country;
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  address: string;
}

interface SignatureFormProps {
  data: SignatureData;
  onChange: (data: SignatureData) => void;
}

export default function SignatureForm({ data, onChange }: SignatureFormProps) {
  const handleChange = (field: keyof SignatureData, value: string | Country) => {
    const updatedData = {
      ...data,
      [field]: value,
    };

    // Update address default when country changes
    if (field === 'country') {
      updatedData.address = value === 'au'
        ? 'Brisbane | Sydney | Melbourne'
        : 'Auckland';
    }

    onChange(updatedData);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Email Signature Generator</h2>
      
      <div className="space-y-6">
        {/* Country Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Country
          </label>
          <div className="flex gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="country"
                value="au"
                checked={data.country === 'au'}
                onChange={(e) => handleChange('country', e.target.value as Country)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Australia</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="country"
                value="nz"
                checked={data.country === 'nz'}
                onChange={(e) => handleChange('country', e.target.value as Country)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">New Zealand</span>
            </label>
          </div>
        </div>

        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={data.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="John Doe"
          />
        </div>

        {/* Job Title */}
        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            value={data.jobTitle}
            onChange={(e) => handleChange('jobTitle', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Senior Editor"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="john.doe@carexpert.com.au"
          />
        </div>

        {/* Contact Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Contact Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="+61 2 1234 5678"
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
            Address
          </label>
          <textarea
            id="address"
            value={data.address}
            onChange={(e) => handleChange('address', e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="123 Main Street, Sydney NSW 2000"
          />
        </div>
      </div>
    </div>
  );
}

