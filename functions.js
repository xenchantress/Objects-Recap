/**
 * REFERENCES
 *
 * Array Iteration Methods: https://www.w3schools.com/JS/js_array_iteration.asp
 * String Methods: https://www.w3schools.com/Jsref/jsref_includes.asp
 */

const channels = require("./channels.json");
console.log(channels[0].name);

/**************************************************************
 * getChannelName(channel)
 * - receives a channel object
 * - returns the name of the channel
 ****************************************************************/
function getChannelName(channel) {
  if (channel && channel.name){
    return channel.name;
  
  }
  //console.log(channel);
}

 console.log(getChannelName(channels[0]));

/**************************************************************
 * numberOfVideos(channel)
 * - receives a channel object
 * - returns the number of videos that channel has
 ****************************************************************/
function numberOfVideos(channel) {
  if (channel && channel.videos && Array.isArray(channel.videos)){
    return channel.videos.length;
  }else {
    return 0;
  }
  // Your code here
}
 console.log(numberOfVideos(channels[0]))

/**************************************************************
 * channelHasVideo(videoTitle, channel):
 * - receives a video title (string)
 * - receives a channel object
 * - returns true if the channel object has a video that matches the given video title
 * - returns false otherwise
 *
 * BONUS: use iteration method `.some()`
 ****************************************************************/
function channelHasVideo(videoTitle, channel) {
  if (channel && channel.videos && Array.isArray(channel.videos)){
    return channel.videos.some(video => video.title === videoTitle);
  } else{
    return false;
  }
  // Your code here
  
}
 console.log(channelHasVideo("The Universal S", channels[0]));
 console.log(channelHasVideo("The Universal S", channels[1]));

/**************************************************************
 * getChannelByName(channelName, channels):
 * - receives a channel name (string)
 * - receives an array of channel objects
 * - returns the channel object with the same name as the channelName provided
 *
 * BONUS: use iteration method `.find()`
 ****************************************************************/
function getChannelByName(channelName, channels) {
  return channels.find ((x) => x.name === channelName)
  // Your code here
}
console.log(getChannelByName("PowerfulJRE", channels))

/**************************************************************
 * getChannelByVideoTitle(videoTitle, channels):
 * - receives a video title (string)
 * - receives an array of channel objects
 * - returns the channel object that contains a video with the video title provided
 *
 * BONUS: use iteration methods `.find()` and `.some()`
 ****************************************************************/
function getChannelByVideoTitle(videoTitle, channels) {
  return channels.find((x) => x.videos.)
  // Your code here
}
 console.log(getChannelByVideoTitle("The Universal S", channels));

/**************************************************************
 * searchChannels(query, channels):
 * - receives a query (string)
 * - recieves an array of channel objects
 * - returns an array of the channel objects that contain the query in their name/description.
 *
 * Hint: use string method `.includes()` and iteration method `.filter()`
 ****************************************************************/
function searchChannels(query, channels) {
  if ( Array.isArray(channels)){
    return channels.filter(channel => channel && ( channel.name && channel.name.includes(query)))
  }
  // Your code here
}
 console.log(searchChannels("the", channels))

module.exports = {
  getChannelName,
  numberOfVideos,
  channelHasVideo,
  getChannelByName,
  getChannelByVideoTitle,
  searchChannels,
};
