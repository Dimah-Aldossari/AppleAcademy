import LearnersCard from './LearnersCard'
import { learnersApps } from './learners.data'
import { useTranslation } from "react-i18next";

function Learners() {
  const {t} = useTranslation()
  return (
    <div className="bg-[#1c1c1e] text-white md:flex flex-col items-center p-16 ">
      
      <h1 className="text-center md:text-4xl font-semibold  pt-4 mx-10 lg:mx-0 mb-8 ">
   {t("learners.title")}
      </h1>

      <p className="text-[12px] md:text-[16px] text-gray-400 text-center  max-w-xl mb-16 ">
        {/* {t("learners.description")} */}
      </p>

      <div className="gap-x-20 gap-y-10  w-full max-w-5xl grid grid-cols- md:grid-cols-2 ">


        {learnersApps.map(app => (
          <LearnersCard
            key={app.id}
            name={app.name}
            story={app.category}   
            image={app.image}
          />
        ))}

      </div>
    </div>
  )
}

export default Learners