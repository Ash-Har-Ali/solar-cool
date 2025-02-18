const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle
}) =>
  <div>
    <div className="text-sm md:text-base font-normal font-['Montserrat'] text-black">
      {title}
    </div>
    <div className="text-2xl md:text-4xl font-semibold font-['Montserrat'] mt-2 text-black">
      {subtitle}
    </div>
  </div>;

export default SectionTitle;
