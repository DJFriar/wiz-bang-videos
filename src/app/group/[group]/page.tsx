'use client'
import React from "react";

import { groupings } from "./data";

export default function Group({ params }: { params: {group: string} }) {
  const groupName = params.group;
  const groupObj = groupings.find((obj) => obj.group === groupName);
  console.log(` I found group ${JSON.stringify(groupObj)}`);

  return (
    <main className="flex flex-col items-center justify-between py-12">
      <div className="text-4xl pb-2">
        {groupObj?.name}
      </div>
      <div>
        Fireworks grid goes here.
      </div>
      <div>
        Footer goes here.
      </div>
    </main>
  )
}
