const galleryImages = [
  {
    src: "https://i.ibb.co/wNrsJKzK/park-cleaning.png",
    title: "Park Cleaning",
  },
  {
    src: "https://i.ibb.co/NgHKwV59/river-bank-clean.png",
    title: "River Bank Clean-Up",
  },
  {
    src: "https://i.ibb.co/CKwZZHDL/sanitation.png",
    title: "Sanitation Awareness",
  },
  {
    src: "https://i.ibb.co/SDg4ykk9/street-clean.png",
    title: "Street Cleaning Drive",
  },
  {
    src: "https://i.ibb.co/B2p9CVMJ/tree-plantation.png",
    title: "Tree Plantation",
  },
  {
    src: "https://i.ibb.co/q3ysrRVG/waste-cleaning.png",
    title: "Waste Management",
  },
  {
    src: "https://i.ibb.co/YFL6Qmj2/youth-skill.png",
    title: "Youth Skill Program",
  },
  {
    src: "https://i.ibb.co/0Rd5w3rc/ascholl-renovation.png",
    title: "School Renovation",
  },
  {
    src: "https://i.ibb.co/jZfMKD2d/beach-cleaning.png",
    title: "Beach Cleaning",
  },
  {
    src: "https://i.ibb.co/5WZbmszR/blood-donation.png",
    title: "Blood Donation Camp",
  },
  {
    src: "https://i.ibb.co/Xv3y8Wx/community-distribution.png",
    title: "Community Distribution",
  },
  {
    src: "https://i.ibb.co/Jjk4Zg27/flood.png",
    title: "Flood Relief Campaign",
  },
  {
    src: "https://i.ibb.co/G4Qf1Mcj/food-distribution.png",
    title: "Food Distribution",
  },
  {
    src: "https://i.ibb.co/3ys7rYpd/old-cloth-distribute.png",
    title: "Old Cloth Distribution",
  },
  {
    src: "https://i.ibb.co/fz0yCvx1/park-beautification.png",
    title: "Park Beautification",
  },
];

const Gallery = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">
        Event Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-primary"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            {/* <div className="text-center py-2 text-sm font-medium text-white">
              {img.title}
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
