import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Razvan Statescu — Founder & Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const outfitBold = await readFile(
    join(process.cwd(), "assets/fonts/Outfit-Bold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px 80px",
          background: "#09090b",
          color: "#fafafa",
          fontFamily: "Outfit",
        }}
      >
        {/* Dot grid pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.15,
            backgroundImage:
              "radial-gradient(circle, #3f3f46 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background:
              "linear-gradient(to right, transparent, #f59e0b, transparent)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <p
            style={{
              fontSize: 18,
              color: "#f59e0b",
              margin: 0,
              letterSpacing: "0.05em",
            }}
          >
            // founder &amp; builder
          </p>

          <h1
            style={{
              fontSize: 72,
              fontWeight: 700,
              margin: "12px 0 0",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Razvan Statescu
          </h1>

          <p
            style={{
              fontSize: 28,
              color: "#a1a1aa",
              margin: "16px 0 0",
              fontWeight: 700,
            }}
          >
            Building at the intersection of Web2 and Web3
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "24px",
            }}
          >
            {["Preplo", "Inkray", "CoinFever", "CoinDrip"].map((name) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  padding: "6px 16px",
                  borderRadius: "8px",
                  border: "1px solid #27272a",
                  fontSize: 16,
                  color: "#71717a",
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Outfit",
          data: outfitBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
