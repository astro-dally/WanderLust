/* eslint-disable react/jsx-key */
export const TicketDetails = [
  {
    ticketNumber: 1,
    headerText: "I want to travel to...",
    inputPlaceholder: "ex. Bangkok",
    inputType: "text",
    CTAButton: "Next",
  },
  {
    ticketNumber: 2,
    headerText: "For the duration of",
    inputPlaceholder: "ex. 6",
    inputType: "number",
    CTAButton: "Next",
  },
  {
    ticketNumber: 3,
    headerText: "Starting on",
    inputType: "date",
    CTAButton: "Next",
  },
  {
    ticketNumber: 4,
    headerText: "The trip should be",
    inputType: "options",
    options: [
      {
        id: 1,
        value: "Adventure",
      },
      {
        id: 2,
        value: "Solo travel",
      },
      {
        id: 3,
        value: "Couple friendly",
      },
      {
        id: 4,
        value: "Road Trip",
      },
      {
        id: 5,
        value: "Family friendly",
      },
      {
        id: 6,
        value: "Relaxation",
      },
      {
        id: 7,
        value: "Partying",
      },
      {
        id: 8,
        value: "City Experiences",
      },
      {
        id: 9,
        value: "Pet friendly",
      },
      {
        id: 10,
        value: "Foodie",
      },
      {
        id: 11,
        value: "Nature",
      },
      {
        id: 12,
        value: "Low budget",
      },
      {
        id: 13,
        value: "Luxury",
      },
    ],
    bodySize: "large",
    CTAButton: "Next",
  },
  {
    ticketNumber: 5,
    headerText: "and my budget is",
    inputPlaceholder: "ex. Bangkok",
    inputType: "options",
    options: [
      {
        id: 1,
        value: "Low",
      },
      {
        id: 2,
        value: "Medium",
      },
      {
        id: 3,
        value: "High",
      },
    ],
    bodySize: "medium",
    CTAButton: "Plan my trip",
  },
];
