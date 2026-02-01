export default function AboutMe() {
  return (
    <section className="w-full px-2 py-6 sm:py-20 text-center">

      <div className="w-full max-w-sm sm:max-w-xl mx-auto">

        {/* Tamil Content */}
        <p className="text-xl sm:text-5xl font-serif leading-relaxed text-white">
          நீ உன் வாழ்க்கையில்
          <br />
          ஒரு புதிய திசையை
          <br />
          தேர்வு செய்திருக்கிறாய்.
          <br /><br />

          அந்தத் திசை
          <br />
          உனக்கு
          <br />
          அமைதியையும்,
          <br />
          மனநிறைவையும்
          <br />
          கொண்டு வரட்டும்.
          <br /><br />

          அதுவே
          <br />
          போதுமானது.
        </p>

        {/* PDF Download */}
        <a
          href="/Love.pdf"
          download
          className="
            inline-block
            mt-8
            px-7
            py-3
            rounded-full
            border
            border-gray-600
            text-[11px]
            sm:text-sm
            text-gray-300
            active:scale-95
            transition
            hover:border-gray-400
            hover:text-white
          "
        >
          Download 💚
        </a>

      </div>
    </section>
  );
}
