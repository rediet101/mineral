'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import Link from 'next/link'

// Project Data
const projectsData = [
  {
    id: 1,
    title: "Benishangul Feldspar Development",
    region: "Benishangul-Gumuz",
    status: "Active",
    tags: ["Development", "Feldspar"],
    description: "Upcoming development project targeting high-quality feldspar deposits for ceramic and glass industries, with focus on sustainable development and local employment.",
    investment: "$22 Million",
    area: "680 hectares",
    timeline: "2024 - 2029",
    image: "/ben.svg"
  },
  {
    id: 2,
    title: "Afar Dolomite Project",
    region: "Afar Region",
    status: "Completed",
    tags: ["Exploration", "Dolomite"],
    description: "Successful exploration project that identified significant dolomite reserves for agricultural and construction industries, with detailed mapping and resource estimation.",
    investment: "$8 Million",
    area: "1,100 hectares",
    timeline: "2018 - 2022",
    image: "/afar.svg"
  },
  {
    id: 3,
    title: "SNNPR Emerald Mining",
    region: "SNNPR",
    status: "Active",
    tags: ["Mining", "Emerald"],
    description: "Artisanal and small-scale mining operation producing high-quality emeralds with fair-trade practices and community benefit-sharing programs.",
    investment: "$18 Million",
    area: "350 hectares",
    timeline: "2019 - 2029",
    image: "/snnpr.svg"
  },
  {
    id: 4,
    title: "Tigray Quartz Development",
    region: "Tigray Region",
    status: "Active",
    tags: ["Development", "Quartz"],
    description: "Development of high-purity quartz deposits for electronics and solar panel industries, employing local workforce and advanced extraction technologies.",
    investment: "$28 Million",
    area: "720 hectares",
    timeline: "2021 - 2026",
    image: "/ti.svg"
  },
  {
    id: 5,
    title: "Amhara Kaolin Project",
    region: "Amhara Region",
    status: "Planned",
    tags: ["Exploration", "Kaolin"],
    description: "Exploration project focused on identifying high-quality kaolin deposits for industrial applications, with emphasis on sustainable exploration techniques.",
    investment: "$12 Million",
    area: "850 hectares",
    timeline: "2023 - 2025",
    image: "/amhara.svg"
  },
  {
    id: 6,
    title: "Oromia Gold Extraction",
    region: "Oromia Region",
    status: "Active",
    tags: ["Mining", "Gold"],
    description: "Large-scale gold mining operation using sustainable extraction methods with state-of-the-art technology to minimize environmental impact while maximizing yield.",
    investment: "$45 Million",
    area: "1,200 hectares",
    timeline: "2020 - 2030",
    image: "/oro.svg"
  }
];

const ProjectPage = () => {
  // State for filters
  const [searchQuery, setSearchQuery] = useState("");
  const [projectType, setProjectType] = useState("All");
  const [mineralType, setMineralType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [sortBy, setSortBy] = useState("Latest");

  // Filter projects based on search and filters
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === "All Status" || project.status === selectedStatus;
    const matchesRegion = selectedRegion === "All Regions" || project.region === selectedRegion;
    return matchesSearch && matchesStatus && matchesRegion;
  });

  return (
    <div className="min-h-screen p-[10px] gap-[10px]">
      <section className="relative w-[1410px] h-[679px] overflow-hidden rounded-[2px] border border-[1px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/project.svg"
            alt="Mining Background"
            className="object-cover w-full h-full"
            width={1410}
            height={679}
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          
          <div className="container mx-auto px-8 pt-20">
            <h1 className="text-[180px] font-bold text-white leading-none mb-6">
              Projects
            </h1>
            <p className="text-white/90 text-xl max-w-2xl mb-16">
              Discover our portfolio of sustainable mining and exploration projects across
              Ethiopia's mineral-rich regions.
            </p>

            {/* Statistics */}
            <div className="flex gap-20">
              <div className="text-white">
                <div className="text-5xl font-bold mb-2">6+</div>
                <div className="text-lg">Active Projects</div>
              </div>
              <div className="text-white">
                <div className="text-5xl font-bold mb-2">4+</div>
                <div className="text-lg">Regions Covered</div>
              </div>
              <div className="text-white">
                <div className="text-5xl font-bold mb-2">$130M+</div>
                <div className="text-lg">Total Investment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-16 px-8">
        <h2 className="text-4xl font-bold mb-8">Project Gallery</h2>
        
        {/* Filters */}
        <div className="flex gap-4 mb-8">
          <input
            type="text"
            placeholder="Search projects..."
            className="px-4 py-2 border rounded-md w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="px-4 py-2 border rounded-md"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
          >
            <option value="All">Project Type: All</option>
            <option value="Development">Development</option>
            <option value="Exploration">Exploration</option>
            <option value="Mining">Mining</option>
          </select>
          <select
            className="px-4 py-2 border rounded-md"
            value={mineralType}
            onChange={(e) => setMineralType(e.target.value)}
          >
            <option value="All">Mineral Type: All</option>
            <option value="Gold">Gold</option>
            <option value="Emerald">Emerald</option>
            <option value="Feldspar">Feldspar</option>
            <option value="Dolomite">Dolomite</option>
            <option value="Quartz">Quartz</option>
            <option value="Kaolin">Kaolin</option>
          </select>
          <select
            className="px-4 py-2 border rounded-md"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="Latest">Sort By: Latest</option>
            <option value="Investment">Investment</option>
            <option value="Area">Area</option>
          </select>
        </div>

        {/* Status Filters */}
        <div className="flex gap-4 mb-4">
          <button
            className={`px-4 py-2 rounded-full ${
              selectedStatus === "All Status" ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedStatus("All Status")}
          >
            All Status
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              selectedStatus === "Active" ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedStatus("Active")}
          >
            Active
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              selectedStatus === "Planned" ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedStatus("Planned")}
          >
            Planned
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              selectedStatus === "Completed" ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedStatus("Completed")}
          >
            Completed
          </button>
        </div>

        {/* Region Filters */}
        <div className="flex gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded-full ${
              selectedRegion === "All Regions" ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedRegion("All Regions")}
          >
            All Regions
          </button>
          {["Oromia", "Amhara", "Tigray", "SNNPR", "Afar", "Benishangul-Gumuz"].map((region) => (
            <button
              key={region}
              className={`px-4 py-2 rounded-full ${
                selectedRegion === region ? "bg-black text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedRegion(region)}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="border rounded-lg overflow-hidden bg-white">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    project.status === "Active" ? "bg-blue-100 text-blue-600" :
                    project.status === "Completed" ? "bg-green-100 text-green-600" :
                    "bg-yellow-100 text-yellow-600"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{project.region}</p>
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        tag === "Development" ? "bg-yellow-100 text-yellow-600" :
                        tag === "Mining" ? "bg-blue-100 text-blue-600" :
                        "bg-purple-100 text-purple-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <p className="font-semibold">Investment:</p>
                    <p>{project.investment}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Area:</p>
                    <p>{project.area}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-semibold">Timeline:</p>
                    <p>{project.timeline}</p>
                  </div>
                </div>
                <div>
                  {project.id === 1 ? (
                    <Link href="/project/benishangul-feldspar" className="block w-full">
                      <button className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors">
                        View Details
                      </button>
                    </Link>
                  ) : (
                    <button className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors">
                      View Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
            1
          </button>
          <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            2
          </button>
          <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            3
          </button>
          <span>...</span>
          <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            10
          </button>
          <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            →
          </button>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default ProjectPage