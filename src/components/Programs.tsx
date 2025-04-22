
import { Button } from "@/components/ui/button";

const Programs = () => {
  const programsList = [
    {
      id: 1,
      title: "Elementary Education",
      grades: "Grades K-5",
      description: "Building a strong foundation through personalized learning and creative exploration.",
      features: ["Literacy & Numeracy Focus", "Creative Arts", "Physical Education", "Social Development"]
    },
    {
      id: 2,
      title: "Middle School",
      grades: "Grades 6-8",
      description: "Guiding students through crucial developmental years with a balanced curriculum.",
      features: ["Core Academics", "Critical Thinking", "Arts & Athletics", "Leadership Development"]
    },
    {
      id: 3,
      title: "High School",
      grades: "Grades 9-12",
      description: "Preparing students for college and beyond with rigorous academic programs.",
      features: ["Advanced Placement", "College Preparation", "Career Exploration", "Extracurricular Activities"]
    }
  ];

  return (
    <section id="programs" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-school-dark">Our Academic Programs</h2>
          <p className="text-gray-600">
            We offer comprehensive educational programs designed to 
            nurture students at every stage of their academic journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programsList.map((program) => (
            <div key={program.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="bg-school-primary p-6 text-white">
                <h3 className="text-2xl font-bold">{program.title}</h3>
                <p className="text-white/80 mt-1">{program.grades}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-school-secondary rounded-full mr-2"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-school-primary text-school-primary hover:bg-school-primary hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
