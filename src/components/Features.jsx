import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../components/ui/draggable-card";

export default function Features() {
  const items = [
    {
      title: "Budgets",
      image:
        "/dashboard.png",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Expenses",
      image:
        "/dashboard.png",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Incomes",
      image:
        "/dashboard.png",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "AI Smart Assitant",
      image:
        "/dashboard.png",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Spending Control",
      image:
        "/dashboard.png",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
  ];
  return (
    <div className="mt-5">
        <div>
            <h1 className="flex items-center justify-center text-2xl md:text-5xl font-bold mb-5">Features</h1>
        </div>
        <div>
        <DraggableCardContainer
      className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p
        className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Here are Some Cool Features.
      </p>
      {items.map((item, index) => (
        <DraggableCardBody key={index} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover" />
          <h3
            className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
        </div>
    </div>
  );
}
