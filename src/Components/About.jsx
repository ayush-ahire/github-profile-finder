function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Profile Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles in a systematic and aesthetic view
      </p>
      <p className="text-lg text-gray-400">
        Developer Info:{" "}
        <span className="text-white">
          HI! my name is Ayush. I'm React developer, also keen in educating
          myself in UI/ Web designing.I created this project just for
          learning purpose.
        </span>
      </p>
      <p className="text-lg text-gray-400">
        DM me your Feedback :
         <a
          className="text-white"
          href="https://www.instagram.com/iamayush.ahire/"
        >
           iamayush.ahire
        </a>
      </p>
    </>
  );
}

export default About;
