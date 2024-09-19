import React from 'react';
import Head from 'next/head';
import Header from '@/components/header';
import HowItWorks from '@/components/howItWork';
import EventsSection from '@/components/eventSection';
import FeaturedEventsSection from '@/components/featuredEvents';
import Testimonials from '@/components/testimonials';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import CallToAction from '@/components/callToAction';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Eventbrite Clone</title>
        <meta name="description" content="Event management and ticketing platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <EventsSection />
        <FeaturedEventsSection />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
