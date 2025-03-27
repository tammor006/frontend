export default function TeamSection() {
    const teamMembers = [
      {
        name: "MR. MUZAMMIL NAVIWALA",
        position: "General Manager",
        image: "/images/Team1.jpg", // Replace with actual image path
      },
      {
        name: "MR. FARAZ NASEEM",
        position: "Head of Marketing",
        image: "/images/Team2.jpg", // Replace with actual image path
      },
      {
        name: "MR. TALHA AQEEL",
        position: "Director",
        image: "/images/Team3.jpg", // Replace with actual image path
      },
      {
        name: "MR. Ali Usman",
        position: "CF0",
        image: "/images/Team3.jpg", // Replace with actual image path
      },
    ];
  
    return (
      <section className="team-section">
         <div className="headline-item text-center my-5">
        <h3>
        Our<span className="head-red"> Team</span>
        </h3>
      </div>
  
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-box">
              <img src={member.image} alt={member.name} className="team-image" />
              <h3 className="team-position">{member.position}</h3>
              <p className="team-name">{member.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }