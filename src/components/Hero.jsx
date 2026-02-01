import { useState } from "react";
import VideoModal from "./VideoModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-8 sm:py-8 text-center">
      
      {/* MAIN MESSAGE */}
      <h2 className="text-lg sm:text-5xl font-serif leading-relaxed text-white">
        யாருக்கோ எழுதிய உன்னை
        <br />
        மிக அழகாக ரசித்தவன் நான்
      
      </h2>

      {/* VIDEO BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="mt-10 px-6 py-3 text-sm sm:text-base 
                   border border-gray-500 rounded-full 
                   text-gray-300 active:scale-95 transition"
      >
        Unakkaaga oru kadaisi video
      </button>

      {/* THANGGLISH NOTE */}
      <h5 className="mt-8 text-sm sm:text-base font-light leading-relaxed text-gray-300">
        Indha website ready panna
        <br />
        romba effort potten.
        <br />
        Casual-aa paathuttu
        <br />
        pogaadha.
      </h5>

      {/* VIDEO MODAL */}
      {open && <VideoModal close={() => setOpen(false)} />}
    </section>
  );
}
