export default {
  line: {
    styles: [
      {
        layout: "collapse",
        title: "标题与卡片",
        content: [
          {
            title: "标题",
            setters: [
              { setterName: "cardTitleSetter" },
              { setterName: 'cardDividerSetter' }
            ],
          },
          {
            title: "卡片",
            setters: [
              { setterName: "cardContainerBackgroundSetter" },
              { setterName: "cardContainerBorderSetter" },
            ],
          }
        ],
      }
    ],
    query: [{ queryName: "area_type" }, { queryName: "area_value" }],
    analysis: [],
  }
};
