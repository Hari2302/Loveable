import { useState } from "react";
import VideoModal from "./VideoModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full px-2 py-6 sm:py-20 text-center">

      {/* TITLE – FULL WIDTH (THIS IS GOOD) */}
      <h2 className="text-xl sm:text-5xl font-serif leading-relaxed text-white">
        யாருக்கோ எழுதிய உன்னை
        <br />
        மிக அழகாக ரசித்தவன் நான்
      </h2>

      {/* CONTENT – CONSTRAINED WIDTH */}
      <div className="w-full max-w-md sm:max-w-2xl mx-auto">

        {/* VIDEO BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="
            mt-8
            px-7
            py-3
            text-sm
            sm:text-base
            border
            border-gray-500
            rounded-full
            text-gray-300
            active:scale-95
            transition
          "
        >
          கடைசி வீடியோ
        </button>

        {/* NOTE */}
        <p className="mt-6 text-xs sm:text-base font-light leading-relaxed text-gray-300">
          Indha website ready panna
          <br />
          romba effort potten.
          <br />
          Casual-aa paathuttu
          <br />
          pogaadha.
        </p>

      </div>

      {/* VIDEO MODAL */}
      {open && <VideoModal close={() => setOpen(false)} />}
    </section>
  );
}
