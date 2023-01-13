function getYoutubeId(url){
    let startIndex = url.indexOf("v=") + 2
    let videoID = url.substring(startIndex, startIndex + 11)
    return videoID
}

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}


function embedVideo(startIndex=0 , endIndex=Object.keys(videos).length){
    const iframe = document.querySelector("iframe")
    const randomNum = getRandomNumber(startIndex, endIndex)
    const randomVideo = videos[randomNum]
    if (!randomVideo) {
        changeVideo()
    }
    const videoId = getYoutubeId(randomVideo.href) 
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`
    document.querySelector(".video-title").textContent = `${randomVideo.title}`
    
}


function changeVideo(){
    const channelChoice = document.querySelector("select").value
    if (channelChoice == ""){
        startIndex = 0
        endIndex = Object.keys(videos).length
    } else {
        startIndex = channels[channelChoice].startIndex
        endIndex = channels[channelChoice].endIndex
        
    }
    embedVideo(startIndex, endIndex)
}

let startIndex = 0
let endIndex = Object.keys(videos).length

embedVideo(startIndex, endIndex)