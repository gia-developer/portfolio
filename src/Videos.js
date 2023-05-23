import Title from "./components/Title";
import VideosCard from "./components/VideosCard";

const Videos = () => {
  return (
    <>
      <section className="space-y-4 p-4">
        <Title title="Videos" />
        <ul className="space-y-10">
          <VideosCard title="UI Designer" />
          <VideosCard title="UI Designer" />
          <VideosCard title="UI Designer" />
        </ul>
      </section>
    </>
  );
};

export default Videos;