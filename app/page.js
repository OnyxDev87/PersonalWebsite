import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="header">
        <h1 className="title">Miles Wilander</h1>
      </div>
      <br />
      <div className="content">
        <p className="description">
          I'm Miles, a teenage programmer who has little to no idea what they're doing. I have been coding for upwards of six years, 
          and I have create a lot of different projects. I have built physics simulations in HTML canvas, a softbody simulation with 
          PyGame, and much more. I know Python, HTML JS and CSS, and Java. I am currently learning C. I have a passion for programming
          , and I love to learn new things. I am always looking for new projects to work on, so if you have any ideas, feel free to 
          contact me! I also love to read, and do karate.
        </p>
      </div>
      <div className="image-container">
        <Image 
          src="/thing.png" 
          alt="A relevant alt text" 
          width={700} 
          height={300}
          className="image"
        />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="projects">
        <h2 className="projects-title">Projects</h2>
        <ul className="projects-list">
          <li className="project-item">
            <a href="https://github.com/OnyxDev87/HackKnight">Machine Learning</a>
          </li>
          <li className="project-item">
            <a href="https://https://github.com/OnyxDev87/ParticleStuff">SoftBody Simulation</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
