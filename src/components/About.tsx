
import { GraduationCap, Book, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-school-dark">About XYZ School</h2>
          <p className="text-gray-600">
            Founded on principles of excellence and innovation, XYZ School 
            has been a beacon of quality education for generations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-school-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-school-primary text-white mb-6">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-school-dark">Academic Excellence</h3>
            <p className="text-gray-600">
              Our rigorous curriculum and dedicated faculty ensure that students receive 
              a comprehensive education that prepares them for future success.
            </p>
          </div>

          <div className="bg-school-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-school-primary text-white mb-6">
              <Users size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-school-dark">Character Development</h3>
            <p className="text-gray-600">
              We believe in nurturing not just academic abilities but also 
              integrity, empathy, and leadership qualities in our students.
            </p>
          </div>

          <div className="bg-school-light p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-school-primary text-white mb-6">
              <Book size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-school-dark">Innovative Learning</h3>
            <p className="text-gray-600">
              Our modern approach to education incorporates the latest 
              technologies and teaching methodologies for an engaging learning experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
