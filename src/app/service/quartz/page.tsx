'use client'
import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const QuartzDetail = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section  className="relative w-full h-screen bg-[url('/quartiz.gif')] bg-contain bg-no-repeat justify-center items-center">
        {/* Background Image */}
       

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          
          <div className="container mx-auto px-4 md:px-8 pt-10 md:pt-20">
            <h1 className="text-6xl md:text-[140px] font-bold text-white leading-none mb-4 md:mb-8">
              Quartz Project
            </h1>
            <h2 className="text-xl md:text-2xl text-white mb-6 md:mb-8">
             Case Study
            </h2>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-20 text-white">
              <div className="mb-4 md:mb-0">
                <p className="text-sm mb-1">Investment:</p>
                <p className="text-lg md:text-xl font-semibold">$22 Million</p>
              </div>
              <div className="mb-4 md:mb-0">
                <p className="text-sm mb-1">Area:</p>
                <p className="text-lg md:text-xl font-semibold">680 hectares</p>
              </div>
              <div>
                <p className="text-sm mb-1">Timeline:</p>
                <p className="text-lg md:text-xl font-semibold">2024 - 2029</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-8 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend justo vitae augue maximus pretium. Fusce et nisi hendrerit, ornare nisi at, hendrerit nulla. Duis id risus erat. Vivamus eu tristique tellus. Vestibulum ac dapibus massa. Morbi purus nisl, iaculis vitae elementum eget, interdum eget massa. Donec auctor enim a urna semper, non tristique est sodales. Integer blandit nulla porta pharetra hendrerit. Phasellus fermentum justo ac ex ultrices, in bibendum elit facilisis. Donec vel ultricies turpis. Aenean ultricies dui ut facilisis ullamcorper. Praesent ut est lectus. Duis consequat massa sit amet condimentum lacinia. Phasellus rhoncus ipsum vitae ornare malesuada. Sed varius faucibus sollicitudin. Donec aliquam tellus eu massa pellentesque, id porttitor eros porta.
          </p>
          <p className="text-gray-600 mb-12">
          Donec accumsan urna et lectus dapibus commodo. Mauris suscipit felis venenatis consectetur auctor. Vivamus gravida orci in mi aliquet volutpat. Morbi condimentum non felis a porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam vehicula sodales venenatis. Morbi maximus turpis nec lobortis suscipit. In non cursus augue, ac pulvinar libero. Proin molestie felis ut lectus pretium, id cursus mi cursus. Nunc posuere lectus urna, in posuere nisi imperdiet eu. Ut consequat congue metus, at suscipit velit. Integer sapien nibh, vestibulum sit amet gravida ut, molestie et erat. Nunc ac leo porta, tempor risus vel, sollicitudin turpis. Vivamus vestibulum quis lorem sed facilisis. Sed tincidunt consectetur massa in ultricies.
          </p>
          <p className="text-gray-600 mb-12">
          Duis vehicula vel sem et dignissim. Curabitur tincidunt id odio vitae elementum. Vestibulum interdum nisl mi, nec hendrerit tortor placerat in. Quisque vestibulum eros vel dictum mollis. Maecenas odio purus, dignissim et porttitor vitae, suscipit non enim. Donec mi lacus, pretium vel dolor at, eleifend blandit enim. Nam id suscipit elit.
          </p>
          <p className="text-gray-600 mb-12">
          Nullam ultricies pretium lectus a vulputate. Maecenas vulputate neque massa, in dapibus turpis eleifend eget. Phasellus sit amet rhoncus urna. Mauris nulla nibh, varius vel risus sed, commodo sollicitudin risus. In malesuada nec est eget gravida. Integer semper tristique lacinia. Nulla a risus consectetur, dignissim ex eget, gravida mi. Cras sed metus tincidunt mauris cursus ullamcorper.
          </p>
          <p className="text-gray-600 mb-12">
          Suspendisse euismod ut tortor at imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam tincidunt nibh odio, non dignissim quam luctus nec. Proin a mi et enim feugiat ullamcorper. Duis vel porta nunc. Curabitur euismod urna sit amet ante mollis iaculis. Duis et sem sed magna consectetur interdum. Sed maximus nunc nec bibendum sodales. Morbi aliquet eros vitae leo fringilla eleifend. Sed id ex risus. Quisque id velit sed erat imperdiet varius vitae et orci. Ut sagittis convallis aliquet. Donec eu diam ullamcorper, posuere felis eget, laoreet ex.
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-8 md:pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* First Row */}
          <div className="md:col-span-8 relative h-[250px] md:h-[400px]">
            <Image
              src="/ben.svg"
              alt="Mining Operations"
              className="object-cover rounded-[20px]"
              fill
            />
          </div>
          <div className="md:col-span-4 relative h-[250px] md:h-[400px]">
            <Image
              src="/ben3.svg"
              alt="Mining Close-up"
              className="object-cover rounded-[20px]"
              fill
            />
          </div>

          {/* Second Row */}
          <div className="md:col-span-4 relative h-[250px] md:h-[300px]">
            <Image
              src="/ben2.svg"
              alt="Environmental Image"
              className="object-cover rounded-[20px]"
              fill
            />
          </div>
          <div className="md:col-span-8 relative h-[250px] md:h-[300px]">
            <Image
              src="/ben.svg"
              alt="Mining Site"
              className="object-cover rounded-[20px]"
              fill
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default QuartzDetail 