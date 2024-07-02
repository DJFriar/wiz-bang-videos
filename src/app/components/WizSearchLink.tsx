import Link from "next/link"
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'


const WizSearchLink = () => {
  return(
    <Link href="/search" className="mt-4">
    <div className="flex">
      <MagnifyingGlassIcon className="h-6 w-6 mr-2 text-wizBlue" aria-hidden="true" /><span className="text-xl text-wizBlue">Search By Name</span>
    </div>
  </Link>
  )
}

export default WizSearchLink;
