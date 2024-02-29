import React from 'react';
import './style/Demo.css'; // Make sure to create and update this CSS file accordingly

const videoIDs = [
    'r7vJl9I9tFI', // Replace with your YouTube video IDs
    'IGtHqNQzNrU',
    'zUQMTGcp9ag',
    'fourth_video_id',
];

const Demo = () => {
    return (
        <div className="videos-container">
            {videoIDs.map((id, index) => (
                <div key={index} className="video-item">
                    <iframe
                        className="video"
                        src={`https://www.youtube.com/embed/${id}?controls=1`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            ))}
        </div>
    );
};

export default Demo;
