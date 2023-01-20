export default function SectionHeading({ title }) {
  return (
    <div className="flex items-center justify-start w-full mb-[40px] after:bg-lightestNavy after:w-[300px] after:h-[1px] after:ml-[20px]">
      <h2 className="font-semibold text-[2rem] text-lightestSlate self-start">
        {title}
      </h2>
    </div>
  );
}
