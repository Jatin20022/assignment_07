import React from 'react';

function Home() {
  const imageStyle = {
    width: '100%',   // Full width of the container
    height: 'auto',  // Keeps the aspect ratio
    objectFit: 'cover', // Ensure the image covers the area
};
  return (
    <div>
      <div style={{ width: '100%', overflow: 'hidden',marginTop: '10px' }}>
            <img
                src="https://innomatics.in/wp-content/uploads/2023/01/Artboard-3.jpg"
                alt="banner"
                style={imageStyle}
            />
        </div>
      <h1>We just don’t train,
      We transform the careers</h1>
      <p>Innomatics Research Labs is a pioneer in “Transforming Careers and Lives” of individuals in the Digital Space by catering advanced training on NASSCOM Future skills prime Certified Data Science, Python, Predictive Analytics Modeler, Machine Learning, Artificial Intelligence (AI), Full-stack web development, Amazon Web Services (AWS), DevOps, Microsoft Azure, Big data Analytics, Digital Marketing, and Career Launching program for students who are willing to showcase their skills in the competitive job market with valuable credentials, and also can complete courses with a certificate.</p>
      <h1>NASSCOM Futureskills Prime Registered Business Partner</h1>
      <p>As an authorized “Training Partner with NASSCOM Futureskills Prime,” we strive to make individuals learn not just algorithms but also case studies and challenges derived from businesses. To improve the effectiveness and productivity of our trainee hackathons, workshops, and meetups are conducted on a timely basis. Having a dedicated placement vertical, which helps trainees conquer the business world, solves the complexities. Innomatics research labs are supporting over 100 companies in finding the best candidate, which can upskill the business requirements and foster growth.</p>
      <h1>Best Edtech company</h1>
      <p>Recognized and rewarded by Times Of India as the Best Training Institute in Hyderabad for Data Science & Digital Marketing Training. With relentless hard work, sophisticated equipment, advanced classrooms, cutting-edge training methodologies, practical training approach, and making individuals skillful. We have trained and placed 10000 students with a track record of 350+ batches, 200+ Hackathons, 150+ Industry Experts, 500+ Webinars, and 500+ Hiring Partners.</p>
      <button style={{color:'white', backgroundColor:'red', padding: '10px', border: 'none'}}>View More</button>
    </div>
  );
}

const styles = {
  button: {
    backgroundColor: '#6A5ACD',
    color: '#fff',
    padding: '10px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
  }
};

export default Home;
