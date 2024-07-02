'use client'
import { ChangeEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { Img } from "react-image";
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import WizFooter from '../components/WizFooter';
import WizHeaderLogo from '../components/WizHeaderLogo';
import { fireworks } from '../group/[group]/data';

// interface iDefault {
//   defaultValue: string | null
// }

interface iFirework {
  group: string;
  hasVideo: boolean;
  name: string;
  price: string;
  sku: string;
}

const WizSearch = () => {
  const [searchInput, setSearchInput ] = useState("");
  const [fireworkData, setFireworkData] = useState<iFirework[]>([]);
  const [runSearch, setRunSearch] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchInput = e.target.value;
    console.log(`Search box contains: ${searchInput}.`);
    setSearchInput(searchInput);
  }

  const handleKeyPress = (e: { key: any; }) => {
    if (e.key === "Enter") { setRunSearch(true) }
  }

  useEffect(() => {
    const handleSearch = () => {
      const findFirework = fireworks.filter((firework) => {
        if (searchInput) {
          console.log(`Firework is: ${searchInput}`);
          return (
            firework.name.toLowerCase().includes(searchInput.toLowerCase()) || firework.sku.toUpperCase().includes(searchInput.toUpperCase())
          );
        } else {
          return true;
        }
      });
      setFireworkData(findFirework);
      console.log(JSON.stringify(fireworkData))
    };
    handleSearch();
  }, [runSearch, searchInput]);

  return(
    <main className="flex flex-col items-center justify-between py-10 lg:py-8">
      <WizHeaderLogo />
      <h1 className="font-semibold text-xl md:text-3xl my-4">Search</h1>
      <div className=''>
        <div className="relative mt-0 mb-6 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:wizDarkBlue sm:text-sm sm:leading-6"
            id="search"
            name="search"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder='Enter firework name'
            type="search"
            value={searchInput ?? ""}
          />
        </div>
      </div>
      <ul role="list" className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {fireworkData
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

export default WizSearch;
