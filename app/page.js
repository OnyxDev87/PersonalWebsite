import Image from 'next/image';

function Project(name, description, image, link) {
  const project = {
    name,
    description,
    image,
    link
  }
  return (
    <div className="project">
      <h3 classname="project-name">{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <Image
        src={project.image}
        alt={`${project.name} image`}
        width={300}
        height={200}
        className="project-image"
      />
      <a href={project.link} className="project-link">
        View Project
      </a>
    </div>
  );
}

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
        {Project(
          "HackKnight",
          "A game where you hack your way through a series of challenges.",
          "/hackknight.png",
          "https://github.com/OnyxDev87/HackKnight"
        )}
        {Project(
          "Particle Stuff",
          "A collection of particle simulations.",
          "/particle-stuff.png",
          "https://github.com/OnyxDev87/ParticleStuff"
        )}
      </div>
    </div>
  );
}

// https://github.com/OnyxDev87/HackKnight
// https://https://github.com/OnyxDev87/ParticleStuff