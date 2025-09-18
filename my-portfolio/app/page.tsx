import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ServiceCard from "./components/ServiceCard";
import ResumeTabs from "./components/ResumeTabs";
import ContactCTA from "./components/ContactCTA";
import { FaLightbulb} from "react-icons/fa";

export default function HomePage() {
  return (
    <main className=" bg-[#182233] text-white min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      {/* What I Do Section */}
      <section id='work' className="py-16 bg-[#0F172A] text-center  xl:min-h-[92vh]">
        <h2 className="text-3xl font-bold text-white mb-8">What I Do</h2>
        <div className=" flex flex-wrap justify-center gap-2 auto-scroll">
          <ServiceCard icon={<FaLightbulb />} title="Business Website with Admin Panel" description="Multi-page site plus authenticated admin dashboard."url="https://blogsiteforall.netlify.app/"tech="React Express JWT"fullDes="Multi-page site (Blog, Services, About, Contact) plus authenticated admin dashboard."  />
          <ServiceCard icon={<FaLightbulb />} title="E-commerce Web Application" description="E-commerce site with login, filters, and order tracking."url="https://github.com/SaifulET/Ecommarce_app"tech="Bootstrap React Zustand Express Mongoose" fullDes="Full-featured online store with product filtering, OTP-based authentication, and order management. " />
          <ServiceCard icon={<FaLightbulb />} title="Landing Page Web Application" description="Single-page restaurant listing and service site."url="https://food-delivery-app-gzxm.vercel.app/"tech="Nextjs Tailwind Typescript" fullDes="Single-page site showcasing restaurant listings and services. 
• Hero search, category keywords, feature highlights, auto-sliding client reviews, and mobile-app promo."/>
          <ServiceCard icon={<FaLightbulb />} title="Kanban Board Web Application" description="Task-tracking tool with drag-and-drop columns "url="https://github.com/SaifulET/KanbanBoard"tech="React Tailwind Express Mongoose context-api " fullDes="Task-tracking tool with drag-and-drop columns (“To Do”, “In Progress”, “Done”). 
• Tasks store title, description, due date, priority; real-time reordering with priority recalculation. "/>
          <ServiceCard icon={<FaLightbulb />} title="Company Portfolio" description="Showcasing company services and achievement "url="https://bluestarmgt.com/"tech="React Tailwind Express Nodemailer" fullDes=" The company named Bluestar shows their 3 types of interior design they provide . Under those type it show sum sub section. also a user can send email to admin  "/>
          {/* <ServiceCard icon={<FaCode />} title="Web Development" description="Modern, responsive, and fast websites." /> */}
          {/* <ServiceCard icon={<FaPalette />} title="UI/UX Design" description="Beautiful and user-friendly interfaces." /> */}
        </div>
      </section>
      {/* Resume Section */}
      <ResumeTabs />
      <ContactCTA />
    </main>
  );
}
