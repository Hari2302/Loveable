import { useNavigate } from "react-router-dom";
import HeartRain from "../components/HeartRain";

export default function StillLove() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: "url('/Background.jpg')" }}
    >
      {/* Dark overlay (visual only) */}
      <div className="absolute inset-0 bg-black/65 pointer-events-none"></div>

      {/* Heart rain */}
      <HeartRain />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col text-white">

        {/* HEADER */}
        <header className="flex items-center justify-between px-4 py-4 sm:px-10">
          <img
            src="/Chan.jpg"
            alt="Me"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border border-white/30"
          />

          <h1 className="text-sm sm:text-base font-serif tracking-wider text-center opacity-90">
            The Last Page
          </h1>

          <img
            src="/Priya.jpg"
            alt="She"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border border-white/30"
          />
        </header>

        {/* MAIN CONTENT */}
        <section className="flex-1 flex items-center justify-center px-3 sm:px-6">
          <div className="w-full max-w-md sm:max-w-lg mx-auto">
            <p className="text-sm sm:text-base text-gray-200 text-center leading-loose">
              நாம் பகிர்ந்த
              <br />
              அந்த சிரிப்புகளும்,
              <br />
              அந்த மௌனங்களும்,
              <br />
              அந்த கனவுகளும்
              <br /><br />

              எல்லாம்
              <br />
              உண்மையானவை. 💚
              <br />
              ஆனால்
              <br />
              எல்லாமே
              <br />
              நிரந்தரம் அல்ல.
              <br /><br />

              இன்று
              <br />
              உன்னை
              <br />
              எந்த வருத்தமும் இன்றி,
              <br />
              எந்த குற்றச்சாட்டும் இன்றி
              <br />
              மனதார விடுகிறேன்.
              <br /><br />

              சில கதைகள்
              <br />
              முடிவதில்லை…
              <br />
              நினைவாக
              <br />
              மட்டும்
              <br />
              வாழ்கின்றன.
            </p>
          </div>
        </section>

        {/* FINAL GOODBYE */}
        <section className="px-3 sm:px-6 pb-6 text-center">
          <div className="w-full max-w-sm sm:max-w-md mx-auto">
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              இது
              <br />
              நம் கதையின்
              <br />
              கடைசி பக்கம்.
              <br /><br />

              நீ தொடங்கும்
              <br />
              புதிய வாழ்க்கை
              <br />
              உனக்கு
              <br />
              அமைதியையும்,
              <br />
              மனநிறைவையும்
              <br />
              தருவதாக இருக்கட்டும்.
              <br /><br />

              விடைபெறுகிறேன்.
              <br />
              நலமுடன் இரு.
              <br />
              உன் புதிய வாழ்க்கைக்கு
              <br />
              என் மனமார்ந்த வாழ்த்துகள். 💚
            </p>
          </div>
        </section>

        {/* BACK BUTTON */}
        <div className="pb-10 text-center">
          <button
            onClick={() => navigate("/")}
            className="px-7 py-2.5 text-xs sm:text-sm rounded-full
                       border border-gray-500 text-gray-300
                       active:scale-95 transition
                       hover:border-gray-300 hover:text-white"
          >
            ← Back to Home
          </button>
        </div>

      </div>
    </div>
  );
}
