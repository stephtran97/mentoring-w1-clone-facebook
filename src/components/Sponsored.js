import Advertisement from "./Sponsored/Advertisement";

const adsData = [
  {
    adsTitle: "COME AND JOIN US!",
    adsUrl: "shopee.vn",
    adsImageSource: "./media/user-ads/ads1.webp",
  },
  {
    adsTitle: "COME AND JOIN US NOW!",
    adsUrl: "shopee.vn",
    adsImageSource: "./media/user-ads/ads1.webp",
  },
];

export default function Sponsored() {
  return (
    <section
      id="sponsored"
      className="border-1 border-bottom border-secondary pb-2 mb-2"
    >
      <h6 className="section-title">Sponsored</h6>
      <div className="d-flex flex-column">
        {adsData.map((element) => {
          return (
            <Advertisement
              key={crypto.randomUUID()}
              adsTitle={element.adsTitle}
              adsUrl={element.adsUrl}
              adsImageSource={element.adsImageSource}
            ></Advertisement>
          );
        })}
      </div>
    </section>
  );
}
