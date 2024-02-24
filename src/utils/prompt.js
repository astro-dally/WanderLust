const JSON_FORMAT = JSON.stringify({
  type: "object",
  properties: {
    itinerary: {
      type: "array",
      items: [
        {
          type: "object",
          properties: {
            day: {
              type: "string",
            },
            activities: {
              type: "array",
              items: [
                {
                  type: "object",
                  properties: {
                    time: {
                      type: "string",
                    },
                    name: {
                      type: "string",
                    },
                    location: {
                      type: "string",
                    },
                    price: {
                      type: "integer",
                    },
                    duration: {
                      type: "string",
                    },
                    description: {
                      type: "string",
                    },
                  },
                  required: [
                    "time",
                    "name",
                    "location",
                    "price",
                    "duration",
                    "description",
                  ],
                },
                {
                  type: "object",
                  properties: {
                    time: {
                      type: "string",
                    },
                    name: {
                      type: "string",
                    },
                    location: {
                      type: "string",
                    },
                    price: {
                      type: "integer",
                    },
                    duration: {
                      type: "string",
                    },
                    description: {
                      type: "string",
                    },
                  },
                  required: [
                    "time",
                    "name",
                    "location",
                    "price",
                    "duration",
                    "description",
                  ],
                },
                {
                  type: "object",
                  properties: {
                    time: {
                      type: "string",
                    },
                    name: {
                      type: "string",
                    },
                    location: {
                      type: "string",
                    },
                    price: {
                      type: "integer",
                    },
                    duration: {
                      type: "string",
                    },
                    description: {
                      type: "string",
                    },
                  },
                  required: [
                    "time",
                    "name",
                    "location",
                    "price",
                    "duration",
                    "description",
                  ],
                },
                {
                  type: "object",
                  properties: {
                    time: {
                      type: "string",
                    },
                    name: {
                      type: "string",
                    },
                    location: {
                      type: "string",
                    },
                    price: {
                      type: "integer",
                    },
                    duration: {
                      type: "string",
                    },
                    description: {
                      type: "string",
                    },
                  },
                  required: [
                    "time",
                    "name",
                    "location",
                    "price",
                    "duration",
                    "description",
                  ],
                },
                {
                  type: "object",
                  properties: {
                    time: {
                      type: "string",
                    },
                    name: {
                      type: "string",
                    },
                    location: {
                      type: "string",
                    },
                    price: {
                      type: "integer",
                    },
                    duration: {
                      type: "string",
                    },
                    description: {
                      type: "string",
                    },
                  },
                  required: [
                    "time",
                    "name",
                    "location",
                    "price",
                    "duration",
                    "description",
                  ],
                },
              ],
            },
          },
          required: ["day", "activities"],
        },
        {
          type: "object",
          properties: {
            day: {
              type: "string",
            },
            activities: {
              type: "array",
              items: [
                {
                  type: "object",
                  properties: {
                    time: {
                      type: "string",
                    },
                    name: {
                      type: "string",
                    },
                    location: {
                      type: "string",
                    },
                    price: {
                      type: "null",
                    },
                    duration: {
                      type: "null",
                    },
                    description: {
                      type: "null",
                    },
                  },
                  required: [
                    "time",
                    "name",
                    "location",
                    "price",
                    "duration",
                    "description",
                  ],
                },
              ],
            },
          },
          required: ["day", "activities"],
        },
      ],
    },
  },
  required: ["itinerary"],
});

const PROMPT = `write your prompt here`

export const createTripPrompt = ({
  where_to,
  number_of_days,
  itinerary_type,
  trip_start = "",
  budget = "",
}) => {

  let prompt =
    `Strictly adhere to the mentioned JSON format` +
    `FORMAT:${JSON_FORMAT},` +
    `PLACE:${where_to}, NUMBER_OF_DAYS:${number_of_days},` +
    ` TRIP_TYPE: ${itinerary_type},` +
    ` TRIP_START: ${trip_start} and` +
    `BUDGET:${budget}.` +
    PROMPT;
  
  return prompt;
};
