export default function InfiniteMarquee() {
  const MARQUEE_ITEMS = [
    { icon: "fi fi-rr-trophy", text: "100% SLC Pass Rate" },
    { icon: "fi fi-rr-star", text: "Best School Award 2025" },
    { icon: "fi fi-rr-users", text: "500+ Happy Students" },
    { icon: "fi fi-rr-book-open-reader", text: "Experienced Faculty" },
    { icon: "fi fi-rr-leaf", text: "Eco-Friendly Campus" },
    { icon: "fi fi-rr-shield-check", text: "Safe & Nurturing Environment" },
  ];

  // Duplicate items for seamless scrolling
  const duplicatedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="w-full bg-primary py-4 overflow-hidden border-y border-white/10 flex">
      <div className="animate-scroll flex items-center whitespace-nowrap min-w-max">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <i className={`${item.icon} text-accent text-xl mr-3`}></i>
            <span className="text-white/90 font-medium tracking-wide">
              {item.text}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-accent ml-16 opacity-50"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
