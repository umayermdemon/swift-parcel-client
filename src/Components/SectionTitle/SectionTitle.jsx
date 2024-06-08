const SectionTitle = ({ heading}) => {
  return (
    <div className="mx-auto text-center  my-2 lg:my-4 w-[300px] md:w-[400px]">
      <h1 className=" font-bold text-2xl text-[#0B2D42] md:text-3xl ">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
