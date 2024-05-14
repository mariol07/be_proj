const data = {
  data: [
    {
      access_token:
        "EAAQMC9YlcS4BOzcuVyvwXNr3D79DlXAwiRP0owBGAFJZBIZByT4TCk8q2o8WDBjUCygkNLxvLOTTHrJ5b03ZB7rVwecfEb05XWZASlLI0yBWwiENYoDag34bA01grLoLjdY57q7LyiZBl8PyLcJgqNVw6NyZB4xrHFwNC8QJFUmi2DhMbRPaeB3X84KEKvbhSofQpvqYwZD",
      category: "Science & Tech",
      category_list: [
        {
          id: "673445767199285",
          name: "Science & Tech",
        },
      ],
      name: "The new page",
      id: "264108143456046",
      tasks: [
        "ADVERTISE",
        "ANALYZE",
        "CREATE_CONTENT",
        "MESSAGING",
        "MODERATE",
        "MANAGE",
      ],
    },
  ],
  paging: {
    cursors: {
      before:
        "QVFIUmRlQkh2eEFuZAGRRQnpJLThhZA0VVQ0E5TWd6dFZAqX0FGWGljMnRBREtWdUZANOWFoM3VFelJ5QkVJNC1JTTljOS0xS1JIVWdFc2JfZAEF3UXVDSTd5aDd3",
      after:
        "QVFIUmRlQkh2eEFuZAGRRQnpJLThhZA0VVQ0E5TWd6dFZAqX0FGWGljMnRBREtWdUZANOWFoM3VFelJ5QkVJNC1JTTljOS0xS1JIVWdFc2JfZAEF3UXVDSTd5aDd3",
    },
  },
};

console.log(data.data[0].id);
