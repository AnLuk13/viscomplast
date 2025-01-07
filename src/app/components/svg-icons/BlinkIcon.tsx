import React from "react";
import useIsLargeScreen from "@/app/lib/hooks/useIsLargeScreen";

function BlinkIcon({ color }: { color: string }) {
  const isLargeScreen = useIsLargeScreen(860);
  const size = isLargeScreen ? 48 : 32;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: size,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 5C26.1782 14.446 33.554 21.8218 43 24C33.554 26.1782 26.1782 33.554 24 43C21.8218 33.554 14.446 26.1782 5 24C14.446 21.8218 21.8218 14.446 24 5Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export default BlinkIcon;
