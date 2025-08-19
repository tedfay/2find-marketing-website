const CTA = () => {
  // Helper to create mailto links with button text as subject
  const makeMailto = (subject: string) =>
    `mailto:ted.fay@2findmarketing.com?subject=${encodeURIComponent(subject)}`;
  
  return (
    <section className="py-20 bg-blue-600 text-white" id="contact">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help you achieve your marketing goals.
        </p>
        <a 
          href={makeMailto("Let's discuss my marketing needs")}
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          style={{ backgroundColor: '#F59E0B' }}
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
};

export default CTA;