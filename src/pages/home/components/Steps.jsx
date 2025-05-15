import React from "react";
import { steps } from "../../../utils/constant";

const Steps = () => {
  return (
    <section className="px-24 py-36 ">
      <div className="max-w-432 px-21.5 m-auto">
        <div className="flex items-center h-screen justify-between">
          <div className="mt-4 text-center">
            <h2 className="tracking-6 mb-5 text-[2.25rem] font-semibold">
              Empowering Students to Excel
            </h2>
            <h1 className="tracking-6 mb-5 text-[3.25rem] font-semibold">
              Discover the Oasis Advantage
            </h1>
            <p className="tracking-6 text-[1.75rem] font-light">
              Experience the difference of personalized online tutoring designed
              for top grades in IGCSE & A-levels
            </p>

            <div>
              <ul className="flex">
                {steps.map((step) =>
                  step.id >= 1 && step.id <= 3 ? (
                    <div className="flex">
                      <li key={step.text}>
                        <p>{step.text}</p>
                      </li>
                    </div>
                  ) : (
                    <div className="flex">
                      <li key={step.text}>
                        <p>{step.text}</p>
                      </li>
                    </div>
                  ),
                )}
              </ul>
            </div>
          </div>

          <figure className="h-screen bg-black flex items-center">
            <div className="rounded-3xl">

              <img src="/OurServices.png" alt="" className="rounded-3xl" />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Steps;
