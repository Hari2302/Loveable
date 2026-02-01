export default function VideoModal({ close }) {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <video
  autoPlay
  loop
  playsInline
  className="w-full rounded-xl"
>
  <source src="src/assets/VedioBr.mp4" type="video/mp4" />
</video>


        <button
          onClick={close}
          className="mt-4 text-gray-400 text-sm mx-auto block"
        >
          Close
        </button>
      </div>
    </div>
  );
}
