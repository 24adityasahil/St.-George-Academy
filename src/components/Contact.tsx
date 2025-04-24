
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-school-dark">Contact Us</h2>
          <p className="text-gray-600">
            We're here to answer your questions and help you learn more about St. George Academy.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="p-2 bg-school-primary/10 rounded-full">
                    <MapPin className="h-5 w-5 text-school-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-school-dark mb-2">Our Location</h3>
                  <p className="text-gray-600">
                    Purandarpur, <br />
                    FCI Road, <br />
                    Near Arjun Vihar Apartment, Patna
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="p-2 bg-school-primary/10 rounded-full">
                    <Mail className="h-5 w-5 text-school-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-school-dark mb-2">Email Us</h3>
                  <p className="text-gray-600">
                    <a href="mailto:admissions@xyzschool.edu" className="hover:text-school-primary transition-colors">
                      StGeorgeAcademy.edu
                    </a>
                    <br />
                    <a href="mailto:info@xyzschool.edu" className="hover:text-school-primary transition-colors">
                      info@school.edu
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="p-2 bg-school-primary/10 rounded-full">
                    <Phone className="h-5 w-5 text-school-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-school-dark mb-2">Call Us</h3>
                  <p className="text-gray-600">
                    <a href="tel:+15557654321" className="hover:text-school-primary transition-colors">
                      Admissions: 9801132202
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-school-dark">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="full-name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input
                    id="full-name"
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Enter message subject"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="w-full min-h-[120px]"
                />
              </div>
              
              <Button type="submit" className="w-full bg-school-primary hover:bg-school-primary/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
