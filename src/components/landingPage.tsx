import "../styles/global.scss";
import FrontPage from "./LandingPage/FrontPage";

export default function LandingPage() {
    const videoUrl = "https://video.wixstatic.com/video/ab9538_3a5dfb2a6d0948148c4095401660d4dd/1080p/mp4/file.mp4";
    return (
        <div className="position-relative width-100 min-height-100 overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="image-overlay position-absolute m-r-10 min-width-100 min-height-100 img-fit-cover p-0 "
            >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag. I cannot play.
            </video>
            <div className="d-flex flex-column position-relative z-index-1 w-100 min-height-100">
                <FrontPage />
            </div>
        </div>
    )
}