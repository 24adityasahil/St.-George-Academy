import React from "react";

const galleryImages = [
  "photo-1649972904349-6e44c42644a7",
  "photo-1488590528505-98d2b5aba04b",
  "photo-1518770660439-4636190af475",
  "photo-1434494878577-86c23bcb06b9",
  "photo-1461749280684-dccba630e2f6",
  "photo-1486312338219-ce68d2c6f44d",
  "photo-1581091226825-a6a2a5aee158",
  "photo-1519389950473-47ba0277781c",
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-school-light py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-school-primary mb-8 text-center">
          Gallery
        </h2>
        <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
          Explore some of our favorite memories and moments from school events and activities!
        </p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((id) => (
            <div key={id} className="overflow-hidden rounded-lg shadow group bg-white transition-transform hover:scale-105 hover:shadow-lg">
              <img
                src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`}
                alt="School memory"
                className="w-full h-48 object-cover group-hover:opacity-90 transition duration-200"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;