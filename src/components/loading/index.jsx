import React from "react";
import { ScaleLoader } from "react-spinners";
import { color } from "theme/color";

export default function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        background: color.palette.background.default,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScaleLoader
        height={60}
        width={6}
        radius={0}
        margin={4}
        color={color.palette.primary.main}
      />
    </div>
  );
}
