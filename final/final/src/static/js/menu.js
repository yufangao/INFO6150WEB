const menu = [
  {
    name: "Home",
    path: "/",
    hasSubItem: false
  },
  {
    name: "Sneakers Details",
    hasSubItem: true,
    children: [
      {
        name: "Air Jordan 1",
        path: "/airJordan1.html"
      },
      {
        name: "Air Jordan 11",
        path: "/airJordan11.html"
      },
      {
        name: "Air Jordan 13",
        path: "/airJordan13.html"
      },
      {
        name: "Air Jordan 5",
        path: "/airJordan5.html"
      }
    ]
  },
  {
    name: "Carousel",
    path: "/jordanCarousels.html",
    hasSubItem: false
  },
  {
    name: "About",
    path: "/about.html",
    hasSubItem: false
  }
];

export default menu;