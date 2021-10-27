import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ">
      {/* Section 1  */}
      <section className="col-span-2">
        {/* Stories  */}
        <Stories />
        {/* Post  */}
        <Posts />
      </section>
      {/* Section 2     */}
      <section className=" hidden xl:inline-grid xl:col-span-1">
        <div className="fixed top-20">
          <MiniProfile />
          <Suggestions />
        </div>
        {/* Suggestion  */}
      </section>
    </main>
  );
}

export default Feed;
