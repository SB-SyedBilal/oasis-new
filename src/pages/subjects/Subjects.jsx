import Curriculum from "../../components/demandsubjects/DemandSubjects";
import { Helmet } from "react-helmet";
import HomePage from "./components/HeroSection";

import { SUBJECTS } from '../../utils/constant';
const Subjects = () => {
  return (
    <div>
      <Helmet>
        <title>Subjects - The Oasis Academy</title>
      </Helmet>
      <HomePage />
      <Curriculum
        numSubjects={SUBJECTS.length}
        heading="Subjects"
        headingText="Popular Subjects at The Oasis Academy"
        cardWidth="w-[21.875rem]"
        subjects={SUBJECTS}
      />
    </div>
  );
};

export default Subjects;
