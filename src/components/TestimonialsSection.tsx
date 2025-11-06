"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Sarah M.',
    title: 'Satisfied Customer',
    avatar: 'https://i.ibb.co/bMr5PYPt/steptodown-com936074.jpg',
    review: 'Dulcé Land sweets are an absolute delight! The quality and taste are unmatched. Perfect for gifts or a personal treat.',
  },
  {
    name: 'Chef Antoine',
    title: 'Partner Hotel',
    avatar: 'https://i.ibb.co/sdY4J1hy/Chef-Antoine.jpg',
    review: 'Our guests consistently rave about the exquisite sweet boxes from Dulcé Land. A true touch of luxury for our dessert menu.',
  },
  {
    name: 'Ahmed K.',
    title: 'Event Planner',
    avatar: 'https://i.ibb.co/VYL6MFKP/Ahmed.jpg',
    review: 'Professional service and stunning products. Dulcé Land made our event truly special with their beautiful and delicious creations.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[28px] md:text-[40px] font-cinzel font-extrabold text-primary mb-12 animate-fade-in-up">
          What Our Clients Say
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="w-full max-w-sm bg-card border-primary/30 shadow-lg hover:shadow-primary/50 transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Avatar className="h-20 w-20 mb-4 border-2 border-primary">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground">{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="text-lg italic text-muted-foreground mb-4">"{testimonial.review}"</p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;