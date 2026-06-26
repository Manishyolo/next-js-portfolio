import TextReveal from "./TextReveal"


const Navbar = () => {
  return (
    <div className="px-[1rem] fixed top-0 left-0 h-[6vh] flex items-center justify-between w-full  z-[30]">
      <div className="leftNameSide ">
        <TextReveal>
          <h3 className="text-[1.2rem]">MANISH KUMAR</h3>
        </TextReveal>
      </div>
        <div className="rightLinkSide flex gap-[1.3rem]">
            <TextReveal>
          <h3 className="text-[.9rem]">Home</h3>
        </TextReveal>
          <TextReveal>
          <h3 className="text-[.9rem]">About</h3>
        </TextReveal>
          <TextReveal>
          <h3 className="text-[.9rem]">Contact</h3>
        </TextReveal>
        </div>
    </div>
  )
}

export default Navbar