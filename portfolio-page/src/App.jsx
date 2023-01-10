import React from 'react'

export default function App() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div className="max-w-3xl mx-auto p-4 md:p-8">
    <div className="font-bold text-xl mb-2">John Doe</div>
    <div className="text-gray-700 text-base">Web Developer</div>
    <div className="mt-4">
      <div className="font-bold text-lg mb-2">Contact Information</div>
      <div>Email: john@example.com</div>
      <div>Phone: 555-555-1212</div>
    </div>
    <div className="mt-4">
      <div className="font-bold text-lg mb-2">Work Experience</div>
      <div className="mb-4">
        <div className="font-bold text-xl mb-2">Software Engineer</div>
        <div>ACME Corporation</div>
        <div className="text-gray-700">Jan 2020 - Present</div>
        <div className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque in ipsum id orci porta dapibus.
        </div>
      </div>
      <div>
        <div className="font-bold text-xl mb-2">Web Developer</div>
        <div>XYZ Inc.</div>
        <div className="text-gray-700">May 2017 - Dec 2019</div>
        <div className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque in ipsum id orci porta dapibus.
        </div>
      </div>
    </div>
    <div className="mt-4">
      <div className="font-bold text-lg mb-2">Education</div>
      <div className="mb-4">
        <div className="font-bold text-xl mb-2">Bachelor's Degree in Computer Science</div>
        <div>University of Technology</div>
        <div className="text-gray-700">Sept 2014 - May 2017</div>
      </div>
    </div>
    <div className="mt-4">
      <div className="font-bold text-lg mb-2">Social Links</div>
      <div>
        <a href="https://twitter.com/johndoe" className="text-blue-500 hover:text-blue-800">
          Twitter
        </a>
      </div>
      <div>
        <a href="https://linkedin.com/in/johndoe" className="text-blue-500 hover:text-blue-800">
          LinkedIn
        </a>
      </div>
      <div>
      <a href="https://github.com/johndoe" className="text-blue-500 hover:text-blue-800">
          GitHub
        </a>
      </div>
    </div>
    <div className="mt-4">
      <div className="font-bold text-lg mb-2">Personality</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus at diam efficitur, consectetur massa non, aliquam ipsum.
        Maecenas dapibus justo eu lorem dignissim, eu tincidunt augue lobortis.
        Nulla facilisi.
      </div>
    </div>
    <div className="mt-4">
      <div className="font-bold text-lg mb-2">GitHub Projects</div>
      <div className="mb-4">
        <div className="font-bold text-xl mb-2">project-name</div>
        <div className="text-gray-700">Jan 2020</div>
        <div className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque in ipsum id orci porta dapibus.
        </div>
      </div>
      <div>
        <div className="font-bold text-xl mb-2">another-project</div>
        <div className="text-gray-700">Oct 2019</div>
        <div className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque in ipsum id orci porta dapibus.
        </div>
      </div>
    </div>
  </div>

  </>
  )
}
