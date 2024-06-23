import React from "react";

import WizNavigation from "./WizNavigation";

interface WizFooterProps {}

const WizFooter: React.FC<WizFooterProps> = (props) => {
  return (
  <footer>
    <div className="mx-auto overflow-hidden py-10 sm:py-24">
      <div className="mt-10 md:mt-6 flex justify-center space-x-8">
        {WizNavigation.social.map((item) => (
          <a key={item.name} href={item.href} target="_blank" className="text-gray-400 hover:text-gray-500">
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
