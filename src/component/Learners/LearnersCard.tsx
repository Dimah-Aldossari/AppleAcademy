import { useTranslation } from "react-i18next";
interface LearnersCardProps {
  name: string;
  story: string;
  image: string;
}

function LearnersCard({ name, story, image }: LearnersCardProps) {
  const {t} = useTranslation()

  return (
    <div className="flex w-full md:flex items-center justify-between border-b border-white/10 pb-6 '">
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div>
          <p className="font-medium">{t(name)}</p>
          <span className="text-gray-400 text-sm">{t(story)}</span>
        </div>
      </div>

      <button className="bg-blue-500 px-6 py-2 rounded-full text-sm font-medium">
                {t("learners.cta")}

      </button>

    </div>
  );
}

export default LearnersCard;