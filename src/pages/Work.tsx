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

  const filters = ["ML Engineer", "Software Engineer", "Data Analytics", "Computer Engineering"];

  const projects = [
    {
      title: "Legal Voice Assistant",
      description: "Voice-enabled Legal RAG Assistant that answers legal questions based on provided documents using FastAPI, vector database, and local AI models.",
      tags: ["Python", "FastAPI", "Ollama", "Whisper", "Vector DB"],
      categories: ["Software Engineer", "ML Engineer"],
      githubUrl: "https://github.com/JishyFishy2006/LegalAssitant.git",
      imageUrl: analyticsDashboardImage
    },
    {
      title: "Papers2Practice",
      description: "Converting ML research papers to working code on customized datasets. Implemented Vision Transformer (ViT) and Vision-Language-Action Transformer (VLAT) architectures with comprehensive benchmarking.",
      tags: ["Python", "PyTorch", "Transformers", "Computer Vision", "Research"],
      categories: ["ML Engineer", "Software Engineer"],
      githubUrl: "https://github.com/JishyFishy2006/Papers2Practice.git",
      imageUrl: nlpApiImage
    },
    {
      title: "Song Classification",
      description: "Machine learning model for music genre classification using audio features. Achieved 78% accuracy with gradient boosting and hyperparameter optimization.",
      tags: ["Python", "Machine Learning", "Audio Processing", "Gradient Boosting"],
      categories: ["ML Engineer", "Data Analytics"],
      githubUrl: "https://github.com/ReehalS/TeamTBD_SongClassifier.git",
      liveUrl: "https://songclassifiers.streamlit.app"
    },
    // CE-only projects (hidden by default, visible only when 'Computer Engineering' is selected)
    {
      title: "Quantum Computing w PennyLane",
      description: "Implemented quantum circuits and variational algorithms using PennyLane; explored hybrid quantum-classical workflows.",
      tags: ["PennyLane", "Quantum", "Python"],
      categories: ["Computer Engineering"],
      githubUrl: "https://colab.research.google.com/drive/1SOqA01RC7SLOFYMrRTslTYsNULMfe8UV?usp=sharing"
    },
    {
      title: "Audio Sampler",
      description: "Built a browser-based audio sampling tool with waveform visualization, slicing, and basic effects.",
      tags: ["TypeScript", "Web Audio API", "React"],
      categories: ["Computer Engineering"],
      githubUrl: "https://drive.google.com/drive/folders/1QLcf07Fzcev-SHyB88C_EEDeKgLi4whY?usp=sharing"
    },
    {
      title: "Resume Optimization Platform",
      description: "Building a machine learning system that provides personalized resume recommendations using collaborative filtering and deep learning techniques. {In Progress Project}",
      tags: ["Python", "TensorFlow", "PostgreSQL", "Docker"],
      categories: ["ML Engineer", "Data Analytics"],
      githubUrl: "https://github.com/JishyFishy2006/ResumeOptimizer.git",
      imageUrl: aiDashboardImage
    }
  ];

  const handleFilterChange = (filter: string, checked: boolean) => {
    if (checked) {
      setSelectedFilters([...selectedFilters, filter]);
    } else {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    }
  };

  const isComputerEngineeringSelected = selectedFilters.includes("Computer Engineering");
  const filteredProjects = projects.filter(project => {
    const isCEProject = project.categories.includes("Computer Engineering");
    // Hide CE-only projects unless the CE filter is selected
    if (isCEProject && !isComputerEngineeringSelected) {
      return false;
    }
    // If no filters selected, show everything else
    if (selectedFilters.length === 0) {
      return true;
    }
    // Otherwise, filter by selected categories
    return project.categories.some(category => selectedFilters.includes(category));
  });

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