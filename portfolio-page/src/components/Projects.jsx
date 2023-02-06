import { project_01, apple, google } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const Projects = () => (
  <>
  <section className={layout.section}>
    <h2 className={`${styles.heading2} mb-500`}>Some of my projects</h2>
        <p className={styles.paragraph}>Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibusCras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus</p>
        </section>
  // Project_01 and Project_02
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <img src={project_01} alt="card" className="w-[80%] h-[80%]" />
        <h4 className={styles.heading4}> Landing Page</h4>
        <p className={ `${styles.paragraph} max-w-[470px] mt-5`}>Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
        <Button styles="mt-10" /> 
      </div>
      <div className={layout.sectionInfo}>
        <img src={project_01} alt="card" className="w-[80%] h-[80%]" />
        <h4 className={styles.heading4}> Landing Page</h4>
        <p className={ `${styles.paragraph} max-w-[470px] mt-5`}>Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
        <Button styles="mt-10" /> 
      </div>
     
    </section>
    // Project_03 and Project_04
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <img src={project_01} alt="card" className="w-[100%] h-[100%]" />
        <h4 className={styles.heading4}> Landing Page</h4>
        <p className={ `${styles.paragraph} max-w-[470px] mt-5`}>Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
        <Button styles="mt-10" /> 
      </div>
      <div className={layout.sectionInfo}>
              <img src={project_01} alt="card" className="w-[100%] h-[100%]" />
        <h4 className={styles.heading4}> Landing Page</h4>
        <p className={ `${styles.paragraph} max-w-[470px] mt-5`}>Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
        <Button styles="mt-10" /> 
      </div>
     
    </section>
    </>
  )

export default Projects