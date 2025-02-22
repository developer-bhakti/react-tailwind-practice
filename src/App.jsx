// import React from 'react'

import Card from "./componet/Card";

const App = () => {
  const data = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Learn the latest web development technologies, including React, Angular, and Vue.",
      image: "https://source.unsplash.com/400x300/?technology",
      link: "https://example.com/web-development",
    },
    {
      id: 2,
      title: "Cloud Computing",
      description: "Explore cloud computing with AWS, Azure, and Google Cloud.",
      image: "https://source.unsplash.com/400x300/?cloud",
      link: "https://example.com/cloud-computing",
    },
    {
      id: 3,
      title: "Cybersecurity",
      description:
        "Stay updated with the latest trends in cybersecurity and ethical hacking.",
      image: "https://source.unsplash.com/400x300/?security",
      link: "https://example.com/cybersecurity",
    },
    {
      id: 4,
      title: "Data Science",
      description:
        "Learn data science techniques, including machine learning and AI.",
      image: "https://source.unsplash.com/400x300/?data",
      link: "https://example.com/data-science",
    },
  ];
  return (
    <>
    {/* ye jo argument ke under data hai isko tu kuch value de sakihai like it cand be anythig for example value data bahkti  etc */}
      {data.map((data, index) => {
        return <Card key={index} title={data.title} description={data.description} imgUrl={data.image}/>;
      })}
    </>
  );
};

export default App;
