import React from 'react';
import { Heart, DollarSign } from 'lucide-react';

const Donate = () => {
  return (
    <div className="max-w-4xl mx-auto pt-20 px-4 py-12">
      <div className="text-center mb-12">
        <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
        <p className="text-xl text-gray-600">
          Your donation helps us provide quality baseball training to young athletes
          and maintain our facilities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img
            src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
            alt="PayPal"
            className="h-16 mb-6"
          />
          <h3 className="text-xl font-semibold mb-4">Donate via PayPal</h3>
          <p className="text-gray-600 mb-6">
            Make a secure one-time or recurring donation through PayPal.
          </p>
          <button
            onClick={() => window.open('YOUR_PAYPAL_LINK', '_blank')}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <DollarSign className="inline-block mr-2 h-5 w-5" />
            Donate with PayPal
          </button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <img
            src="https://c5.patreon.com/external/logo/rebrand_logo_padded.png"
            alt="Patreon"
            className="h-16 mb-6"
          />
          <h3 className="text-xl font-semibold mb-4">Support us on Patreon</h3>
          <p className="text-gray-600 mb-6">
            Become a patron and receive exclusive updates and benefits.
          </p>
          <button
            onClick={() => window.open('YOUR_PATREON_LINK', '_blank')}
            className="w-full bg-[#FF424D] text-white py-3 rounded-lg hover:bg-[#e63e47] transition-colors"
          >
            Become a Patron
          </button>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 p-8 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Other Ways to Support</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="bg-green-100 p-2 rounded-full mr-4">
              <DollarSign className="h-5 w-5 text-green-600" />
            </span>
            <div>
              <h4 className="font-semibold">Equipment Donations</h4>
              <p className="text-gray-600">Donate new or gently used baseball equipment.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 p-2 rounded-full mr-4">
              <Heart className="h-5 w-5 text-blue-600" />
            </span>
            <div>
              <h4 className="font-semibold">Volunteer</h4>
              <p className="text-gray-600">Help us organize events and maintain our facilities.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Donate;