export function Home() {
  return (
    <section className="text-color">
      <h1 className="text-4xl">Hello</h1>
      <h2 className="text-xl mb-1 mt-4 tracking-wide">A Bit About Me</h2>
      <p className="tracking-widest leading-6">
        I'm a paragraph. Click here to add your own text and edit me. I’m a
        great place for you to tell a story and let your users know a little
        more about you.
      </p>
      <div className="mt-4 flex items-center justify-between gap-x-2">
        <button className="w-28 sm:w-32 h-28 sm:h-32 rounded-full border-gray-300 border-4 font-extrabold hover:bg-gray-300 hover:text-gray-900 transition-all duration-300">
          Resume
        </button>
        <button className="w-28 sm:w-32 h-28 sm:h-32 rounded-full border-gray-300 border-4 font-extrabold hover:bg-gray-300 hover:text-gray-900 transition-all duration-300">
          Projects
        </button>
        <button className="w-28 sm:w-32 h-28 sm:h-32 rounded-full border-gray-300 border-4 font-extrabold hover:bg-gray-300 hover:text-gray-900 transition-all duration-300">
          Contact
        </button>
      </div>
      <img
        className="mt-4 rounded-full scale-90"
        src="./images/IMG_5010.jpeg"
        alt=""
        srcSet=""
      />
    </section>
  )
}
