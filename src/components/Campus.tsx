
import { Award, BookOpen, Users, School } from "lucide-react";

const Campus = () => {
  return (
    <section id="campus" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-school-primary/5 z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-school-dark">Campus Life</h2>
          <p className="text-gray-600">
            At St. George Academy, we believe in providing a well-rounded educational experience 
            that extends beyond the classroom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-school-primary to-school-dark flex items-center justify-center">
              <School className="text-white w-24 h-24" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-school-dark">Modern Facilities</h3>
              <p className="text-gray-600 mb-4">
                Our campus features state-of-the-art facilities designed to enhance 
                the learning experience, including science labs, art studios, 
                sports facilities, and technology-enabled classrooms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-school-secondary flex items-center justify-center mt-1 mr-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span>Advanced Science and Technology Labs</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-school-secondary flex items-center justify-center mt-1 mr-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span>Performing Arts Center</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-school-secondary flex items-center justify-center mt-1 mr-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span>Modern Athletic Complex</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-school-secondary flex items-center justify-center mt-1 mr-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span>Multimedia Library and Resource Center</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-school-secondary to-amber-300 flex items-center justify-center">
              <Award className="text-school-dark w-24 h-24" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-school-dark">Extracurricular Activities</h3>
              <p className="text-gray-600 mb-4">
                We offer a wide range of extracurricular activities that 
                help students discover and develop their talents and interests 
                beyond academics.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-school-primary flex items-center justify-center mt-1 mr-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span>Competitive Sports Teams</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-school-primary flex items-center justify-center mt-1 mr-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span>Music and Performing Arts</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-school-primary flex items-center justify-center mt-1 mr-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span>Debate and Public Speaking</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-school-primary flex items-center justify-center mt-1 mr-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <span>STEM and Robotics Clubs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-school-primary to-school-dark rounded-lg p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Experience St. George Academy</h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            We invite you to visit our campus and experience the vibrant learning
            environment that makes St. George Academy special.
          </p>
          <button className="bg-white text-school-primary hover:bg-school-secondary hover:text-school-dark transition-colors py-3 px-8 rounded-md font-medium">
            Schedule a Campus Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default Campus;
