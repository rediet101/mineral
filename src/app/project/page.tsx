'use client'
import React, { useState, useEffect } from 'react'
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
    investment: 22000000, // Changed to number for sorting
    area: 680, // Changed to number for sorting
    timeline: "2024 - 2029",
    image: "/ben.svg",
    startYear: 2024
  },
  {
    id: 2,
    title: "Afar Dolomite Project",
    region: "Afar Region",
    status: "Completed",
    tags: ["Exploration", "Dolomite"],
    description: "Successful exploration project that identified significant dolomite reserves for agricultural and construction industries, with detailed mapping and resource estimation.",
    investment: 8000000,
    area: 1100,
    timeline: "2018 - 2022",
    image: "/afar.svg",
    startYear: 2018
  },
  {
    id: 3,
    title: "SNNPR Emerald Mining",
    region: "SNNPR",
    status: "Active",
    tags: ["Mining", "Emerald"],
    description: "Artisanal and small-scale mining operation producing high-quality emeralds with fair-trade practices and community benefit-sharing programs.",
    investment: 18000000,
    area: 350,
    timeline: "2019 - 2029",
    image: "/snnpr.svg",
    startYear: 2019
  },
  {
    id: 4,
    title: "Tigray Quartz Development",
    region: "Tigray Region",
    status: "Active",
    tags: ["Development", "Quartz"],
    description: "Development of high-purity quartz deposits for electronics and solar panel industries, employing local workforce and advanced extraction technologies.",
    investment: 28000000,
    area: 720,
    timeline: "2021 - 2026",
    image: "/ti.svg",
    startYear: 2021
  },
  {
    id: 5,
    title: "Amhara Kaolin Project",
    region: "Amhara Region",
    status: "Planned",
    tags: ["Exploration", "Kaolin"],
    description: "Exploration project focused on identifying high-quality kaolin deposits for industrial applications, with emphasis on sustainable exploration techniques.",
    investment: 12000000,
    area: 850,
    timeline: "2023 - 2025",
    image: "/amhara.svg",
    startYear: 2023
  },
  {
    id: 6,
    title: "Oromia Gold Extraction",
    region: "Oromia Region",
    status: "Active",
    tags: ["Mining", "Gold"],
    description: "Large-scale gold mining operation using sustainable extraction methods with state-of-the-art technology to minimize environmental impact while maximizing yield.",
    investment: 45000000,
    area: 1200,
    timeline: "2020 - 2030",
    image: "/oro.svg",
    startYear: 2020
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

  // Dynamic statistics
  const [activeProjectsCount, setActiveProjectsCount] = useState(0);
  const [regionsCoveredCount, setRegionsCoveredCount] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);

  // Calculate statistics whenever filters change
  useEffect(() => {
    // Calculate active projects count
    const activeCount = projectsData.filter(p => p.status === "Active").length;
    setActiveProjectsCount(activeCount);
    
    // Calculate unique regions covered
    const uniqueRegions = new Set(projectsData.map(p => p.region));
    setRegionsCoveredCount(uniqueRegions.size);
    
    // Calculate total investment
    const total = projectsData.reduce((sum, project) => sum + project.investment, 0);
    setTotalInvestment(total);
  }, []);

  // Filter and sort projects
  const filteredProjects = projectsData
    .filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = selectedStatus === "All Status" || project.status === selectedStatus;
      const matchesRegion = selectedRegion === "All Regions" || project.region === selectedRegion;
      const matchesProjectType = projectType === "All" || project.tags.includes(projectType);
      const matchesMineralType = mineralType === "All" || project.tags.includes(mineralType);
      
      return matchesSearch && matchesStatus && matchesRegion && matchesProjectType && matchesMineralType;
    })
    .sort((a, b) => {
      if (sortBy === "Latest") return b.startYear - a.startYear;
      if (sortBy === "Investment") return b.investment - a.investment;
      if (sortBy === "Area") return b.area - a.area;
      return 0;
    });

  // Format currency
  const formatCurrency = (amount:(any)) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen">
      <section className="relative w-full h-[90vh] bg-[url('/project.svg')] bg-contain bg-no-repeat justify-center items-center">
        <div className="relative z-10">
          <Navbar />
          
          <div className="container mx-auto px-4 md:px-8 pt-10 md:pt-20">
            <h1 className="text-[80px] md:text-[150px] font-bold text-white leading-none mb-4 md:mb-6">
              Projects
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8 md:mb-16">
              Discover our portfolio of sustainable mining and exploration projects across
              Ethiopia's mineral-rich regions.
            </p>

            {/* Statistics */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-20">
              <div className="text-white">
                <div className="text-3xl md:text-5xl font-bold mb-2">{activeProjectsCount}+</div>
                <div className="text-base md:text-lg">Active Projects</div>
              </div>
              <div className="text-white">
                <div className="text-3xl md:text-5xl font-bold mb-2">{regionsCoveredCount}+</div>
                <div className="text-base md:text-lg">Regions Covered</div>
              </div>
              <div className="text-white">
                <div className="text-3xl md:text-5xl font-bold mb-2">{formatCurrency(totalInvestment)}+</div>
                <div className="text-base md:text-lg">Total Investment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
     <section className="pt-0 px-4 md:px-8 bg-white">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 md:mb-8">Project Gallery</h2>
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 md:mb-8">
          <input
            type="text"
            placeholder="Search projects..."
            className="px-4 py-2 border rounded-md w-full md:w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="px-4 py-2 border rounded-md w-full md:w-auto"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
          >
            <option value="All">Project Type: All</option>
            <option value="Development">Development</option>
            <option value="Exploration">Exploration</option>
            <option value="Mining">Mining</option>
          </select>
          <select
            className="px-4 py-2 border rounded-md w-full md:w-auto"
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
            className="px-4 py-2 border rounded-md w-full md:w-auto"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="Latest">Sort By: Latest</option>
            <option value="Investment">Investment</option>
            <option value="Area">Area</option>
          </select>
        </div>

        {/* Status Filters */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-4">
          <button
            className={`px-3 md:px-4 py-2 rounded-full text-sm ${
              selectedStatus === "All Status" ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedStatus("All Status")}
          >
            All Status
          </button>
          <button
            className={`px-3 md:px-4 py-2 rounded-full text-sm ${
              selectedStatus === "Active" ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedStatus("Active")}
          >
            Active
          </button>
          <button
            className={`px-3 md:px-4 py-2 rounded-full text-sm ${
              selectedStatus === "Planned" ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedStatus("Planned")}
          >
            Planned
          </button>
          <button
            className={`px-3 md:px-4 py-2 rounded-full text-sm ${
              selectedStatus === "Completed" ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedStatus("Completed")}
          >
            Completed
          </button>
        </div>

        {/* Region Filters */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-8">
          <button
            className={`px-3 md:px-4 py-2 rounded-full text-sm ${
              selectedRegion === "All Regions" ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedRegion("All Regions")}
          >
            All Regions
          </button>
          {Array.from(new Set(projectsData.map(p => p.region))).map((region) => (
            <button
              key={region}
              className={`px-3 md:px-4 py-2 rounded-full text-sm ${
                selectedRegion === region ? "bg-black text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedRegion(region)}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6 flex flex-col h-[calc(100%-12rem)]">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg md:text-xl font-bold line-clamp-2">{project.title}</h3>
                  <span className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm ${
                    project.status === "Active" ? "bg-blue-100 text-blue-600" :
                    project.status === "Completed" ? "bg-green-100 text-green-600" :
                    "bg-yellow-100 text-yellow-600"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3 md:mb-4">{project.region}</p>
                <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm ${
                        tag === "Development" ? "bg-yellow-100 text-yellow-600" :
                        tag === "Mining" ? "bg-blue-100 text-blue-600" :
                        "bg-purple-100 text-purple-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="grid grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm text-gray-600 mt-auto">
                  <div>
                    <p className="font-semibold">Investment:</p>
                    <p>{formatCurrency(project.investment)}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Area:</p>
                    <p>{project.area.toLocaleString()} hectares</p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-semibold">Timeline:</p>
                    <p>{project.timeline}</p>
                  </div>
                </div>
                <div className="mt-4">
                  {project.id === 1 ? (
                    <Link href="/project/benishangul-feldspar" className="block w-full">
                      <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors text-sm md:text-base">
                        View Details
                      </button>
                    </Link>
                  ) : (
                    <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors text-sm md:text-base">
                      View Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination - Only show if there are projects */}
        {filteredProjects.length > 0 && (
          <div className="flex justify-center items-center gap-2 md:gap-4 mb-8 md:mt-6">
            <button className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm">
              1
            </button>
            <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm">
              2
            </button>
            <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm">
              3
            </button>
            <span>...</span>
            <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm">
              10
            </button>
            <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm">
              →
            </button>
          </div>
        )}

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">No projects found matching your filters</h3>
            <button 
              className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              onClick={() => {
                setSearchQuery("");
                setProjectType("All");
                setMineralType("All");
                setSelectedStatus("All Status");
                setSelectedRegion("All Regions");
                setSortBy("Latest");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
      <Footer/>
    </div>
  )
}

export default ProjectPage