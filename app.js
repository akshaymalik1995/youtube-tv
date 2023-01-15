let videos = {}
let channelChoice = "ted-ed"

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
    const videoId = getYoutubeId(randomVideo.href) 
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`
    document.querySelector(".video-title").textContent = `${randomVideo.title}`
    
}

function changeChannel() {
    channelChoice = document.querySelector("select").value
    fetch(`https://akshaymalik1995.github.io/youtube-tv/js/${channelChoice}.json`)
    .then(response => response.json())
    .then(data => {
        videos = data
        let startIndex = 0
        let endIndex = Object.keys(videos).length
        embedVideo(startIndex, endIndex)
    })
    .catch(error => console.log(error))
}


function changeVideo(){
    startIndex = 0
    endIndex = Object.keys(videos).length
    embedVideo(startIndex, endIndex)
}



changeChannel()





