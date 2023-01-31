import { heroData } from "../data";

export default function Hero() {
  const { name, subtitle, miniBio } = heroData;
  return (
    <section className="my-40 min-h-[90vh] flex flex-col items-start justify-center -mt-4 lg:-ml-40">
      <div>
        <span className="text-green text-sm tracking-wider font-firaCode ml-[20px]">
          Hi, my name is
        </span>
        <h1 className="text-lightestSlate big-heading pt-[20px]">{name}</h1>
        <h2 className="text-slate big-heading">{subtitle}</h2>
        <p className="text-slate mt-[20px] max-w-[540px] text-[20px] leading-[26px] font-thin">
          {miniBio}
        </p>
      </div>
    </section>
  );
}
