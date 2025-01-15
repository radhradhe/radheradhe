import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Business Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-4">Business Details</h3>
            <p className="mb-2">XYZ Business Solutions</p>
            <p className="mb-2">123 Business Street</p>
            <p className="mb-2">New York, NY 10001, USA</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: contact@xyzbusiness.com</p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="/careers" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Map View */}
          <div>
            <h3 className="text-lg font-bold mb-4">Locate Us</h3>
            <iframe
              className="w-full h-48 rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0458101525763!2d-74.00594168459556!3d40.7127757793307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316cbb0d9d%3A0xb1b8e692c1a3d96c!2sNew%20York%20City%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1672333442958!5m2!1sen!2s"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} XYZ Business Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
