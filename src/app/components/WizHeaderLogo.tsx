import Link from "next/link"
import Image from "next/image"

const WizHeaderLogo = () => {
  return(
    <Link href="/">
      <Image src="/WizBangHeader.png" alt="Wiz Bang Boomers header logo." priority width={350} height={350} />
    </Link>
  )
}

export default WizHeaderLogo;
