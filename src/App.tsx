import { Hero } from "./components/layout/Hero";
import { Navbar } from "./components/layout/Navbar";
import { Testimonial } from "./components/layout/Testimonial";
import { CourseCarousel } from "./components/layout/CourseCarousel";
import CodeWalkthrough from "./components/layout/CodeWalkthrough";

// import { CodeWalkthrough } from "./components/layout/CodeWalkthrough";
// import FeatureSection from "./components/layout/CodeWalkthrough";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="container mx-auto">
          <Hero />
        </div>
        <div className="container mx-auto">
          <Testimonial />
          <CourseCarousel />
        </div>
        <CodeWalkthrough />

        {/* <FeatureSection /> */}
      </main>
    </div>
  );
}

export default App;
