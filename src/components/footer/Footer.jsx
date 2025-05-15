"use client"
import React from 'react';
import Logo from '../../../src/assets/Logo/white.svg';
import { SUBJECTS, footerCols, footerContact, footerSocials } from '../../utils/constant';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { PRIMARY_GREEN, PRIMARY_TEXT } from '../../utils/theme';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className=" bg-[#37393F] py-8 text-white">
      <div className="px-4 max-w-[1400px] m-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Logo */}
          <div className="md:col-span-2">
            <Link to="/">
              <img src={Logo} alt="Logo" className='w-32 h-auto md:w-[8rem] md:m-auto' />
            </Link>
          </div>

          {/* Quick Links and Popular Subjects */}
          <div className="md:col-span-6">
            {/* Quick Links */}
            <div className="mb-6">
              <div className="mb-3 flex items-center">
                <div className="mr-2 h-4 w-4" style={{ backgroundColor: PRIMARY_GREEN }}></div>
                <h3 className="font-medium">{footerCols[0].heading}</h3>
              </div>
              <ul className="flex flex-wrap gap-x-4">
                {footerCols[0].links.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      to={link.path} 
                      className="transition-colors duration-200 hover:text-green-600"
                      style={{ color: location.pathname === link.path ? PRIMARY_GREEN : 'inherit' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-gray-700"></div>

            {/* Popular Subjects */}
            <div>
              <div className="mb-3 flex items-center">
                <div className="mr-2 h-4 w-4" style={{ backgroundColor: PRIMARY_GREEN }}></div>
                <h3 className="font-medium">{footerCols[1].heading}</h3>
              </div>
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {footerCols[1].links.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      to={link.path} 
                      className="transition-colors duration-200 hover:text-green-600"
                      style={{ color: location.pathname === link.path ? PRIMARY_GREEN : 'inherit' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-4">
            {/* WhatsApp */}
            <div className="mb-4 flex items-center">
              <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: PRIMARY_GREEN }}>
                <FaPhone className="text-white text-sm" />
              </div>
              <div>
                <h4 className="font-medium">{footerContact.whatsapp.label}</h4>
                <a href={footerContact.whatsapp.link} className="text-sm hover:text-green-400" style={{ ":hover": { color: PRIMARY_GREEN } }} target="_blank" rel="noopener noreferrer">{footerContact.whatsapp.value}</a>
              </div>
            </div>

            {/* Mail */}
            <div className="mb-4 flex items-center">
              <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: PRIMARY_GREEN }}>
                <FaEnvelope className="text-white text-sm" />
              </div>
              <div>
                <h4 className="font-medium">{footerContact.email.label}</h4>
                <a href={footerContact.email.link} className="text-sm hover:text-green-400" style={{ ":hover": { color: PRIMARY_GREEN } }}>{footerContact.email.value}</a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center">
              <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: PRIMARY_GREEN }}>
                <FaMapMarkerAlt className="text-white text-sm" />
              </div>
              <div>
                <h4 className="font-medium">{footerContact.location.label}</h4>
                <a href={footerContact.location.link} className="text-sm hover:text-green-400" style={{ ":hover": { color: PRIMARY_GREEN } }} target="_blank" rel="noopener noreferrer">{footerContact.location.address}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Copyright and Social Media */}
        <div className="flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <div>
            <p className="text-sm">
              Copyright ©{" "}
              <a href="/" style={{ color: PRIMARY_GREEN }}>
                theoasisacademy
              </a>{" "}
              | Designed by{" "}
              <a href="#" className="text-pink-500">
                CollabEZ
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {footerSocials.map((social) => (
              <a key={social.id} href={social.link || '#'} target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-800 hover:bg-gray-100">
                {social.name.toLowerCase().includes('facebook') && <FaFacebookF className="text-lg" />}
                {social.name.toLowerCase().includes('twitter') && <FaTwitter className="text-lg" />}
                {social.name.toLowerCase().includes('instagram') && <FaInstagram className="text-lg" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
