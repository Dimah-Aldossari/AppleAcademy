import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";

const countries = [
  {
    id: 1,
    name: "community.countries.brazil.name",
    flag: "🇧🇷",
    description: "community.countries.brazil.description"
  },
  {
    id: 2,
    name: "community.countries.italy.name",
    flag: "🇮🇹",
    description: "community.countries.italy.description"
  },
  {
    id: 3,
    name: "community.countries.indonesia.name",
    flag: "🇮🇩",
    description: "community.countries.indonesia.description"
  }
];

function Community() {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
const {t} = useTranslation()
  return (
<div className="p-6 flex flex-col items-center justify-center min-h-100">
  <h2 className="font-ibm-bold font-semibold mb-4 text-center">
    {t("community.title")}
  </h2>

  {countries.map((country) => {
    const isOpen = openId === country.id;

    return (
      <div key={country.id} className="border-b border-gray-300 pb-4 mb-4 w-full max-w-2xl">
        <button
          onClick={() => handleToggle(country.id)}
          className="w-full flex items-center justify-between text-left"
        >
          <span className="flex items-center gap-2">
            {country.flag} {t(country.name)}
          </span>

          <IoIosArrowDown
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <p className="mt-4 text-gray-400 text-center">
            {t(country.description)}
          </p>
        )}
      </div>
    );
  })}
</div>
  );
}

export default Community;