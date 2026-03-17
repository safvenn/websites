import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Aswin Kumar",
      course: "MBBS Placement - 2023",
      text: "Our Dream Colleges made my dream of studying medicine a reality. Their guidance throughout the admission process was exceptional and completely stress-free.",
    },
    {
      name: "Fathima Shah",
      course: "Study Abroad - UK",
      text: "I highly recommend their visa guidance services. They handled everything from university selection to my final visa approval with complete transparency.",
    },
    {
      name: "Rahul M",
      course: "Engineering Admission",
      text: "The career counseling session completely changed my perspective. They helped me choose the right engineering branch and the best college in Bangalore.",
    },
    {
      name: "Anjali Menon",
      course: "BSc Psychology",
      text: "Very professional and trustworthy team. They don't treat education as a business, true to their motto. Got admission in a top college in Chennai effortlessly.",
    },
    {
      name: "Mohammed Shibil",
      course: "BCA & Placements",
      text: "The Palakkad team is highly experienced. They not only got me into a great IT program but their continued support has been incredible for my career shape-up.",
    },
    {
      name: "Sneha V",
      course: "Medical PG Admission",
      text: "If you are looking for honest and excellent educational consultancy, this is the place. Their 100% placement guidance guarantee is entirely genuine.",
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-odc-light relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-odc-accent/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-odc-primary/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="h-1 w-8 bg-odc-accent rounded-full"></span>
            <span className="text-odc-primary font-bold uppercase tracking-wider text-sm">Success Stories</span>
            <span className="h-1 w-8 bg-odc-accent rounded-full"></span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-odc-dark font-heading mb-6"
          >
            Real Words from Real Students
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here is what our successful students have to say about their experience with Our Dream Colleges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 relative group"
            >
              <Quote size={40} className="absolute top-6 right-6 text-odc-accent/20 group-hover:text-odc-accent/40 transition-colors duration-300" />
              
              <div className="flex text-[#FFB800] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 italic">"{review.text}"</p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-odc-primary text-white rounded-full flex items-center justify-center font-bold font-heading text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-odc-dark">{review.name}</h4>
                  <p className="text-sm text-odc-secondary font-medium">{review.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
