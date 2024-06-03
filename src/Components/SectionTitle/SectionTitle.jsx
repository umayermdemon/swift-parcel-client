const SectionTitle = ({ heading}) => {
  return (
    <div className="mx-auto text-center space-y-4 mb-4 lg:my-8 w-[300px] md:w-[400px]">
      <h1 className=" font-bold text-2xl text-[#0B2D42] md:text-3xl py-2 ">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
