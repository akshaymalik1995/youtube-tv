
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
  

function getYoutubeId(url){
    let startIndex = url.indexOf("v=") + 2
    let videoID = url.substring(startIndex, startIndex + 11)
    return videoID
}


function getRandomNumber(min=0, max=Object.keys(VIDEOS).length){
    return Math.floor(Math.random() * (max - min) + min)
}


function embedVideo(firstFetch){
    const iframe = document.querySelector("iframe")
    let randomNum
    if (firstFetch){
        randomNum = localStorage.getItem("currentRandomNum") || getRandomNumber()
    } else {
        randomNum = getRandomNumber()
    }
    const randomVideo = VIDEOS[randomNum]
    const videoId = getYoutubeId(randomVideo.href) 
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`
    document.querySelector(".video-title").textContent = `${randomVideo.title}`
    localStorage.setItem("currentRandomNum" , randomNum)
    
}

async function fetchVideos(currentChannelChoice=null, firstFetch=false) {
    document.querySelector(".loading-text").style.display = 'block'
    channelChoice = currentChannelChoice || document.querySelector("select").value
    const response = await fetch(`https://akshaymalik1995.github.io/youtube-tv/data/${channelChoice}.json`)
    VIDEOS = await response.json()
    document.querySelector(".loading-text").style.display = 'none'
    embedVideo(firstFetch)
    localStorage.setItem("currentChannelChoice" , channelChoice)
    }
    
let VIDEOS = {}
let channelChoice = localStorage.getItem("currentChannelChoice") || "ted-ed"
document.querySelector("select").value = channelChoice
fetchVideos(channelChoice, firstFetch=true)





