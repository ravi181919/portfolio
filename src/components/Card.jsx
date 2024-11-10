import React from "react";
const Card = ({ projects }) => {
  return  (
    projects && (
      <div className="lg:min-w-[30vw] relative flex items-start justify-center min-w-[90%] lg:h-full bg-white/30 backdrop-blur-lg shadow-lg border rounded-lg border-white/20 h-full dark:text-white/65">
        <div className="max-w-lg w-full h-full rounded py-4 px-3">
          {/* avatar */}
          <div className="flex py-2 px-2 items-center">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={projects.owner.avatar_url}
              alt={projects.owner.login}
            />
            <div>
              <h3 className="text-xs font-bold">
                <a
                  href={projects.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {projects.name}
                </a>
              </h3>
              <p className="text-xs">by {projects.owner.login}</p>
            </div>
          </div>
          {
            projects.description && <p className="text-xs">
            {projects.description.slice(0, 50)}{" "}
            <a
              href={projects.clone_url}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-400 hover:text-yellow-600 text-xs"
            >
              more...
            </a>
          </p>
          }
          
          <div className="w-full flex whitespace-nowrap overflow-x-scroll scrollbar-hidden mt-1 gap-2">
            {projects.topics.map((topic) => (
              <span
                key={topic}
                className="text-xs bg-zinc-800 dark:bg-white dark:text-black font-medium text-center text-white rounded-full px-2 py-1"
              >
                {topic}
              </span>
            ))}
          </div>
          <div className="mt-2 flex justify-between text-xs">
            <div>
              <span className="">⭐ {projects.stargazers_count}</span>
              <span className="ml-4">🍴 {projects.forks_count}</span>
              <span className="ml-4">
                🛠 Issues: {projects.open_issues_count}
              </span>
            </div>
            <span>🔖 {projects.language}</span>
          </div>
          <div className="mt-1 flex items-center">
            {projects.homepage && (
              <a
                href={projects.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-xs"
              >
                View Demo
              </a>
            )}
            <a
              href={projects.clone_url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-blue-400 hover:underline text-xs"
            >
              Clone projects
            </a>
          </div>
          <p className="text-xs mt-2">
            Last updated: {new Date(projects.updated_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    )
  );
};

export default Card;
