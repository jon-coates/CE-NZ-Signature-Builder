'use client';

import { useState } from 'react';
import { SignatureData } from './SignatureForm';
import { socialMediaConfig } from '@/config/socialMedia';

interface SignaturePreviewProps {
  data: SignatureData;
}

export default function SignaturePreview({ data }: SignaturePreviewProps) {
  const [copied, setCopied] = useState(false);
  const countryConfig = socialMediaConfig[data.country];

  const generateSignatureHTML = (): string => {
    // Escape HTML to prevent XSS
    const escapeHtml = (text: string) => {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };

    // Escape URL but keep it valid for href attributes
    const escapeUrl = (url: string) => {
      return url.replace(/&/g, '&amp;');
    };

    const fullName = escapeHtml(data.fullName || 'Your Name');
    const jobTitle = escapeHtml(data.jobTitle || 'Job Title');
    
    // Check which contact fields are provided
    const hasEmail = data.email && data.email.trim() !== '';
    const hasPhone = data.phone && data.phone.trim() !== '';
    const hasAddress = data.address && data.address.trim() !== '';
    
    const email = escapeHtml(data.email || '');
    const phone = escapeHtml(data.phone || '');
    const address = escapeHtml(data.address || '');
    const emailUrl = escapeUrl(`mailto:${data.email || ''}`);
    const phoneUrl = escapeUrl(`tel:${data.phone || ''}`);

    // Determine website URL based on country
    const websiteUrl = data.country === 'nz'
      ? 'https://www.carexpert.co.nz/'
      : 'https://www.carexpert.com.au/';

    // Build social links as table cells
    const socialLinksCells = countryConfig.socialLinks
      .map(
        (link) =>
          `<td align="center">
            <a href="${escapeUrl(link.url)}" target="_blank"><img height="25" width="25" src="${escapeUrl(link.icon)}" border="0" style="max-width: 25px;" /></a>
          </td>`
      )
      .join('');

    return `<table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: small; font-family: sans-serif;">
  <tbody>
    <tr>
      <td valign="middle" style="vertical-align: middle">
        <table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: small; font-family: sans-serif;">
          <tbody>
            <tr>
              <td valign="top" style="vertical-align: top">
                <table cellpadding="0" border="0" cellspacing="0" style="vertical-align: -webkit-baseline-middle; font-size: small; font-family: sans-serif; width: 100%;">
                  <tbody>
                    <tr>
                      <td valign="top" style="vertical-align: top;">
                        <a href="${escapeUrl(websiteUrl)}" target="_blank"><img src="${escapeUrl(countryConfig.logo)}" role="presentation" width="180" border="0" style="max-width: 180px; display: block;" /></a>

                        <table width="100%" border="0" style="margin-top: 10px;">
                          <tbody>
                            <tr>
                              ${socialLinksCells}
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td width="15" aria-label="Vertical Spacer"><div style="width: 15px;"></div></td>
                      <td width="1" aria-label="Divider" style="width: 1px; height: auto; border-bottom: none; border-left: 1px solid rgb(255, 0, 0);"></td>
                      <td width="15" aria-label="Vertical Spacer"><div style="width: 15px;"></div></td>
                      <td valign="top">
                        <table cellpadding="0" cellspacing="0" border="0">
                          <tbody>
                            <tr>
                              <td style="font-family: sans-serif; font-size: 16px; color: #000000; line-height: 20px; padding: 0; margin: 0;">
                                <b>${fullName}</b>
                              </td>
                            </tr>
                            <tr>
                              <td style="font-family: sans-serif; font-size: 12px; color: #000000; line-height: 20px; padding: 0; margin: 0;">
                                ${jobTitle}
                              </td>
                            </tr>
                            ${hasEmail || hasPhone ? `
                            <tr>
                              <td style="font-family: sans-serif; font-size: 12px; font-weight: 500; color: #000000; line-height: 20px; padding: 0; margin: 0;">
                                ${hasEmail ? `<a href="${emailUrl}" color="#000000" style="text-decoration: none; color: #000000; font-size: 12px;"><span>${email}</span></a>` : ''}${hasEmail && hasPhone ? '<br>' : ''}${hasPhone ? `<a href="${phoneUrl}" color="#000000" style="text-decoration: none; color: #000000; font-size: 12px;"><span>${phone}</span></a>` : ''}
                              </td>
                            </tr>
                            ` : ''}
                            ${hasAddress ? `
                            <tr>
                              <td height="10" aria-label="Horizontal Spacer" style="font-size: 0; line-height: 0;">&nbsp;</td>
                            </tr>
                            <tr>
                              <td style="font-family: sans-serif; font-size: 12px; color: #000000; line-height: 15px; padding: 0; margin: 0;">
                                ${address}
                              </td>
                            </tr>
                            <tr>
                              <td height="10" aria-label="Horizontal Spacer" style="font-size: 0; line-height: 0;">&nbsp;</td>
                            </tr>
                            ` : ''}
                          </tbody>
                        </table>
                      </td>
                      <td width="15" aria-label="Vertical Spacer"><div style="width: 15px;"></div></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>`;
  };

  const handleCopy = async () => {
    try {
      const html = generateSignatureHTML();
      
      // Create a temporary container with the HTML content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      tempDiv.style.position = 'fixed';
      tempDiv.style.left = '-9999px';
      tempDiv.style.top = '-9999px';
      document.body.appendChild(tempDiv);
      
      // Select the content
      const range = document.createRange();
      range.selectNodeContents(tempDiv);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
      
      // Copy using execCommand which preserves HTML formatting for email clients
      document.execCommand('copy');
      
      // Clean up
      selection?.removeAllRanges();
      document.body.removeChild(tempDiv);
      
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      // Fallback: try modern Clipboard API
      try {
        const html = generateSignatureHTML();
        const clipboardItem = new ClipboardItem({
          'text/html': new Blob([html], { type: 'text/html' }),
        });
        await navigator.clipboard.write([clipboardItem]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error('Fallback copy also failed:', fallbackErr);
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Preview</h2>
        <button
          onClick={handleCopy}
          className={`px-6 py-2 rounded-md font-medium transition-colors ${
            copied
              ? 'bg-green-600 text-white'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {copied ? '✓ Copied!' : 'Copy Signature'}
        </button>
      </div>

      <div className="border border-gray-300 rounded-md p-6 bg-gray-50">
        <div
          className="signature-preview"
          dangerouslySetInnerHTML={{
            __html: generateSignatureHTML(),
          }}
        />
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p className="mb-2">
          <strong>How to use:</strong>
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Click the &quot;Copy Signature&quot; button above</li>
          <li>Go to your Gmail settings → Signature</li>
          <li>Paste the copied signature into your signature editor</li>
        </ol>
      </div>
    </div>
  );
}

