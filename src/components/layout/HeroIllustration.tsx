export function HeroIllustration() {
  return (
    <div className="relative w-full md:w-[600px]">
      {/* <img
        src="https://assets.log2base2.com/Assets/homePage/HomePageBannerNew.svg"
        alt="Programming visualization"
        className="w-full h-auto"
      /> */}

      <div className="homepage-banner-video-container">
        <div className="embed-responsive embed-responsive-16by9 homepage-banner-video">
          <object
            className="no-pointers"
            data="https://assets.log2base2.com/Assets/homePage/HomePageBannerNew.svg"
          >
            Banner image
          </object>
        </div>
      </div>
    </div>
  );
}
