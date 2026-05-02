export type PipelineNode = {
  label: string;
  description: string;
};

export type Pipeline = {
  id: string;
  /** Plain-language name a visitor would use for this kind of project. */
  kind: string;
  /** Flow caption — input on the left, output on the right. */
  label: string;
  nodes: readonly PipelineNode[];
};

// Spec: context/features/pipeline-section-copy.md.
// No tech stack labels in any visible string — those live on case study pages.
export const PIPELINES: readonly Pipeline[] = [
  {
    id: "message",
    kind: "Chatbot",
    label: "Message → Customer",
    nodes: [
      {
        label: "Message in",
        description: "A customer sends you a WhatsApp message.",
      },
      {
        label: "AI replies",
        description: "An AI agent replies and answers their questions.",
      },
      {
        label: "Chat saved",
        description: "The chat is saved automatically so nothing gets lost.",
      },
      {
        label: "Right team",
        description: "The right team member is notified to take over.",
      },
      {
        label: "Customer",
        description: "You follow up with a customer who's ready to buy.",
      },
    ],
  },
  {
    id: "idea",
    kind: "Website",
    label: "Idea → Website",
    nodes: [
      {
        label: "Your idea",
        description: "You tell us what you want the website to do.",
      },
      {
        label: "Design",
        description: "We design how it looks and feels.",
      },
      {
        label: "Build",
        description: "We build it to be fast and easy to update.",
      },
      {
        label: "Launch",
        description: "We put it online so anyone can visit.",
      },
      {
        label: "Live",
        description: "Google finds it and customers start coming in.",
      },
    ],
  },
  {
    id: "data",
    kind: "Daily report",
    label: "Data → Report",
    nodes: [
      {
        label: "Source",
        description:
          "We point the tool at the website or system you need data from.",
      },
      {
        label: "Collected",
        description: "It pulls the data automatically, every day.",
      },
      {
        label: "Stored",
        description: "The data is stored and organised so it stays clean.",
      },
      {
        label: "Cleaned",
        description: "We turn the raw numbers into something easy to read.",
      },
      {
        label: "Daily report",
        description: "A simple summary lands on your phone every morning.",
      },
    ],
  },
] as const;
