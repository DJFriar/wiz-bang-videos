import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8 max-sm:pb-24">
      <div className="w-full items-center text-center text-4xl md:text-6xl">
        June 24th, 2024...
      </div>

      <div className="relative hidden md:flex place-items-center ">
        <Image
          className=""
          src="/WizBangHeader.png"
          alt="Wiz-Bang Boomers Logo"
          width={1200}
          height={100}
          priority
        />
      </div>

      <div className="relative hidden max-md:flex place-items-center">
        <Image
          className=""
          src="/WizBangVertical.png"
          alt="Wiz-Bang Boomers Logo"
          width={800}
          height={100}
          priority
        />
      </div>

      <div className="text-center text-3xl md:text-5xl">
        <p>
          711 Farm Road 1510 <br />
          Brookston, TX 75421
        </p>
        <p className='mt-6'>
          <a href="tel:8639492264">(863) WIZ-BANG</a>
        </p>
      </div>
    </main>
  )
}
