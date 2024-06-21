import Link from "next/link";
import Image from "next/image";
import { groupings } from "../group/[group]/data";

export default function signboard() {

  return (
    <main className="flex flex-col items-center justify-between py-10 lg:py-8">
      <Image src="/WizBangHeader.png" alt="Wiz Bang Boomers header logo." priority width={350} height={350} />
      <h1 className="font-semibold text-4xl md:text-5xl my-4">Categories</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {groupings.map((group) => (
          <li key={group.name} className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-wizDarkBlue text-center shadow">
            <Link href={`/group/${group.group}`}>
              <div className="flex flex-1 flex-col p-8 md:p-10 lg:p-12">
                <h3 className=" text-lg md:text-2xl lg:text-3xl text-white">{group.name}</h3>
              </div>
            </Link>
          </li>
        ))}
      </div>
    </main>
  )
}
