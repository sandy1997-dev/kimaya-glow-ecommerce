
const TestimonialsSection = () => {
  const testimonials = [
    {
      review: "I've struggled with sensitive skin for years. Kimaya's products are the only ones that have never caused irritation. The Rose Petal Cleanser is now my holy grail!",
      name: "Emily R."
    },
    {
      review: "The Hibiscus Antioxidant Serum has completely transformed my complexion. My skin is brighter and more even-toned than it's been in years.",
      name: "Michael T."
    },
    {
      review: "I love that these products are all-natural and still so effective. The Honey Oat Face Mask leaves my skin feeling incredibly soft and nourished.",
      name: "Sarah L."
    }
  ];

  const StarRating = () => (
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className="w-5 h-5 text-yellow-500" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 organic-waves opacity-20"></div>
      <div className="kimaya-container relative z-10">
        <h2 className="text-4xl font-cormorant font-bold text-kimaya-primary text-center mb-4 nature-text">
          What Our Customers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="nature-testimonial-card p-6 rounded-lg">
              <StarRating />
              <p className="text-kimaya-primary mb-4 text-center italic">
                "{testimonial.review}"
              </p>
              <p className="text-center font-medium text-kimaya-primary">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
