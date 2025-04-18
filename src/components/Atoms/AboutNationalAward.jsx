import BtnDiscoverMore from "./BtnDiscoverMore";

const AboutNationalAward = () => {
    return(
        <div className="text-black">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-pretty bg-gradient-to-r from-[#490303] from-0% to-[#AF0808] to-40% text-transparent bg-clip-text">
          Indonesian National <br /> Cultural Awards
          </h1>
        </div>
        <p className="font-medium text-sm/relaxed lg:text-[15px]/relaxed xl:text-base/relaxed mt-3 text-pretty text-justify max-w-[23rem] md:max-w-[30rem] lg:max-w-[29rem] xl:max-w-[35rem]">
        The Indonesian National Cultural Award is a form of appreciation from the government to individuals, groups, or communities who play an important role in preserving, developing, and advancing Indonesian culture.
        </p>
        <div className="mt-5">
          <BtnDiscoverMore/>
        </div>
      </div>
    )
}

export default AboutNationalAward;