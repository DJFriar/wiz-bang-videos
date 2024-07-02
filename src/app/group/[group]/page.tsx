'use client'
import React from "react";
import Link from "next/link";
import { Img } from "react-image";

import { fireworks, groupings } from "./data";
import WizFooter from "@/app/components/WizFooter";
import WizHeaderLogo from "@/app/components/WizHeaderLogo";
import WizSearchLink from "@/app/components/WizSearchLink";

export default function Group({ params }: { params: {group: string} }) {
  const groupName = params.group;
  const groupObj = groupings.find((obj) => obj.group === groupName);
  const groupFireworks = fireworks.filter(firework => firework.group === groupName );

  return (
    <main className="flex flex-col items-center justify-between py-12">
      <WizHeaderLogo />
      <WizSearchLink />
      <div className="text-4xl py-4">
        {groupObj?.name}
      </div>
      <ul role="list" className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {groupFireworks
          .sort((a,b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if(nameA < nameB) { return -1 };
            if(nameA > nameB) { return 1 };
            return 0;
          })
          .map((firework) => (
            <li key={firework.sku} className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
              <Link href={`/video/${firework.sku}`}>
                <div className="flex flex-1 flex-col p-2 md:p-4">
                  <div className="flex items-end justify-end space-x-3">
                    { firework.price &&
                      <span className="inline-flex flex-shrink-0 items-center rounded-full bg-wizBlue px-2 py-1 text-lg font-medium text-white ">{firework.price}</span>
                    }
                  </div>
                  <Img src={[`/images/${firework.sku}.png`, '/ImageMissingLight.png']}/>
                  <h3 className=" text-lg md:text-2xl font-medium text-gray-900">{firework?.name}</h3>
                </div>
              </Link>
            </li>
          ))}
      </ul>
      <WizFooter />
    </main>
  )
}
