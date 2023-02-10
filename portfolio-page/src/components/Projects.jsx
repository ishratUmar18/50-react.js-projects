import styles, { layout } from '../style';
import Button from './Button';
import 'animate.css/animate.min.css';

const Projects = ({ projects }) => {
  if (!Array.isArray(projects) || !projects.length) return null;

  const projectsFirstRow = projects.slice(0, 2);
  const projectsSecondRow = projects.slice(2, 4);

  return (
    <>
      <section className={layout.section}>
        <h2 className={`${styles.heading2} mb-500 animate__animated animate__bounce animate__delay-2s`}>Some of my projects</h2>
        <p className={styles.paragraph}>
          Cras ultricies ligula sed magna dictum porta. Pellentesque in
          ipsum id orci porta dapibusCras ultricies ligula sed magna dictum
          porta. Pellentesque in ipsum id orci porta dapibus
        </p>
      </section>

      <section className={layout.section}>
        {projectsFirstRow.map((project, index) => (
          <div key={index} className={`${layout.sectionInfo} animate__backInLeft animate__delay-2s`}>
            <img
              src={project.image}
              alt="card"
              className="w-[100%] h-[100%] max-w-[500px]"
            />
            <h4 className={styles.heading4}>{project.heading}</h4>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              {project.description}
            </p>
            <Button styles="mt-10" />
          </div>
        ))}
      </section>

      <section className={layout.section}>
        {projectsSecondRow.map((project, index) => (
          <div key={index} className={`${layout.sectionInfo} animated fadeInRight`}>
            <img
              src={project.image}
              alt="card"
              className="w-[100%] h-[100%] max-w-[500px]"
            />
            <h4 className={styles.heading4}>{project.heading}</h4>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              {project.description}
            </p>
            <Button styles="mt-10" />
          </div>
        ))}
      </section>
    </>
  );
};

export default Projects;

