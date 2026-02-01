import { useState } from "react";
import VideoModal from "./VideoModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="
        w-full 
        px-2.5        /* ~10px on mobile */
        sm:px-6       /* more space on bigger screens */
        py-10 
        sm:py-16 
        text-center
      "
    >
      {/* MAIN MESSAGE */}
      <h2
        className="
          text-xl        /* bigger on mobile */
          sm:text-5xl 
          font-serif 
          leading-relaxed 
          text-white
        "
      >
        யாருக்கோ எழுதிய உன்னை
        <br />
        மிக அழகாக ரசித்தவன் நான்
      </h2>

      {/* VIDEO BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="
          mt-8 
          px-6 
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
        Unakkaaga oru kadaisi video
      </button>

      {/* NOTE */}
      <h5
        className="
          mt-6
          text-xs        /* smaller, softer */
          sm:text-base 
          font-light 
          leading-relaxed 
          text-gray-300
        "
      >
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
