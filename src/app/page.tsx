import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8 max-sm:pb-24">
      <div className="w-full items-center text-center text-4xl md:text-6xl">
        June 24th, 2024...
      </div>
      {/* <div className="w-full items-center text-center text-wizBrightRed text-4xl md:text-6xl">
        OPEN NOW
        <p className="text-2xl text-wizLightBlue">from 10am-10pm until July 4th.</p>
      </div> */}
      <Link href="/signboard" >
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

        <div className="text-center text-3xl md:text-5xl py-2">
          <h2 className="font-bold text-wizBlue">Click here to view our inventory!!</h2>
        </div>
      </Link>

      <div className="text-center pt-8 md:pt-0 text-xl lg:text-2xl">
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
