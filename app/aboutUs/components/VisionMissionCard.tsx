const VisionMissionCard: React.FC<{
  title: string;
  content: string;
  bgColor: string;
}> = ({ title, content, bgColor }) =>
  <div className={`w-full md:w-[50%] ${bgColor} rounded-2xl p-6`}>
    <h3 className="text-white text-2xl font-semibold font-['Montserrat']">
      {title}
    </h3>
    <p className="text-white text-base font-normal font-['Montserrat'] leading-normal mt-4">
      {content}
    </p>
  </div>;

export default VisionMissionCard;
