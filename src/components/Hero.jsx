const Hero = () => {
  return (
    <div className="relative">
      <div>
        <img
          src="../../../public/Media/Rectangle 5.png"
          alt=""
          className="w-full h-[70vh] object-cover rounded-[3rem]"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-[70vh] rounded-[3rem] bg-gradient-to-b from-green-400 from-0% via-[#1a352f] via-0%  to-[#024538] to-100% opacity-45"></div>
    </div>
  )
}

export default Hero
