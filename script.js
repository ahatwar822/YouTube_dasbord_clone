// creating sidebar


let menu = document.querySelector("#nav_right h1");
let aside = document.querySelector("aside");
let sidebar = document.querySelector("#sidebar_main");

let hover_sidebar = document.querySelector(".sidebar");

let main = document.querySelector("main");

let toggle = 1;

menu.addEventListener("click", function () {

    if (toggle == 1) {
        hover_sidebar.style.display = "flex";
        aside.style.minWidth = "20%";
        main.style. marginLeft = "20%";
        sidebar.style.display = "none";
        toggle = 0;
    } else {
        hover_sidebar.style.display = "none";
        aside.style.minWidth = "0%";
        main.style. marginLeft = "80px";
        sidebar.style.display = "flex";
        toggle = 1;
    }

});

main.addEventListener("click", function () {
    hover_sidebar.style.display = "none";
    aside.style.minWidth = "0%";
    main.style. marginLeft = "80px";
    sidebar.style.display = "flex";
    toggle = 1;
});

const cardsData = [
  {
    title: "Top Rehman music mix",
    channel: "Rehman",
    views: "1.3M views",
    time: "2 days ago",
    thumbnail: "https://i.ytimg.com/vi/Y_dGio-KbT4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBHwQgPxm45FqQ90d5y94QjlLs4lw",
    profile: "https://wallpaperaccess.com/full/3565949.jpg"
  },
  {
    title: "Top 10 Coding Tips",
    channel: "CodeWithDev",
    views: "850K views",
    time: "1 week ago",
    thumbnail: "https://i.ytimg.com/vi/ekQLGA2xHgk/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBbY02xWIj2H7qIgi6q-dYI0SWBzA",
    profile: "https://media2.dev.to/dynamic/image/width=256,height=,fit=scale-down,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8j7kvp660rqzt99zui8e.png"
  },
  {
    title: "Learn JavaScript in 10 Minutes",
    channel: "JS Mastery",
    views: "500K views",
    time: "3 days ago",
    thumbnail: "https://i.ytimg.com/vi/l7o9rwHzVdQ/hq720.jpg?sqp=-…BACGAY4AUAB&rs=AOn4CLAOXyX4LccVo604rEn77ysRG-hCaw",
    profile: "https://consumersiteimages.trustpilot.net/business-units/62a2e5cc59087f602917613c-198x149-1x.jpg"
  },
  {
    title: "AI Tools 2025",
    channel: "TechZone",
    views: "2M views",
    time: "5 hours ago",
    thumbnail: "https://i.ytimg.com/vi/_-UO1FXYY94/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDcul3LJFeE76sC6P4EjuYNi3mc9w",
    profile: "https://tse4.mm.bing.net/th/id/OIP.QExKa5vN97Fy3xkHdEeDDgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    title: "Avatar: The Last Airbender",
    channel: "Avatar",
    views: "1.3M views",
    time: "2 days ago",
    thumbnail: "https://i.ytimg.com/vi/nb_fFj_0rq8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCjPOqNNcZ_CCNIPO0KpuUl1O1Duw",
    profile: "https://tse1.mm.bing.net/th/id/OIP.nzQ1rEh5yjJDvDRFF1SwjwHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    title: "Top Rehman music mix",
    channel: "Rehman",
    views: "1.3M views",
    time: "2 days ago",
    thumbnail: "https://i.ytimg.com/vi/Y_dGio-KbT4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBHwQgPxm45FqQ90d5y94QjlLs4lw",
    profile: "https://wallpaperaccess.com/full/3565949.jpg"
  },
  {
    title: "Top 10 Coding Tips",
    channel: "CodeWithDev",
    views: "850K views",
    time: "1 week ago",
    thumbnail: "https://i.ytimg.com/vi/ekQLGA2xHgk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBbY02xWIj2H7qIgi6q-dYI0SWBzA",
    profile: "https://media.istockphoto.com/vectors/portrait-of-happy-man-wearing-thick-spectacles-and-looking-at-camera-vector-id1044731590?k=20&m=1044731590&s=612x612&w=0&h=LflLsCvfrIgDMn4AzgHiivGQE7j0hXZR1TsPUmUeuAA="
  }

];

// ✅ Render cards dynamically
function renderCards(filter = "") {
  const content = document.getElementById("content");
  content.innerHTML = "";

  cardsData
    .filter(card =>
      card.title.toLowerCase().includes(filter.toLowerCase())
    )
    .forEach(card => {
      content.innerHTML += `
        <div class="card">
          <div class="c_top" style="background-image:url('${card.thumbnail}');"></div>
          <div class="c_bottom">
            <div class="btm_left" style="background-image:url('${card.profile}');"></div>
            <div class="btm_right">
              <div class="right_top">
                <h1>${card.title}</h1>
                <i class="ri-play-fill"></i>
              </div>
              <div class="right_bottom">
                <p>${card.channel}</p>
                <p>${card.views} • ${card.time}</p>
              </div>
            </div>
          </div>
        </div>
      `;
    });
}

// ✅ Initial render
renderCards();

// ✅ Search functionality
document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value;
  renderCards(query);
});