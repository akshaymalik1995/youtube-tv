

// This functions accepts a youtube url and return the id of the video
function getYoutubeId(url){
    // https://www.youtube.com/watch?v=Fh_UDQnboRw
    // We find the index of the string "v=" and add 2 to it because from "v=" onwards the next 11 characters consist of the video id
    let startIndex = url.indexOf("v=") + 2
    // We get the substring starting from the startIndex adding 11 to it because the last character is excluded
    let videoID = url.substring(startIndex, startIndex + 11)
    // We will get Fh_UDQnboRw
    return videoID
}

// This function accepts two numbers and it returns a random integer between those two integers 
function getRandomNumber(min=0, max=Object.keys(VIDEOS).length){
    return Math.floor(Math.random() * (max - min) + min)
}


function embedVideo(){
    const iframe = document.querySelector("iframe")
    const randomNum = getRandomNumber()
    const randomVideo = VIDEOS[randomNum]
    const videoId = getYoutubeId(randomVideo.href) 
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`
    document.querySelector(".video-title").textContent = `${randomVideo.title}`
    
}

function fetchVideos(currentChannelChoice=null) {
    document.querySelector(".loading-text").style.display = 'block'
    channelChoice = currentChannelChoice || document.querySelector("select").value
    fetch(`https://akshaymalik1995.github.io/youtube-tv/data/${channelChoice}.json`)
    .then(response => response.json())
    .then(videos => {
        document.querySelector(".loading-text").style.display = 'none'
        VIDEOS = videos
        embedVideo()
        localStorage.setItem("currentChannelChoice" , channelChoice)
    })
    .catch(error => console.log(error))
}


function changeVideo(){
    embedVideo()
}


let VIDEOS = {}
let channelChoice = localStorage.getItem("currentChannelChoice") || "ted-ed"
document.querySelector("select").value = channelChoice
fetchVideos(channelChoice)





