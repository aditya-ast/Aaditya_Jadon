import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Experiences = () => {
  return (
    <div className="w-full py-12 md:py-16 lg:py-20" id="work">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
