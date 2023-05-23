import AboutMeCard from "./components/AboutMeCard";
import { RiShape2Fill, RiCodeBoxFill, RiLightbulbFlashFill } from "react-icons/ri"
import Title from "./components/Title";
import DegreesCard from "./components/DegreesCard";
import LanguagesCard from "./components/LanguagesCard";
import IconCard from "./components/IconCard";

const Home = () => {
  return (
    <section>
      <section className="p-4 space-y-4">
        <section className="space-y-4">
          <Title title="A little about me" />
          <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3">
            <AboutMeCard icon={<RiShape2Fill size="1.5em" className="text-primary-dark mr-2" />} title="UI Designer" text="3 years" />
            <AboutMeCard icon={<RiCodeBoxFill size="1.5em" className="text-primary-dark mr-2" />} title="FE Developer" text="4 years" />
            <AboutMeCard icon={<RiLightbulbFlashFill size="1.5em" className="text-primary-dark mr-2" />} title="Creative" text="100%" />
          </ul>
        </section>
        <section className="space-y-4">
          <Title title="Degrees" />
          <ul className="grid gap-4 sm:grid-cols-2">
            <DegreesCard size="100" title="Certified  Tech Developer" year="2021 - 2022" institute="Digital House" />
            <DegreesCard size="50" title="Web Programming Technician" year="2018 - 2019" institute="Escuela Da Vinci" />
          </ul>
        </section>
      </section>
      <section className="p-4 space-y-4">
        <section className="space-y-4">
          <Title title="Languages" />
          <ul className="grid gap-4 sm:grid-cols-2">
            <LanguagesCard level="C1" language="Spanish" size="100" />
            <LanguagesCard level="B2" language="English" size="70" />
          </ul>
        </section>
        <section className="space-y-4">
          <Title title="Study Abroad" />
          <ul className="grid gap-4 sm:grid-cols-2">
            <IconCard title="✈️ Cambrige, UK" text="English B1.2 level" institute="EF - Education First" />
          </ul>
        </section>
        <section className="space-y-4">
          <Title title="Awards" />
          <div className="flex overflow-x-scroll hide-scroll-bar">
            <ul className="flex space-x-4">
              <IconCard title="🏆 Top 300 LATAM" text="95% scholarship" institute="Digital House" />
              <IconCard title="🏆 Best average 2019" text="50% scholarship" institute="Escuela Da Vinci" />
              <IconCard title="🏆 Best average 2018" text="100% scholarship" institute="Escuela Da Vinci" />
            </ul>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Home;