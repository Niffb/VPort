import { Hero } from '../components/Hero';
import { Work } from '../components/Work';
import { Blog as BlogSection } from '../components/Blog';

export function Home() {
  return (
    <>
      <Hero />
      <Work />
      <BlogSection />
    </>
  );
}
