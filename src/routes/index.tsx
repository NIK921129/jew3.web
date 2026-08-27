import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

// The storefront is a plain HTML/CSS/JS app living in /public (index.html).
// Vercel serves it at "/" directly. Inside this dev preview the framework
// owns "/", so we hand the visitor straight over to the static store.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOVA — Fine Jewellery Store" },
      {
        name: "description",
        content:
          "NOVA is a full commerce storefront with cart, checkout, coupons and an admin control center.",
      },
      { property: "og:title", content: "NOVA — Fine Jewellery Store" },
      {
        property: "og:description",
        content: "Shop the NOVA collection: necklaces, rings, earrings and bracelets.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <h1 className="p-8 text-3xl font-bold">
        NOVA — Fine Jewellery Store
      </h1>
    </div>
  );
}
