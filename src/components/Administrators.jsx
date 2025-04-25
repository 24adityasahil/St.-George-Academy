
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Administrators = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-school-dark text-center">
          From Our Leadership
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Principal's Message Card */}
          <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-0">
              <div className="flex items-center mb-4">
                <Avatar className="h-20 w-20 border-4 border-school-light">
                  <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=150&h=150&q=80" alt="Principal" />
                  <AvatarFallback>PR</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h3 className="text-2xl font-playfair font-bold text-school-primary">Dr. Robert Smith</h3>
                  <p className="text-gray-600">Principal</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                "Welcome to St. George Academy, where we believe in nurturing not just academic excellence, 
                but also character, creativity, and compassion. Our commitment is to provide a 
                holistic education that prepares students for the challenges of tomorrow. 
                I'm proud of the supportive learning environment we've created, where every student 
                is valued and encouraged to reach their full potential."
              </p>
            </CardContent>
          </Card>
          
          {/* Director's Message Card */}
          <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-0">
              <div className="flex items-center mb-4">
                <Avatar className="h-20 w-20 border-4 border-school-light">
                  <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&h=150&q=80" alt="Director" />
                  <AvatarFallback>DR</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h3 className="text-2xl font-playfair font-bold text-school-primary">Dr. Sarah Johnson</h3>
                  <p className="text-gray-600">Director of Education</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                "At St. George Academy, we're committed to educational innovation and excellence. 
                Our curriculum is designed to inspire curiosity and develop critical thinking skills
                that will serve students throughout their lives. We work closely with families to
                ensure that each child receives the support and guidance they need to thrive
                academically, socially, and emotionally. Together, we're building the foundation
                for a bright future."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Administrators;
