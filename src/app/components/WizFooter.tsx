import React from "react";

import WizNavigation from "./WizNavigation";

interface WizFooterProps {}

const WizFooter: React.FC<WizFooterProps> = (props) => {
  return (
  <footer>
    <div className="mx-auto overflow-hidden pt-8">
      <div className="text-center text-sm ">
        <p className="text-gray-300">
          <a href="https://www.google.com/maps/dir//711+FM1510,+Brookston,+TX+75421/@33.6605961,-95.6367631,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x864a561b233ba081:0x240ba1b24461dcfd!2m2!1d-95.6341828!2d33.6605961?entry=ttu" target="_blank">711 Farm Road 1510, Brookston, TX 75421</a> <br />
          <a href="tel:8639492264">(863) WIZ-BANG</a>
        </p>
      </div>
      <div className="mt-4 flex justify-center space-x-6">
        {WizNavigation.social.map((item) => (
          <a key={item.name} href={item.href} target="_blank" className="text-gray-500 hover:text-gray-700">
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="mt-5 text-center text-xs text-gray-500">
        &copy; 2024 Wiz-Bang Boomers. All rights reserved.<br />
        Site created & maintained by <a href="https://www.ambitiousnerds.com">ambitiousNerds</a>.
      </p>
    </div>
  </footer>
  )
};

export default WizFooter;
