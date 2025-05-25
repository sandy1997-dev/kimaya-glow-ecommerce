
const BenefitsSection = () => {
  const benefits = [
    {
      title: "100% Natural",
      description: "We use only pure, natural ingredients sourced responsibly from trusted partners.",
      icon: "🌿"
    },
    {
      title: "Cruelty-Free",
      description: "We never test on animals and ensure our suppliers follow the same ethical standards.",
      icon: "🦋"
    },
    {
      title: "Eco-Friendly",
      description: "Our packaging is sustainable and recyclable to minimize environmental impact.",
      icon: "🌍"
    }
  ];

  return (
    <section className="py-20">
      <div className="kimaya-container">
        <h2 className="text-4xl font-cormorant font-bold text-kimaya-primary text-center mb-4">
          Why Choose Kimaya?
        </h2>
        <div className="w-24 h-1 bg-kimaya-primary mx-auto rounded-full mb-16" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="text-center p-8 bg-white rounded-lg shadow-md card-hover">
              <div className="w-20 h-20 mx-auto bg-kimaya-secondary rounded-full flex items-center justify-center mb-6 text-3xl">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-cormorant font-bold text-kimaya-primary mb-4">
                {benefit.title}
              </h3>
              <p className="text-kimaya-primary opacity-80">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
