export default function Custom500() {
  return (
    <div className="space-y-4 sm:space-y-2 flex-col text-center sm:text-left px-6 lg:px-44 pt-0 lg:pt-19 sm:p-10 text-white font-light flex justify-center sm:justify-start">
      <h3 className="text-red-500 font-semibold uppercase font-barlowC text-[20px] lg:text-[28px] tracking-[2.7px] sm:tracking-[3.38px] lg:tracking-[4.78px]">500 ERROR</h3>
      <p className="font-barlow text-alt text-base">An error occurred on server.</p>
    </div>
  )
}