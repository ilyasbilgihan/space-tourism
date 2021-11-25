

export default function PageTitle({index, title}) {

  return (
    <h3 className="font-barlowC text-white font-light uppercase flex justify-center sm:justify-start text-base sm:text-[20px] lg:text-[28px] tracking-[2.7px] sm:tracking-[3.38px] lg:tracking-[4.78px]">
      <span className="opacity-25 font-bold mr-4 sm:mr-6">{index}</span>
      <span>{title}</span>
    </h3>
  )
}
