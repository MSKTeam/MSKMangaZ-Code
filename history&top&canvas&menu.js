// Canvas
const ImageManager = (function () {
  const getModifiedSrc = (imgTag) => {
    const srcRegex = /src=(["'])(.*?)\1/;
    const match = imgTag.match(srcRegex);
    if (match) {
      let src = match[2];
      src = src.replace(/s1600/, "s1600-rw");
      src = src.replace(/s1600-rw\/.*/, "s1600-rw/MSKTeam.webp");
      const domains = ['i0.wp.com', 'i1.wp.com', 'i2.wp.com', 'i3.wp.com'];
      const randomDomain = domains[Math.floor(Math.random() * domains.length)];
      const modifiedSrc = src.replace(/https?:\/\//, `https://${randomDomain}/`);
      return modifiedSrc;
    }
    return null;
  };

  const loadNextImage = (imgTags) => {
    const imgTagsArray = imgTags.match(/<img[^>]+>/g);
    const totalImages = imgTagsArray.length;
    let loadedImages = 0;
    const canvases = [];
    const canvasContainer = document.getElementById("canvas-chapter");

    const loadNext = () => {
      if (loadedImages >= totalImages) {
        return;
      }

      const imgTag = imgTagsArray[loadedImages];
      const src = getModifiedSrc(imgTag);

      if (src) {
        const image = new Image();
        const canvasWrapper = document.createElement("div");
        canvasWrapper.className = "canvas-wrapper";

        const canvas = document.createElement("canvas");
        canvases.push(canvas);
        canvasWrapper.appendChild(canvas);
        canvasContainer.appendChild(canvasWrapper);

        image.onload = function () {
          canvas.width = image.width;
          canvas.height = image.height;
          const ctx = canvas.getContext("2d");
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";
          ctx.drawImage(image, 0, 0);

          canvasWrapper.style.maxWidth = `${image.width}px`;
          canvasWrapper.style.maxHeight = `${image.height}px`;
        };
        image.src = src;
      }

      loadedImages++;
      setTimeout(loadNext, 800);
    };

    loadNext();
  };

  return {
    loadImages: function (imgTags) {
      loadNextImage(imgTags);
    },
  };
})();
// Lịch sử
const limitHistory=100,histories=function(){function i(i,t,e){this.id=i,this.title=t,this.link=e}function t(){localStorage.setItem("History",JSON.stringify(list))}return list=[],null!=localStorage.getItem("History")&&(list=JSON.parse(localStorage.getItem("History"))),(obj={}).addHistory=function(e,s,l){var n=new i(e,s,l);if(null!=list){if(same=list.find(i=>i.id==e),list.length<100){if(same)for(let o in list)list[o].id===e&&list.splice(list.length,0,list.splice(o,1)[0]),t();else list.push(n),t()}else if(same)for(let r in list)list[r].id===e&&list.splice(list.length,0,list.splice(r,1)[0]),t();else list.splice(0,1),list.push(n),t()}else list.push(n),t()},obj}();
// Fixed
const nPLElement=document.querySelector(".nPLFix");const initialPosition=nPLElement.getBoundingClientRect().top;function handleScroll(){const a=window.scrollY;if(a>initialPosition){nPLElement.classList.add("fixed")}else{nPLElement.classList.remove("fixed")}}window.addEventListener("scroll",handleScroll);
// Chung
function fungsiSearch(){var a=document.getElementById("Query-input");a.classList.toggle("mystyle")}function myMenu(){var a=document.getElementById("PageList1");a.classList.toggle("shwx")};
var mybutton=document.getElementById("scTop");window.onscroll=function(){scrollFunction()};function scrollFunction(){if(document.body.scrollTop>150||document.documentElement.scrollTop>150){mybutton.style.display="block"}else{mybutton.style.display="none"}}function topFunction(){document.body.scrollTop=0;document.documentElement.scrollTop=0};
