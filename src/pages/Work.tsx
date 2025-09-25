import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import FilterPanel from "@/components/FilterPanel";
import aiDashboardImage from "@/assets/ai-dashboard.jpg";
import analyticsDashboardImage from "@/assets/analytics-dashboard.jpg";
import nlpApiImage from "@/assets/nlp-api.jpg";
import dataPipelineImage from "@/assets/data-pipeline.jpg";
import objectDetectionImage from "@/assets/object-detection.jpg";
import financialAnalysisImage from "@/assets/financial-analysis.jpg";

const Work = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = ["ML Engineer", "Software Engineer", "Data Analytics"];

  const projects = [
    {
      title: "AI-Powered Recommendation System",
      description: "Built a machine learning system that provides personalized recommendations using collaborative filtering and deep learning techniques.",
      tags: ["Python", "TensorFlow", "PostgreSQL", "Docker"],
      categories: ["ML Engineer", "Data Analytics"],
      githubUrl: "https://github.com/jishnusanyal/ml-recommender",
      liveUrl: "https://recommender-demo.example.com",
      imageUrl: aiDashboardImage
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Developed a comprehensive dashboard for real-time data visualization and analytics using React and D3.js.",
      tags: ["React", "D3.js", "Node.js", "MongoDB"],
      categories: ["Software Engineer", "Data Analytics"],
      githubUrl: "https://github.com/jishnusanyal/analytics-dashboard",
      liveUrl: "https://analytics-demo.example.com",
      imageUrl: analyticsDashboardImage
    },
    {
      title: "Natural Language Processing API",
      description: "Created a REST API for text analysis including sentiment analysis, entity recognition, and text classification.",
      tags: ["Python", "Flask", "NLTK", "spaCy", "Docker"],
      categories: ["ML Engineer", "Software Engineer"],
      githubUrl: "https://github.com/jishnusanyal/nlp-api",
      imageUrl: nlpApiImage
    },
    {
      title: "Data Pipeline Automation",
      description: "Designed and implemented automated ETL pipelines for processing large-scale data using Apache Airflow and Spark.",
      tags: ["Apache Spark", "Airflow", "Python", "AWS"],
      categories: ["Data Analytics", "Software Engineer"],
      githubUrl: "https://github.com/jishnusanyal/data-pipeline",
      imageUrl: dataPipelineImage
    },
    {
      title: "Computer Vision Object Detection",
      description: "Developed a real-time object detection system using YOLO and OpenCV for industrial quality control.",
      tags: ["Python", "OpenCV", "YOLO", "PyTorch"],
      categories: ["ML Engineer"],
      githubUrl: "https://github.com/jishnusanyal/object-detection",
      liveUrl: "https://cv-demo.example.com",
      imageUrl: objectDetectionImage
    },
    {
      title: "Financial Data Analysis Platform",
      description: "Built a comprehensive platform for financial data analysis with predictive modeling and risk assessment.",
      tags: ["Python", "Pandas", "Scikit-learn", "React", "PostgreSQL"],
      categories: ["Data Analytics", "Software Engineer"],
      githubUrl: "https://github.com/jishnusanyal/fintech-analytics",
      imageUrl: financialAnalysisImage
    }
  ];

  const handleFilterChange = (filter: string, checked: boolean) => {
    if (checked) {
      setSelectedFilters([...selectedFilters, filter]);
    } else {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    }
  };

  const filteredProjects = selectedFilters.length === 0 
    ? projects 
    : projects.filter(project => 
        project.categories.some(category => selectedFilters.includes(category))
      );

  console.log("Work component rendering");
  console.log("filteredProjects:", filteredProjects);
  console.log("selectedFilters:", selectedFilters);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Projects & Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in machine learning, 
            software engineering, and data analytics.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Panel */}
          <div className="lg:w-1/4">
            <div className="sticky top-24">
              <FilterPanel
                filters={filters}
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project, index) => (
                <div key={project.title}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No projects found for the selected filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;