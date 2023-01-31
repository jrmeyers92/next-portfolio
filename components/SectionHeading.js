export default function SectionHeading({ title }) {
  return (
    <div className="flex items-center justify-start w-full mb-[40px] after:bg-lightestNavy after:w-full after:h-[1px] after:mx-[20px]">
      <h2 className="section-header font-semibold text-lightestSlate self-start whitespace-nowrap">
        {title}
      </h2>
    </div>
  );
}
