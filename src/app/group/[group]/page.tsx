import React from "react";
import Image from "next/image";
import Link from "next/link";

import { fireworks, groupings } from "./data";

export default function Group({ params }: { params: {group: string} }) {
  const groupName = params.group;
  const groupObj = groupings.find((obj) => obj.group === groupName);
  console.log(` I found group ${JSON.stringify(groupObj)}`);

  return (
    <main className="flex flex-col items-center justify-between py-12">
      <Image src="/WizBangHeader.png" alt="Wiz Bang Boomers header logo." width={350} height={350} />
      <div className="text-4xl py-4">
        {groupObj?.name}
      </div>
      <ul role="list" className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {fireworks.map((firework) => (
          <li key={firework.sku} className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-wizLightBlue text-center shadow">
            <Link href={`/video/${firework.sku}`}>
              <div className="flex flex-1 flex-col p-8 md:p-10 lg:p-12">
                <h3 className=" text-lg md:text-2xl font-medium text-gray-900">{firework.name}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        Footer goes here.
      </div>
    </main>
  )
}
