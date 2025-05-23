import React from "react";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import Subjects from "./pages/subjects/Subjects";
import ContactUs from "./pages/contact_us/ContactUs";
import Curriculum from "./pages/curriculum/Curriculum";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import SubjectDetails from "./pages/subjects/subjectdetails/SubjectDetails";
import Footer from "./components/footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import EmailForm from "./components/emailform/EmailForm";
import ThankYou from "./components/thankyou/Thankyou";
import Error404 from "./components/Error404";
import { SUBJECTS } from "./utils/constant";

//Mobile Menu
import MobileMenu from "./components/Navigation/MobileMenu";

// NotFound component that only includes the Error404 component without navigation
const NotFound = () => {
  return <Error404 />;
};

// Standard layout for most pages that includes EmailForm and Footer
const StandardLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <div id="free-demo-section">
        <EmailForm />
      </div>
      <Footer />
    </>
  );
};

// Thank You page layout without EmailForm and Footer
const ThankYouLayout = () => {
  return (
    <>
      <ThankYou />
    </>
  );
};



// Custom component to handle dynamic routes
const DynamicRouteHandler = () => {
  // Get the slug parameter from the URL
  const { slug } = useParams();
  
  // Check if the slug matches any valid subject
  const isValidSubject = SUBJECTS.some(subject => subject.slug === slug);
  
  // If it's a valid subject, render the SubjectDetails component
  if (isValidSubject) {
    return <StandardLayout><SubjectDetails /></StandardLayout>;
  }
  
  // Otherwise, render the 404 page
  return <NotFound />;
};

function AppLayout() {
  return (
    <Routes>
      <Route path="/" element={<StandardLayout><Home /></StandardLayout>} />
      <Route path="/about-us" element={<StandardLayout><AboutUs /></StandardLayout>} />
      <Route path="/curriculum" element={<StandardLayout><Curriculum /></StandardLayout>} />
      <Route path="/subjects" element={<StandardLayout><Subjects /></StandardLayout>} />
      <Route path="/contact-us" element={<StandardLayout><ContactUs /></StandardLayout>} />
      <Route path="/thank-you" element={<ThankYouLayout />} />
      
      {/* Handle dynamic routes with validation */}
      <Route path="/:slug" element={<DynamicRouteHandler />} />
      
      {/* Catch truly invalid routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App; 
