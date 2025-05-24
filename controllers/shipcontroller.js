const shipDetails = (req, res) => {
  const shipName = req.params.name.toLowerCase();

  const data = [
    {
      id: "1",
      name: "Titan Voyager",
      type: "Cargo Ship",
      origin: "Panama",
      tonnage: "150,000 DWT",
      range: "15,000 nautical miles",
      imageUrl: "https://i.pinimg.com/736x/18/46/21/184621ad643dcef9893fc10f9cc6e036.jpg",
    },
    {
      id: "2",
      name: "Neptune Explorer",
      type: "Research Vessel",
      origin: "Norway",
      tonnage: "12,000 GT",
      range: "10,000 nautical miles",
      imageUrl: "https://i.pinimg.com/736x/8c/de/fa/8cdefab22653cb97141e23f33bbd8fe9.jpg",
    },
    {
      id: "3",
      name: "Ocean Empress",
      type: "Cruise Ship",
      origin: "Bahamas",
      tonnage: "100,000 GT",
      range: "8,000 nautical miles",
      imageUrl:
        "https://www.shutterstock.com/image-photo/aerial-view-large-industrial-container-600nw-2509185793.jpg",
    },
    {
      id: "4",
      name: "Arctic Sentinel",
      type: "Icebreaker",
      origin: "Russia",
      tonnage: "20,000 GT",
      range: "6,000 nautical miles",
      imageUrl:
        "https://c4.wallpaperflare.com/wallpaper/492/988/54/ship-container-ship-maersk-line-wallpaper-preview.jpg",
    },
    {
      id: "5",
      name: "Poseidon Arrow",
      type: "Container Ship",
      origin: "Singapore",
      tonnage: "200,000 DWT",
      range: "18,000 nautical miles",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661963559074-9655a9404f1a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGFpbmVyJTIwc2hpcHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "6",
      name: "Atlantic Pride",
      type: "Oil Tanker",
      origin: "Greece",
      tonnage: "300,000 DWT",
      range: "16,500 nautical miles",
      imageUrl:
        "https://png.pngtree.com/background/20250126/original/pngtree-large-cargo-ship-fully-loaded-with-freight-picture-image_16071366.jpg",
    },
    {
      id: "7",
      name: "Coral Queen",
      type: "Cruise Ship",
      origin: "USA",
      tonnage: "110,000 GT",
      range: "7,500 nautical miles",
      imageUrl: "https://thumbs.dreamstime.com/b/container-ship-14590658.jpg",
    },
    {
      id: "8",
      name: "Pacific Storm",
      type: "Naval Destroyer",
      origin: "UK",
      tonnage: "9,000 tons",
      range: "6,800 nautical miles",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj2GAS9GDVkZpYrXivs2UTWdAxl8ZOkAxybw&s",
    },
    {
      id: "9",
      name: "Sea Monarch",
      type: "Luxury Yacht",
      origin: "Italy",
      tonnage: "4,500 GT",
      range: "4,000 nautical miles",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/027/169/303/small/generative-ai-container-ship-in-import-export-and-business-logistic-aerial-view-water-transport-cargo-shipping-in-open-sea-photo.jpg",
    },
    {
      id: "10",
      name: "Leviathan Spirit",
      type: "Fishing Trawler",
      origin: "Japan",
      tonnage: "2,200 GT",
      range: "2,500 nautical miles",
      imageUrl:
        "https://www.shutterstock.com/image-photo/cargo-container-ship-vessel-carrying-600nw-2341638353.jpg",
    },
  ];

  if (!shipName || shipName === "all") {
    return res.status(200).json(data);
  }

  const results = data.filter((item) => item.name.toLowerCase().includes(shipName));

  if (results.length === 0) {
    return res.status(404).json({ message: "Ship not found" });
  }
  return res.status(200).json(results);
};

module.exports = shipDetails;
