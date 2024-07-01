import React from "react";

const quickLinks = ["About Us", "Services", "Contact", "Privacy Policy"];

const socialLinks = ["Facebook", "Twitter", "Instagram", "LinkedIn"];

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-white py-8 border-t mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h5 className="font-bold mb-4 text-primary-orange">Company</h5>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h5 className="font-bold mb-4 text-primary-orange">Quick Links</h5>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-secondary hover:text-primary-orange cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h5 className="font-bold mb-4 text-primary-orange">Contact</h5>
            <p className="text-secondary">123 Fake Street, City, Country</p>
            <p className="text-secondary">Email: info@company.com</p>
            <p className="text-secondary">Phone: +123 456 7890</p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h5 className="font-bold mb-4 text-primary-orange">Follow Us</h5>
            <ul className="space-y-4">
              {socialLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-secondary hover:text-primary-orange cursor-pointer "
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-secondary">
          © 2024{" "}
          <a
            href="https://www.mohamedrhanmi.com/"
            className="hover:underline hover:text-primary-orange cursor-pointer"
          >
            Mohamed Rhanmi
          </a>{" "}
          &{" "}
          <a
            href="https://xtreamers.io/"
            className="hover:underline hover:text-primary-orange cursor-pointer "
          >
            Xtream
          </a>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
