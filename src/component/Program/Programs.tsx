import ProgramCard from "./ProgramCard";
import programs from "./programs.data";
import { useTranslation } from "react-i18next";

function Programs() {
  const {t} = useTranslation()
  return (
    <section>
      <h2 className="font-bold text-[24px] leading-7 text-center pt-8 pr-6 pb-8 pl-6">
     {t("programs.title")}
      </h2>

      <div className="mx-auto max-w-6xl px-6 py-16 w-full">
        
        <div className="flex items-center justify-center gap-5 w-full  flex-wrap">
          {programs.map((program, index) => (
            <ProgramCard key={`program-${index}`} {...program} />
          ))}
        </div>
        </div>
 
        
      </section>
    
  );
}

export default Programs;
