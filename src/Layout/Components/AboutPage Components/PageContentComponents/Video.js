import React from "react";

const Video = () => {
  return (
    <div className="w-full iphone:h-[47.75rem] row-centered">
      <div className="w-full iphone:w-[61.813rem] h-[33.75rem] rounded-2xl">
        <iframe
          width="989"
          height="540"
          src="https://www.youtube.com/embed/wf4F2-9UXUo?si=h1ywCeOGVLeugTZT"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
