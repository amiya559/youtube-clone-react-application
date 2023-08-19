import React from "react";

const VideoCard = ({ videoInfo }) => {
  //console.log(videoInfo);
  const { snippet, statistics } = videoInfo;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

// Higher Order Component
export const AdVideoCard = ({ videoInfo }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard videoInfo={videoInfo} />
    </div>
  );
};

export default VideoCard;
