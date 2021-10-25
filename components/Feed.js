import Posts from "./Posts";
import Stories from "./Stories";

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
      <section>
        {/* Mini profile  */}
        {/* Suggestion  */}
      </section>
    </main>
  );
}

export default Feed;
