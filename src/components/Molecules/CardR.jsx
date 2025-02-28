const CardR = () => {
    return(
        <div className="relative w-[45%] h-72 overflow-hidden rounded-tl-full">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-dark-red to-light-red"></div>

  {/* Gambar Atas */}
  <div className="absolute right-10 -top-12 z-10">
    <img
      src="https://cdn.antaranews.com/cache/1200x800/2023/11/23/WhatsApp-Image-2023-11-23-at-14.44.23.jpeg.webp"
      className="rounded-tr-full rounded-tl-full object-cover w-72 h-72 border-[6px] border-white rotate-6 shadow-lg"
      alt=""
    />
  </div>

  {/* Gambar Bawah */}
  <div className="absolute -left-2 bottom-0 -rotate-6 z-10">
    <img
      src="https://ambonews.com/sites/default/files/article/2024/12/WhatsApp%20Image%202024-12-20%20at%2009.37.09.jpeg"
      alt=""
      className="w-64 object-cover rounded-tl-4xl rounded-b-4xl rounded-tr-full border-[6px] border-white shadow-lg"
    />
  </div>
</div>

    )
}