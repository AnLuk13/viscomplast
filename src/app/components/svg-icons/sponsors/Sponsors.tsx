import React from "react";
import RamplastIcon from "@/app/components/svg-icons/sponsors/RamplastIcon";
import VekaIcon from "@/app/components/svg-icons/sponsors/VekaIcon";
import GealanIcon from "@/app/components/svg-icons/sponsors/GealanIcon";
import KurtogluIcon from "@/app/components/svg-icons/sponsors/KurtogluIcon";

function Sponsors() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <RamplastIcon />
      </div>
      <div>
        <VekaIcon />
      </div>
      <div>
        <GealanIcon />
      </div>
      <div>
        <KurtogluIcon />
      </div>
    </div>
  );
}

export default Sponsors;
