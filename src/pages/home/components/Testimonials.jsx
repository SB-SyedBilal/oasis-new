"use client"

import { useState, useEffect, useRef } from "react"
import { testimonialsData } from "../../../utils/constant"
import TestimonialBg from "../../../assets/Testimonial/bg.svg"

const Testimonials = () => {
  const reviews = testimonialsData.reviews;
  // Responsive group size: 1 on mobile, 3 on md+
  const [groupSize, setGroupSize] = useState(1); // default to mobile, update in effect
  const totalSlides = reviews.length;
  const maxIndex = Math.max(0, totalSlides - groupSize);
  // For smooth loop: append first group to end
  const extendedReviews = [...reviews, ...reviews.slice(0, groupSize)];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [transitionLocked, setTransitionLocked] = useState(false);
  const intervalRef = useRef(null);

  // Responsive groupSize on resize
  useEffect(() => {
    const updateGroupSize = () => setGroupSize(window.innerWidth >= 768 ? 3 : 1);
    updateGroupSize(); // set initial value on mount
    window.addEventListener('resize', updateGroupSize);
    return () => window.removeEventListener('resize', updateGroupSize);
  }, []);

  // Unified next handler (click anywhere on mobile, right area on desktop)
  const handleNext = () => {
    if (!isTransitioning || transitionLocked) return;
    setTransitionLocked(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setIsTransitioning(true);
  };



  // Function to start the automatic sliding
  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);
    }, 3500);
  }

  // Start the automatic sliding when the component mounts or groupSize changes
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isTransitioning || transitionLocked) return;
      setTransitionLocked(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  }, [reviews.length, isTransitioning, transitionLocked, groupSize]);

  // Reset currentIndex to 0 when groupSize changes (prevents breakage on resize)
  useEffect(() => {
    setCurrentIndex(0);
  }, [groupSize]);


  // Handle instant jump after transition (for infinite loop)
  // If we just jumped (isTransitioning is false), re-enable transition for next move
  useEffect(() => {
    if (!isTransitioning) {
      // Next tick, re-enable transition
      const id = setTimeout(() => {
        setIsTransitioning(true);
      }, 20);
      return () => clearTimeout(id);
    }
  }, [isTransitioning]);

  // When we reach the duplicate first group, instantly reset to real first group (index 0)
  useEffect(() => {
    if (currentIndex === totalSlides) {
      // Wait for transition to finish, then reset instantly (no animation)
      const id = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTransitionLocked(false);
      }, 500); // match transition duration
      return () => clearTimeout(id);
    }
  }, [currentIndex, totalSlides]);

  // Re-enable transition after instant reset
  useEffect(() => {
    if (!isTransitioning) {
      const id = setTimeout(() => setIsTransitioning(true), 20);
      return () => clearTimeout(id);
    }
  }, [isTransitioning]);


  return (
    <div className="relative w-full overflow-hidden bg-[#2A2A2A] py-16 md:py-24">
      <div
        className="absolute inset-0 overflow-hidden bg-cover md:bg-center lg:bg-top"
        style={{ backgroundImage: `url(${TestimonialBg})` }}
      ></div>

      <div className="relative  text-center z-10 px-6 max-w-[1440px] m-auto">
        <div className="mb-12 flex flex-col text-center">
          <div className="mb-4 flex items-center">
            <div className="mr-2 h-4 w-4"></div>
            <p className="text-sm w-full text-white">{testimonialsData.badge}</p>
          </div>

          <h2 className="mb-4 text-3xl  font-bold text-white md:text-4xl">{testimonialsData.title}</h2>

          <p className="max-w-full text-white">{testimonialsData.subtitle}</p>
        </div>

        {/* Unified view - Sliding carousel with click navigation, responsive for mobile and desktop */}
        <div className="w-full">
          <div className="relative mx-auto max-w-6xl overflow-hidden">
            {/* Click area: right 1/4 on desktop, full card on mobile */}
            <div
              className={`absolute top-0 z-10 h-full ${groupSize === 1 ? 'w-full left-0' : 'right-0 w-1/4'}`}
              onClick={handleNext}
              aria-hidden="true"
              style={{ cursor: 'pointer' }}
            ></div>

            {/* Testimonial cards - slider effect, 1 visible at a time on mobile, 3 on desktop */}
            <div className="w-full overflow-hidden">
              <div
                className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${currentIndex * (100 / groupSize)}%)` }}
                onTransitionEnd={() => {
                  setTransitionLocked(false);
                }}
              >
                {extendedReviews.map((testimonial, index) => (
                  <div key={index} className={`flex-shrink-0 px-3 ${groupSize === 1 ? 'w-full' : 'w-1/3'}`}>
                    <div className="h-full rounded-lg bg-black p-8">
                      <div className="mb-4 font-serif text-5xl text-green-500">"</div>
                      <p className="mb-8 text-white">{testimonial.text}</p>
                      <div className="flex items-center">
                        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-300">
                          <img
                            src={testimonial.avatar || "/placeholder.svg?height=48&width=48"}
                            alt={testimonial.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{testimonial.name}</h4>
                          <p className="text-sm text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Testimonials
