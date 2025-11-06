"use client";

import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import Header from '@/components/Header';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your message has been sent!");
    // In a real application, you would send this data to a backend
    console.log("Contact form submitted!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-[92px] container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-card p-8 rounded-lg shadow-lg animate-fade-in-up">
          <h1 className="text-4xl font-cinzel font-extrabold text-center text-primary mb-6">Contact Us</h1>
          <p className="text-center font-cormorant-garamond text-muted-foreground mb-8">
            Have a question or a special request? We'd love to hear from you!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="font-cormorant-garamond text-foreground">Name</Label>
              <Input id="name" type="text" placeholder="Your Name" required className="bg-input text-foreground border-border focus:ring-primary" />
            </div>
            <div>
              <Label htmlFor="email" className="font-cormorant-garamond text-foreground">Email</Label>
              <Input id="email" type="email" placeholder="Your Email" required className="bg-input text-foreground border-border focus:ring-primary" />
            </div>
            <div>
              <Label htmlFor="subject" className="font-cormorant-garamond text-foreground">Subject</Label>
              <Input id="subject" type="text" placeholder="Subject of your message" required className="bg-input text-foreground border-border focus:ring-primary" />
            </div>
            <div>
              <Label htmlFor="message" className="font-cormorant-garamond text-foreground">Message</Label>
              <Textarea id="message" placeholder="Your Message" rows={5} required className="bg-input text-foreground border-border focus:ring-primary" />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Send Message
            </Button>
          </form>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default ContactUs;