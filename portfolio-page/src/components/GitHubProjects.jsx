import React, { useEffect, useState } from 'react';

const GitHubProjects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch('https://api.github.com/users/ishratUmar18/repos');
      const data = await res.json();
      setRepos(data);
    };
    fetchRepos();
  }, []);

  const sortRepos = (criteria) => {
    // Sort the repos array based on the given criteria
    if (criteria === 'name') {
      setRepos(repos.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } else if (criteria === 'date_created') {
      setRepos(repos.sort((a, b) => (a.created_at < b.created_at ? 1 : -1)));
    }
  };

  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-4">GitHub Projects</h2>
      <div className="mb-4">
        <label className="block font-bold text-gray-700 mb-2" htmlFor="sort-select">
          Sort by:
        </label>
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id="sort-select"
          onChange={(e) => sortRepos(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="date_created">Date Created</option>
        </select>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} className="block p-4 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
              <p className="text-gray-600">{repo.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubProjects;



/*
To add a GitHub projects component, you can create a new component called GitHubProjects and use the GitHub API to fetch a list of your repositories. You can then display them in a list or grid layout using Tailwind CSS classes. Here's an example of what the component might look like: 

To automate the GitHub sort component, you can add a sorting function to the GitHubProjects component that allows the user to sort the repositories by various criteria (e.g. name, date created, etc.). Here's an example of how you could do this:
*/
