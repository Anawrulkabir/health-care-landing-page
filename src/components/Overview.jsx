const Overview = () => {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="border bg-zinc-50 rounded-3xl p-4 space-y-3">
        <h1 className="text-3xl font-bold">90%</h1>
        <p>Patient satisfaction rate, reflecting our commitment.</p>
        <img src="/Media/chart.png" alt="" />
      </div>
      <div className="flex flex-col gap-5 flex-1">
        <div>
          <h1 className="text-4xl text-center font-semibold">
            Comprehensive Care <br /> for Every Patient
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="border rounded-3xl p-4 flex flex-col">
            <h1 className="text-xl font-bold">500+</h1>
            <p>Board Certified Doctor</p>
            <img src="/Media/certificate.png" alt="" className="h-16 w-16" />
          </div>
          <div className="border rounded-3xl p-4">
            <h1 className="text-xl font-bold">
              4.8 <img src="/Media/star.png" alt="" />
            </h1>
            <p>Over 20,000 Patient</p>
            <img src="/Media/avatar.png" alt="" />
          </div>
          <div className="border rounded-3xl p-4">
            <h1 className="text-xl font-bold">$5000</h1>
            <p>Money spend for poor patient</p>
            <img src="/Media/coin.png" alt="" className="h-16 w-16" />
          </div>
        </div>
      </div>
      <div className="border bg-zinc-50 p-4 rounded-3xl space-y-3">
        <h1 className="text-3xl font-bold">50%</h1>
        <p>Free lession video for patient</p>
        <img src="/Media/video-icon.png" alt="" />
      </div>
    </div>
  )
}

export default Overview
