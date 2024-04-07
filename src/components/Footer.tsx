import Image from 'next/image'
import React from 'react'
import logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div>
      <footer className="bg-white  shadow dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#MainPage" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <Image src={logo} alt='logo' className='w-8'/>
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ice Theme</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#PreviewSection" className="hover:underline me-4 md:me-6">Preview</a>
                </li>
                <li>
                    <a href="#TestimonialSection" className="hover:underline me-4 md:me-6">Testimonials</a>
                </li>
                <div className='space-x-6'>
                    {/* GitHub icon */}
                <a href="https://github.com/Ayushmaan0101/Ice-Theme" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} style={{ color: 'white', fontSize: '30px' }} />
                </a>

                {/* Twitter icon */}
                <a href="https://twitter.com/AyushmaansinghX" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} style={{ color: 'white', fontSize: '30px' }} />
                </a>
                </div> 
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Ice Theme™</a>. All Rights Reserved.</span>
    </div>
</footer>

    </div>
  )
}

export default Footer
