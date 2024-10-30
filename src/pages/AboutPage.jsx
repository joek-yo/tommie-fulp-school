// AboutPage.jsx
// About Page for Tommie Fulp Adventist Academy, showcasing mission, vision, values, and history.
import React from 'react';

function AboutPage() {
  return (
    <div className="bg-white text-navyblue">
      {/* Banner */}
      <section className="bg-skyblue py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
          <p className="text-lg text-white mt-4">
            Discover our mission, vision, values, and history.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              At Tommie Fulp Adventist Academy, our mission is to inspire, educate, and
              nurture each student to achieve academic excellence, character development,
              and a commitment to service.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p>
              We envision a world where our students make a difference by leading with
              integrity, compassion, and innovation, grounded in strong academic and
              spiritual principles.
            </p>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <p>
              Our core values of respect, excellence, responsibility, and service
              are embedded in every aspect of our education, shaping well-rounded
              and grounded individuals.
            </p>
          </div>

          {/* History */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our History</h2>
            <p>
              Established in [Year], Tommie Fulp Adventist Academy has grown to become
              a nurturing institution dedicated to the holistic development of young minds.
              Our history is a testament to our commitment to educational and moral excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
