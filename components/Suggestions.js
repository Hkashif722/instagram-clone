import { useEffect, useState } from "react";
import faker from "faker";
function Suggestions() {
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestion(suggestions);
  }, []);
  return (
    <div className="mt-5 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold">Suggestion for you</h3>
        <button>See All</button>
      </div>
      {suggestion.map((profile) => (
        <div key={profile.id} className="flex items-center justify-between  mt-3">
          <img src={profile.avatar} className="w-10 h-10 rounded-full border p-[1.6px]" alt="" />
          <div className="flex-1 ml-3">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">{`works at ${profile.company.name}`}</h3>
          </div>
          <div>
            <button className="text-sm font-bold text-blue-400">Follow</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
