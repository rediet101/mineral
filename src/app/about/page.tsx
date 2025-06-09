'use client'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer';
import Link from 'next/link'

const timeline = [
  {
    year: "1995",
    title: "Company Founded",
    description:
      "Ethiopian Mineral Corporation was established with a vision to develop Ethiopia's rich mineral resources sustainably.",
    side: "right",
  },
  {
    year: "2003",
    title: "First Major Discovery",
    description:
      "Discovered significant gold deposits in the Oromia region, marking our first major success in mineral exploration.",
    side: "left",
  },
  {
    year: "2008",
    title: "Laboratory Expansion",
    description:
      "Expanded our testing capabilities with a state-of-the-art laboratory facility in Addis Ababa.",
    side: "right",
  },
  {
    year: "2012",
    title: "International Recognition",
    description:
      "Received international certification for our sustainable mining practices and environmental management systems.",
    side: "left",
  },
  {
    year: "2017",
    title: "Gemstone Division",
    description:
      "Launched our gemstone division, focusing on ethically sourced emeralds, sapphires, and other precious stones.",
    side: "right",
  },
  {
    year: "2022",
    title: "Digital Transformation",
    description:
      "Implemented advanced digital technologies across our operations to enhance efficiency and sustainability.",
    side: "left",
  },
];

const page = () => {
  const [activeTab, setActiveTab] = useState('history');

  const renderContent = () => {
    switch (activeTab) {
      case 'mission':
        return (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8">
              Our Mission & Vision
            </h2>
            <p className="text-gray-600 max-w-2xl mb-8 md:mb-12 text-sm md:text-base">
              Guided by a clear mission and ambitious vision, Ethiopian Mineral Corporation is committed to responsible resource development that benefits all stakeholders.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Mission Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-black">
                <div className="bg-[#1B1F24] p-6 flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center mb-2">
                  <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="76" height="76" rx="38" fill="white"/>
<path d="M33.7297 51.9102V49.625H43.0461V51.9102C43.0461 52.2617 42.9289 52.6133 42.7531 52.9648L41.757 54.4297C41.4055 54.957 40.8195 55.3086 40.175 55.3086H36.6008C35.9563 55.3086 35.3703 54.957 35.0188 54.4297L34.0227 52.9648C33.7883 52.6133 33.7297 52.2617 33.7297 51.9102ZM28.1047 35.5625C28.1047 30.1133 32.382 25.3086 38.3586 25.25C44.0422 25.25 48.7297 29.8789 48.7297 35.5625C48.7297 38.1992 47.7336 40.543 46.1516 42.3594C45.1555 43.4727 43.6906 45.8164 43.1047 47.75C43.1047 47.75 43.1047 47.75 43.1047 47.8086H33.6711C33.6711 47.75 33.6711 47.75 33.6711 47.75C33.0852 45.8164 31.6203 43.4727 30.6242 42.3594C29.0422 40.543 28.1047 38.1992 28.1047 35.5625ZM38.4172 30.875C38.8859 30.875 39.3547 30.4648 39.3547 29.9375C39.3547 29.4688 38.8859 29 38.4172 29C34.7844 29 31.8547 31.9883 31.8547 35.5625C31.8547 36.0898 32.2648 36.5 32.7922 36.5C33.2609 36.5 33.7297 36.0898 33.7297 35.5625C33.7297 32.9844 35.7805 30.875 38.4172 30.875Z" fill="black"/>
</svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-600 mb-6 text-sm md:text-base">
                    To develop Ethiopia's mineral resources through sustainable and innovative practices that create value for our shareholders, employees, communities, and the nation while maintaining the highest standards of environmental stewardship.
                  </p>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✔</span>
                      <span className="text-gray-600 text-sm md:text-base">Explore and develop mineral resources responsibly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✔</span>
                      <span className="text-gray-600 text-sm md:text-base">Provide high-quality services to the mining industry</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✔</span>
                      <span className="text-gray-600 text-sm md:text-base">Support local communities through employment and development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✔</span>
                      <span className="text-gray-600 text-sm md:text-base">Minimize environmental impact through sustainable practices</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-black">
                <div className="bg-[#1B1F24] p-6 flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center mb-2">
                  <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="76" height="76" rx="38" fill="white"/>
<path d="M47.5656 28.0625V30.875H41.9406V28.0625C41.9406 27.5938 42.3508 27.125 42.8781 27.125H46.6281C47.0969 27.125 47.5656 27.5938 47.5656 28.0625ZM26.882 34.625C26.9406 33.6289 27.7609 32.75 28.757 32.75H34.4406V42.125H32.5656V51.5C32.5656 52.5547 31.6867 53.375 30.6906 53.375H25.0656C24.0109 53.375 23.1906 52.5547 23.1906 51.5V48.9219C23.3664 41.3633 26.7648 40.1328 26.882 34.625ZM49.4406 34.625C49.5578 40.1328 52.9563 41.3633 53.1906 48.9219V51.5C53.1906 52.5547 52.3117 53.375 51.3156 53.375H45.6906C44.6359 53.375 43.8156 52.5547 43.8156 51.5V42.125H41.9406V32.75H47.5656C48.5617 32.75 49.382 33.6289 49.4406 34.625ZM33.5031 27.125C33.9719 27.125 34.4406 27.5938 34.4406 28.0625V30.875H28.8156V28.0625C28.8156 27.5938 29.2258 27.125 29.7531 27.125H33.5031ZM36.3156 42.125V32.75H40.0656V42.125H36.3156Z" fill="#060606"/>
</svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-600 mb-6 text-sm md:text-base">
                    To be the leading mineral resource company in Africa, recognised for excellence in exploration, sustainable mining practices, and positive contributions to economic development and community well-being.
                  </p>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">➔</span>
                      <span className="text-gray-600 text-sm md:text-base">Become the partner of choice for international mining ventures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">➔</span>
                      <span className="text-gray-600 text-sm md:text-base">Lead the industry in innovative and sustainable mining technologies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">➔</span>
                      <span className="text-gray-600 text-sm md:text-base">Set the standard for environmental and social responsibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">➔</span>
                      <span className="text-gray-600 text-sm md:text-base">Drive economic growth and development across Ethiopia</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case 'values':
        return (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mb-8 md:mb-12 text-sm md:text-base">
              These fundamental principles guide our decisions, actions, and relationships, defining who we are as a company and how we conduct our business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Integrity */}
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-black text-center">
                <div className="mb-4 flex justify-center">
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="76" height="76" rx="38" fill="black"/>
<path d="M44.5867 29C45.1141 29 45.5828 29.2344 45.9344 29.5859L49.0984 32.75V44.1172C48.9813 43.9414 48.8055 43.8242 48.6883 43.6484L40.1336 36.7344L41.657 35.3281C42.0672 34.9766 42.0672 34.3906 41.7156 34.0391C41.3641 33.6289 40.7781 33.6289 40.368 33.9805L35.7391 38.2578C35.6805 38.2578 35.6805 38.2578 35.6805 38.2578C34.6844 39.1367 33.1609 38.9023 32.3992 38.082C31.5789 37.2031 31.5789 35.7383 32.5164 34.8008L38.3172 29.5273C38.6688 29.1758 39.0789 29 39.5477 29H44.5867ZM51.032 32.8086H56.657V47.8086H52.907C51.8523 47.8086 51.032 46.9297 51.032 45.9336V32.8086ZM53.8445 45.9336C54.3133 45.9336 54.782 45.4648 54.782 44.9961C54.782 44.4688 54.3133 44.0586 53.8445 44.0586C53.3172 44.0586 52.907 44.4688 52.907 44.9961C52.907 45.4648 53.3172 45.9336 53.8445 45.9336ZM19.157 47.75V32.8086H24.782V45.875C24.782 46.9297 23.9031 47.75 22.907 47.75H19.157ZM21.9695 44.0586C21.4422 44.0586 21.032 44.4688 21.032 44.9961C21.032 45.4648 21.4422 45.9336 21.9695 45.9336C22.4383 45.9336 22.907 45.4648 22.907 44.9961C22.907 44.4688 22.4383 44.0586 21.9695 44.0586ZM47.4578 45.1133C48.2781 45.7578 48.3953 46.9297 47.7508 47.75L47.2234 48.4531C46.5203 49.2734 45.3484 49.3906 44.5867 48.7461L44.2352 48.4531L42.4188 50.7383C41.657 51.6758 40.2508 51.793 39.3133 51.0312L38.3172 50.1523H38.2586C36.9695 51.7344 34.6258 52.0273 32.9852 50.6797L27.7117 45.875H26.657V32.75L29.8211 29.5859C30.1727 29.2344 30.6414 29 31.1688 29H36.0906L31.2859 33.3945C29.5867 34.9766 29.4695 37.6719 30.993 39.3711C32.575 41.0703 35.2117 41.2461 36.9695 39.6055L38.7273 38.0234L47.4578 45.1133Z" fill="white"/>
</svg>

                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  We operate with honesty and transparency in all our business dealings, maintaining the highest ethical standards.
                </p>
              </div>

              {/* Innovation */}
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-black text-center">
                <div className="mb-4 flex justify-center">
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="76" height="76" rx="38" fill="black"/>
<path d="M33.7297 51.9102V49.625H43.0461V51.9102C43.0461 52.2617 42.9289 52.6133 42.7531 52.9648L41.757 54.4297C41.4055 54.957 40.8195 55.3086 40.175 55.3086H36.6008C35.9563 55.3086 35.3703 54.957 35.0188 54.4297L34.0227 52.9648C33.7883 52.6133 33.7297 52.2617 33.7297 51.9102ZM28.1047 35.5625C28.1047 30.1133 32.382 25.3086 38.3586 25.25C44.0422 25.25 48.7297 29.8789 48.7297 35.5625C48.7297 38.1992 47.7336 40.543 46.1516 42.3594C45.1555 43.4727 43.6906 45.8164 43.1047 47.75C43.1047 47.75 43.1047 47.75 43.1047 47.8086H33.6711C33.6711 47.75 33.6711 47.75 33.6711 47.75C33.0852 45.8164 31.6203 43.4727 30.6242 42.3594C29.0422 40.543 28.1047 38.1992 28.1047 35.5625ZM38.4172 30.875C38.8859 30.875 39.3547 30.4648 39.3547 29.9375C39.3547 29.4688 38.8859 29 38.4172 29C34.7844 29 31.8547 31.9883 31.8547 35.5625C31.8547 36.0898 32.2648 36.5 32.7922 36.5C33.2609 36.5 33.7297 36.0898 33.7297 35.5625C33.7297 32.9844 35.7805 30.875 38.4172 30.875Z" fill="white"/>
</svg>

                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  We continuously seek new technologies and approaches to improve our operations and deliver better results.
                </p>
              </div>

              {/* Sustainability */}
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-black text-center">
                <div className="mb-4 flex justify-center">
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="76" height="76" rx="38" fill="black"/>
<path d="M53.3078 25.8359C54.4211 28.3555 55.0656 31.4023 55.0656 34.332C55.0656 44.4102 48.5617 52.6719 39.3625 53.3164C34.6164 53.8438 31.0422 51.3828 29.1086 48.8047C26.1203 51.3242 25.007 53.9023 24.8898 54.1367C24.4797 55.0742 23.425 55.543 22.4289 55.1328C21.4914 54.7227 21.0227 53.668 21.4328 52.6719C22.8391 49.332 29.05 40.25 43.8156 40.25C44.2844 40.25 44.7531 39.8398 44.7531 39.3125C44.7531 38.8438 44.2844 38.375 43.8156 38.375C36.1398 38.375 30.7492 40.6602 26.9992 43.3555C26.9406 42.9453 26.9406 42.5352 26.9406 42.125C26.9406 35.9141 31.9797 30.875 38.1906 30.875H42.8781C46.5695 30.875 49.7922 28.9414 51.6086 25.7773C52.0188 25.0742 52.9563 25.1328 53.3078 25.8359Z" fill="white"/>
</svg>

                </div>
                <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  We are committed to environmentally responsible mining practices that protect and preserve natural resources.
                </p>
              </div>

              {/* Excellence */}
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-black text-center">
                <div className="mb-4 flex justify-center">
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="76" height="76" rx="38" fill="black"/>
<path d="M32.8508 46.5195C33.6125 47.3398 34.7258 47.75 35.8391 47.75C36.6008 47.75 37.3039 47.5742 37.9484 47.2227L34.843 54.7227C34.6086 55.3086 33.7883 55.4844 33.3195 54.957L31.2102 52.7305L28.1047 52.8477C27.4602 52.9062 26.9328 52.2031 27.2258 51.5586L29.8625 45.0547C30.3313 45.4062 30.8 45.6992 31.3859 45.8164C32.5578 46.168 32.3234 45.9922 32.8508 46.5195ZM49.55 51.5586C49.843 52.2031 49.3156 52.9062 48.6711 52.8477L45.5656 52.7305L43.4563 54.957C42.9875 55.4844 42.1672 55.3086 41.9328 54.7227L38.8273 47.2227C39.4719 47.5742 40.175 47.75 40.9367 47.75C42.05 47.75 43.1633 47.3398 43.925 46.5195C44.4523 45.9922 44.1594 46.168 45.4484 45.8164C45.9758 45.6992 46.4445 45.4062 46.9133 45.0547L49.55 51.5586ZM42.5773 45.1719C41.757 45.9922 40.5852 46.1094 39.6477 45.5234C39.2961 45.2891 38.8273 45.1719 38.3586 45.1719C37.9484 45.1719 37.4797 45.2891 37.1281 45.5234C36.1906 46.1094 35.0188 45.9922 34.257 45.1719C33.3781 44.293 33.2609 44.3516 31.9719 44C31.1516 43.8242 30.507 43.1797 30.2727 42.3008C29.8625 40.6602 29.9797 40.8359 28.7492 39.6641C28.1633 39.0195 27.9289 38.1406 28.1633 37.3203C28.5734 35.6797 28.5734 35.9141 28.1633 34.2148C27.9289 33.3945 28.1633 32.5156 28.7492 31.9297C29.9797 30.6992 29.8625 30.875 30.2727 29.2344C30.507 28.4141 31.1516 27.7695 31.9719 27.5352C33.6125 27.0664 33.3781 27.1836 34.6086 25.9531C35.1945 25.3672 36.0734 25.1328 36.8938 25.3672C38.4758 25.7773 38.3 25.7773 39.882 25.3672C40.7023 25.1328 41.5813 25.3672 42.1672 25.9531C43.3977 27.1836 43.1633 27.0664 44.8039 27.5352C45.6242 27.7695 46.2688 28.4141 46.5031 29.2344C46.9133 30.875 46.7961 30.6992 48.0266 31.9297C48.6125 32.5156 48.8469 33.3945 48.6125 34.2148C48.2023 35.9141 48.2023 35.6797 48.6125 37.3203C48.8469 38.1406 48.6125 39.0195 48.0266 39.6641C46.7961 40.8359 46.9133 40.6602 46.5031 42.3008C46.2688 43.1797 45.6242 43.8242 44.8039 44C43.5734 44.3516 43.4563 44.293 42.5773 45.1719ZM32.8508 35.5625C32.8508 38.668 35.3117 41.1875 38.4172 41.1875C41.4641 41.1875 43.925 38.668 43.925 35.5625C43.925 32.457 41.4641 29.9375 38.4172 29.9375C35.3117 29.9375 32.8508 32.457 32.8508 35.5625Z" fill="white"/>
</svg>

                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  We strive for excellence in everything we do, from mineral exploration to customer service.
                </p>
              </div>

              {/* Community */}
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-black text-center">
                <div className="mb-4 flex justify-center">
                <svg width="78" height="76" viewBox="0 0 78 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.228516" width="77.5" height="76" rx="38" fill="black"/>
<path d="M50.8389 27.4375L56.4375 37.2812H50.1621L45.917 27.4375H50.8389ZM42.9639 27.4375L47.209 37.2812H30.167L34.4121 27.4375H42.9639ZM26.5371 27.4375H31.459L27.2139 37.2812H21L26.5371 27.4375ZM21 39.25H27.1523L34.7197 54.7539C34.8428 54.9385 34.5967 55.123 34.4121 54.9385L21 39.25ZM30.1055 39.25H47.2705L38.8418 58.876C38.7803 58.999 38.5957 58.999 38.5342 58.876L30.1055 39.25ZM42.6562 54.7539L50.2236 39.25H56.4375L42.9639 54.9385C42.8408 55.123 42.5332 54.9385 42.6562 54.7539Z" fill="white"/>
</svg>

                </div>
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  We invest in the communities where we operate, creating jobs and supporting local development initiatives.
                </p>
              </div>

              {/* Safety */}
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-black text-center">
                <div className="mb-4 flex justify-center">
                <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="76" height="76" rx="38" fill="black"/>
<path d="M50.4953 30.1719C51.55 30.6406 52.2531 31.6367 52.2531 32.75C52.2531 45.7578 44.2844 52.9648 39.2453 55.0742C38.5422 55.3672 37.7805 55.3672 37.0773 55.0742C30.8078 52.4375 24.1281 44.4102 24.1281 32.75C24.1281 31.6367 24.7727 30.6406 25.8273 30.1719L37.0773 25.4844C37.4289 25.3672 37.7805 25.3086 38.1906 25.3086C38.5422 25.3086 38.8938 25.3672 39.2453 25.4844L50.4953 30.1719ZM38.1906 51.4414C43.6398 48.6875 48.2688 42.2422 48.4445 33.3945L38.1906 29.1172V51.4414Z" fill="white"/>
</svg>

                </div>
                <div className="bg-white p-3 rounded-lg">
                  <h4 className="font-bold mb-2 text-black">Safety Excellence Award</h4>
                  <p className="text-black text-sm md:text-base px-4">For maintaining exceptional safety standards</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'achievements':
        return (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-8">
              Our Achievements & Certifications
            </h2>
            <p className="text-gray-600 max-w-2xl mb-8 md:mb-12 text-sm md:text-base">
              Over the years, Ethiopian Mineral Corporation has been recognized for excellence in various aspects of our operations, from environmental stewardship to community development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* ISO 14001 */}
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-black relative">
                <p className="absolute top-4 right-4 bg-gray-100 px-3 py-1 rounded-full text-sm text-black">2012</p>
                <div className="flex items-center mb-4">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="60" rx="30" fill="black"/>
                    <path d="M37.8906 31.5L39.6875 33.2578C40.2344 33.7656 39.9609 34.6641 39.2578 34.8594L36.8359 35.4844L37.5 37.9062C37.6953 38.6094 37.0703 39.2344 36.3672 39.0391L33.9453 38.375L33.3203 40.7969C33.125 41.5391 32.2266 41.7734 31.7188 41.2266L30 39.4297L28.2422 41.2266C27.7344 41.7344 26.8359 41.5391 26.6406 40.7969L26.0156 38.375L23.5938 39.0391C22.8906 39.2344 22.2656 38.6094 22.4609 37.9062L23.125 35.4844L20.7031 34.8594C20 34.6641 19.7266 33.7656 20.2734 33.2578L22.0703 31.5L20.2734 29.7422C19.7266 29.2344 20 28.3359 20.7031 28.1797L23.125 27.5547L22.4609 25.1328C22.2656 24.4297 22.8906 23.7656 23.5938 23.9609L26.0156 24.6641L26.6406 22.2031C26.7969 21.5 27.7344 21.2656 28.2422 21.8125L30 23.6094L31.7188 21.8125C32.2266 21.2656 33.1641 21.5391 33.3203 22.2031L33.9453 24.6641L36.3672 23.9609C37.0703 23.7656 37.6953 24.4297 37.5 25.1328L36.8359 27.5547L39.2578 28.1797C39.9609 28.3359 40.2344 29.2344 39.6875 29.7422L37.8906 31.5Z" fill="white"/>
                  </svg>
                  <h4 className="font-bold text-black text-lg ml-4">ISO 14001 Certification</h4>
                </div>
                <p className="text-gray-600 text-sm md:text-base text-left">Recognized for our environmental management systems</p>
              </div>

              {/* African Mining Excellence */}
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-black relative">
                <p className="absolute top-4 right-4 bg-gray-100 px-3 py-1 rounded-full text-sm text-black">2022</p>
                <div className="flex items-center mb-4">
                  <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.895508" width="60" height="60" rx="30" fill="black"/>
                    <path d="M42.8389 18.4375L48.4375 28.2812H42.1621L37.917 18.4375H42.8389ZM34.9639 18.4375L39.209 28.2812H22.167L26.4121 18.4375H34.9639ZM18.5371 18.4375H23.459L19.2139 28.2812H13L18.5371 18.4375ZM13 30.25H19.1523L26.7197 45.7539C26.8428 45.9385 26.5967 46.123 26.4121 45.9385L13 30.25ZM22.1055 30.25H39.2705L30.8418 49.876C30.7803 49.999 30.5957 49.999 30.5342 49.876L22.1055 30.25ZM34.6562 45.7539L42.2236 30.25H48.4375L34.9639 45.9385C42.8408 46.123 43.5332 45.9385 44.8039 45.7539Z" fill="white"/>
                  </svg>
                  <h4 className="font-bold text-black text-lg ml-3">African Mining <br/> Excellence Award</h4>
                </div>
                <p className="text-gray-600 text-sm md:text-base text-left">For outstanding contribution to sustainable mining</p>
              </div>

              {/* Community Development */}
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-black relative">
                <p className="absolute top-4 right-4 bg-gray-100 px-3 py-1 rounded-full text-sm text-black">2021</p>
                <div className="flex items-center mb-4">
                  <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.895508" width="60" height="60" rx="30" fill="black"/>
                    <path d="M42.8389 18.4375L48.4375 28.2812H42.1621L37.917 18.4375H42.8389ZM34.9639 18.4375L39.209 28.2812H22.167L26.4121 18.4375H34.9639ZM18.5371 18.4375H23.459L19.2139 28.2812H13L18.5371 18.4375ZM13 30.25H19.1523L26.7197 45.7539C26.8428 45.9385 26.5967 46.123 26.4121 45.9385L13 30.25ZM22.1055 30.25H39.2705L30.8418 49.876C30.7803 49.999 30.5957 49.999 30.5342 49.876L22.1055 30.25ZM34.6562 45.7539L42.2236 30.25H48.4375L34.9639 45.9385C34.8408 46.123 34.5332 45.9385 34.6562 45.7539Z" fill="white"/>
                  </svg>
                  <h4 className="font-bold text-black text-lg ml-4">Community <br/> Development Recognition</h4>
                </div>
                <p className="text-gray-600 text-sm md:text-base text-left">For our initiatives supporting local communities</p>
              </div>

              {/* Innovation in Mining */}
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-black relative">
                <p className="absolute top-4 right-4 bg-gray-100 px-3 py-1 rounded-full text-sm text-black">2023</p>
                <div className="flex items-center mb-4">
                  <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.347656" width="60" height="60" rx="30" fill="black"/>
                    <path d="M26.0977 38.2734V36.75H32.3086V38.2734C32.3086 38.5078 32.2305 38.7422 32.1133 38.9766L31.4492 39.9531C31.2148 40.3047 30.8242 40.5391 30.3945 40.5391H28.0117C27.582 40.5391 27.1914 40.3047 26.957 39.9531L26.293 38.9766C26.1367 38.7422 26.0977 38.5078 26.0977 38.2734ZM22.3477 27.375C22.3477 23.7422 25.1992 20.5391 29.1836 20.5C32.9727 20.5 36.0977 23.5859 36.0977 27.375C36.0977 29.1328 35.4336 30.6953 34.3789 31.9062C33.7148 32.6484 32.7383 34.2109 32.3477 35.5C32.3477 35.5 32.3477 35.5 32.3477 35.5391H26.0586C26.0586 35.5 26.0586 35.5 26.0586 35.5C25.668 34.2109 24.6914 32.6484 24.0273 31.9062C22.9727 30.6953 22.3477 29.1328 22.3477 27.375ZM29.2227 24.25C29.5352 24.25 29.8477 23.9766 29.8477 23.625C29.8477 23.3125 29.5352 23 29.2227 23C26.8008 23 24.8477 24.9922 24.8477 27.375C24.8477 27.7266 25.1211 28 25.4727 28C25.7852 28 26.0977 27.7266 26.0977 27.375C26.0977 25.6562 27.4648 24.25 29.2227 24.25Z" fill="white"/>
                  </svg>
                  <h4 className="font-bold text-black text-lg ml-4">Innovation in Mining Technology</h4>
                </div>
                <p className="text-gray-600 text-sm md:text-base text-left">For implementing advanced digital solutions</p>
              </div>

              {/* Safety Excellence */}
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-black relative">
                <p className="absolute top-4 right-4 bg-gray-100 px-3 py-1 rounded-full text-sm text-black">2021</p>
                <div className="flex items-center mb-4">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="60" rx="30" fill="black"/>
                    <path d="M38.2031 27.7812C38.9062 28.0938 39.375 28.7578 39.375 29.5C39.375 38.1719 34.0625 42.9766 30.7031 44.3828C30.2344 44.5781 29.7266 44.5781 29.2578 44.3828C25.0781 42.625 20.625 37.2734 20.625 29.5C20.625 28.7578 21.0547 28.0938 21.7578 27.7812L29.2578 24.6562C29.4922 24.5781 29.7266 24.5391 30 24.5391C30.2344 24.5391 30.4688 24.5781 30.7031 24.6562L38.2031 27.7812ZM30 41.9609C33.6328 40.125 36.7188 35.8281 36.8359 29.9297L30 27.0781V41.9609Z" fill="white"/>
                  </svg>
                  <h4 className="font-bold text-black text-lg ml-4">Safety Excellence Award</h4>
                </div>
                <p className="text-gray-600 text-sm md:text-base text-left">For maintaining exceptional safety standards</p>
              </div>

              {/* Ethiopian Business Leadership */}
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-black relative">
                <p className="absolute top-4 right-4 bg-gray-100 px-3 py-1 rounded-full text-sm text-black">2023</p>
                <div className="flex items-center mb-4">
                  <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.895508" width="60" height="60" rx="30" fill="black"/>
                    <path d="M30.0127 21.2031C30.4814 20.2656 31.8096 20.3047 32.2393 21.2031L34.8174 26.3984L40.5205 27.2188C41.5361 27.375 41.9268 28.625 41.1846 29.3672L37.083 33.3906L38.0596 39.0547C38.2158 40.0703 37.1221 40.8516 36.2236 40.3828L31.1455 37.6875L26.0283 40.3828C25.1299 40.8516 24.0361 40.0703 24.1924 39.0547L25.1689 33.3906L21.0674 29.3672C20.3252 28.625 20.7158 27.375 21.7314 27.2188L27.4736 26.3984L30.0127 21.2031Z" fill="white"/>
                  </svg>
                  <h4 className="font-bold text-black text-lg ml-4">Ethiopian Business Leadership Award</h4>
                </div>
                <p className="text-gray-600 text-sm md:text-base text-left">For outstanding business practices and growth</p>
              </div>
            </div>

            <div className="bg-black py-10 rounded-2xl  ">
              <h3 className="text-xl md:text-2xl font-bold mb-12 text-center text-white">Key Performance Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
                <div className="bg-white p-4 rounded-sm text-center w-[180px] mx-auto">
                  <p className="text-2xl font-bold mb-1">30+</p>
                  <p className="text-sm">Years in<br/>Operation</p>
                </div>
                <div className="bg-white p-4 rounded-sm text-center w-[180px] mx-auto">
                  <p className="text-2xl font-bold mb-1">250+</p>
                  <p className="text-sm">Projects<br/>Completed</p>
                </div>
                <div className="bg-white p-4 rounded-sm text-center w-[180px] mx-auto">
                  <p className="text-2xl font-bold mb-1">1,200+</p>
                  <p className="text-sm">Employees<br/>Nationwide</p>
                </div>
                <div className="bg-white p-4 rounded-sm text-center w-[180px] mx-auto">
                  <p className="text-2xl font-bold mb-1">45+</p>
                  <p className="text-sm">Mining Sites</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'history':
      default:
        return (
          <>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Our Journey Since <span className="text-black">1995</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mb-8 md:mb-12 text-sm md:text-base">
              For nearly three decades, Ethiopian Mineral Corporation has been at the forefront of mineral exploration and development in Ethiopia,
              contributing to the nation's economic growth while maintaining the highest standards of sustainability and social responsibility.
            </p>

            {/* Timeline Container */}
            <div className="relative">
              {/* Center Line */}
              <div className="absolute left-4 md:left-1/2 w-1 h-full bg-gray-200 transform md:-translate-x-1/2"></div>

              {/* Timeline Items */}
              <div className="relative">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start md:items-center justify-start md:justify-center mb-8 md:mb-16">
                    {/* Year Circle */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                      <div className="w-8 md:w-10 h-8 md:h-10 bg-black rounded-full flex items-center justify-center transform hover:scale-110 transition-transform">
                        <span className="text-white text-xs md:text-sm font-bold">{item.year}</span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-6/12 pl-16 md:pl-8 ${
                      item.side === 'left' ? 'md:mr-auto md:pr-8' : 'md:ml-auto'
                    }`}>
                      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow relative min-h-[160px] flex flex-col justify-between">
                        <div className={`absolute top-0 h-full w-1 bg-black rounded-lg ${
                          item.side === 'left' ? 'left-0 md:right-0' : 'left-0'
                        }`}></div>
                        <div className={`${item.side === 'left' ? 'pl-4 md:pr-4' : 'pl-4 md:pl-4'}`}>
                          <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900 text-start md:text-end">{item.title}</h3>
                          <p className="text-gray-600 text-sm md:text-base text-start md:text-end">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <section className="relative w-full h-[90vh] bg-[url('/about.svg')] bg-contain bg-no-repeat justify-center items-center">
        {/* Background Image */}
        

        {/* Content */}
        <div className="relative z-20">
          <Navbar />
          
          <div className="container mx-auto px-4 md:px-8 pt-10 md:pt-20">
            <h1 className="text-6xl md:text-[140px] font-bold text-white leading-none mb-4">
              About Us
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              Leading the way in sustainable mineral exploration and development since 1995 G.C
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-white py-5 md:py-5 px-4 md:px-6">
        {/* Navigation Tabs */}
        <div className="max-w-6xl mx-auto mb-8 md:mb-16 overflow-x-auto">
          <div className="flex gap-4 md:gap-8 border-b border-gray-200 min-w-max">
            <button 
              className={`pb-4 border-b-2 ${activeTab === 'history' ? 'border-black font-medium text-black' : 'border-transparent text-gray-500'} text-sm md:text-base`}
              onClick={() => setActiveTab('history')}
            >
              Our History
            </button>
            <button 
              className={`pb-4 border-b-2 ${activeTab === 'mission' ? 'border-black font-medium text-black' : 'border-transparent text-gray-500'} text-sm md:text-base`}
              onClick={() => setActiveTab('mission')}
            >
              Mission & Vision
            </button>
            <button 
              className={`pb-4 border-b-2 ${activeTab === 'values' ? 'border-black font-medium text-black' : 'border-transparent text-gray-500'} text-sm md:text-base`}
              onClick={() => setActiveTab('values')}
            >
              Core Values
            </button>
            <button 
              className={`pb-4 border-b-2 ${activeTab === 'achievements' ? 'border-black font-medium text-black' : 'border-transparent text-gray-500'} text-sm md:text-base`}
              onClick={() => setActiveTab('achievements')}
            >
              Achievements
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </section>

      {/* Partner and Locations Section */}
      <section className="flex flex-col md:flex-row shadow-2xl rounded-lg overflow-hidden">
        {/* Partner With Us */}
        <div className="w-full md:w-1/2 bg-white p-10 min-h-[400px] flex flex-col">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us</h2>
            <p className="text-gray-600 mb-8 text-sm md:text-base">
              Interested in working with Ethiopian Mineral Corporation?
              Whether you're looking for mineral exploration services, laboratory testing, or investment
              opportunities, we're here to help.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <Link href="/getintouch" target="_blank" rel="noopener noreferrer">
              <button className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors text-sm md:text-base">
                Contact Us
              </button>
            </Link>
            <Link href="https://reddy.ai/services" target="_blank" rel="noopener noreferrer">
              <button className="w-full sm:w-auto bg-[#1B1F24] text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors text-sm md:text-base">
                Request Service
              </button>
            </Link>
          </div>
        </div>

        {/* Our Locations */}
        <div className="w-full md:w-1/2 bg-[#1B1F24] text-white p-10 min-h-[400px]">
          <h2 className="text-xl md:text-2xl font-semibold mb-8">Our Locations</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">Headquarters</h3>
              <p className="text-gray-300 mb-1 text-sm md:text-base">Bole Road, Addis Ababa, Ethiopia</p>
              <p className="text-gray-300 text-sm md:text-base">+251 11 551 7777</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">Laboratory Facility</h3>
              <p className="text-gray-300 mb-1 text-sm md:text-base">Industrial Zone, Addis Ababa, Ethiopia</p>
              <p className="text-gray-300 text-sm md:text-base">+251 11 552 8888</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">Regional Office</h3>
              <p className="text-gray-300 mb-1 text-sm md:text-base">Main Street, Hawassa, Ethiopia</p>
              <p className="text-gray-300 text-sm md:text-base">+251 11 553 9999</p>
            </div>
          </div>
        </div>
      </section>
      <div className='mt-15'>
        <Footer/>
      </div>
    </div>
  )
}

export default page