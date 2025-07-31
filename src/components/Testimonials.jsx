"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "../lib/utils";

export default function Testimonials() {
  return (
    <div className="mt-10">
        <div><h1 className="text-2xl md:text-5xl font-bold flex items-center justify-center"> Testimonials </h1></div>
      <div className="h-[40rem] flex items-center justify-center w-full">
        <CardStack items={CARDS} />
      </div>
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
    {
        id: 0,
        name: "Manu Arora",
        designation: "Senior Software Engineer",
        content: (
          <p>
            These features are insane — <Highlight>I want to integrate Finan Smart</Highlight> into my daily routine.
            Budgeting + smart AI? It's like VS Code but for my money. 🔥
          </p>
        ),
      },
      {
        id: 1,
        name: "Daniela Rocketman",
        designation: "Chief Officer",
        content: (
          <p>
            I was tracking my spending manually until Finan Smart said{" "}
            <Highlight>"let me handle that"</Highlight>. Honestly, it’s smarter than some of my rockets. 🚀
          </p>
        ),
      },
      {
        id: 2,
        name: "Tyler Durden",
        designation: "Manager",
        content: (
          <p>
            The first rule of <Highlight>financial freedom</Highlight> is get on a budget.
            The second rule is <Highlight>use Finan Smart</Highlight> and let AI do the heavy lifting.
          </p>
        ),
      },
      {
        id: 3,
        name: "Marie Kondo",
        designation: "Consultant",
        content: (
          <p>
            This app <Highlight>sparks joy in my bank account</Highlight>. I cleaned out my unnecessary subscriptions
            and now my finances look as clean as my closet. 💸🧼
          </p>
        ),
      },
      {
        id: 4,
        name: "Tony Stark",
        designation: "Philanthropist",
        content: (
          <p>
            AI told me to manage my spending — he said,{" "}
            <Highlight>"Why not just use Finan Smart?"</Highlight> Honestly, I couldn’t build it better myself. 🧠💼
          </p>
        ),
      },
];
