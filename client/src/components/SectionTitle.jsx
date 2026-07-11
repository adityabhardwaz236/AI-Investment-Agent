function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-5xl font-bold gradientText">
        {title}
      </h2>

      <p className="text-gray-400 mt-4">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;