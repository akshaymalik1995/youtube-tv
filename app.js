function getYoutubeId(url){
    let startIndex = url.indexOf("v=") + 2
    let videoID = url.substring(startIndex, startIndex + 11)
    return videoID
}

function getRandomNumber(num){
    return Math.floor(Math.random() * num)
}

function embedVideo(){
    const iframe = document.querySelector("iframe")
    const randomNum = getRandomNumber(videos.length)
    const randomVideoID = getYoutubeId(videos[randomNum]) 
    iframe.src = `https://www.youtube.com/embed/${randomVideoID}`
}



embedVideo()