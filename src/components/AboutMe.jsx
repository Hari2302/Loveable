export default function AboutMe() {
  return (
    <section className="w-full max-w-xl mx-auto text-center px-6 ">
      
      {/* Soft divider */}
      <div className="w-12 h-px bg-gray-700 mx-auto mb-8"></div>

      {/* Tamil Content */}
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
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
        className="inline-block mt-10 px-6 py-3 rounded-full 
                   border border-gray-600
                   text-[11px] sm:text-sm 
                   text-gray-300 
                   active:scale-95 transition
                   hover:border-gray-400 hover:text-white"
      >
        நான் எழுதின  
        <br />
        கடிதம் இங்கே உள்ளது 💚
      </a>
    </section>
  );
}
