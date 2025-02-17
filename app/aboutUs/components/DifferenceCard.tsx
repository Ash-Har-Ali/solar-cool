const DifferenceCard: React.FC<{ icon: React.ReactNode; title: string; content: string }> = ({
  icon,
  title,
  content,
}) => (
  <div className="flex flex-col items-center bg-[#e6f1eb] rounded-3xl p-6 max-w-xs">
    <div className="text-6xl text-[#048c46]">{icon}</div>
    <h4 className="text-black text-xl font-semibold font-['Montserrat'] mt-4">
      {title}
    </h4>
    <p className="text-black text-sm font-normal font-['Montserrat'] text-center mt-4">
      {content}
    </p>
  </div>
);

export default DifferenceCard;
