import { project_01 } from '../assets';
import styles, { layout } from '../style';
// import Button from './Button';

const Projects = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Some of my projects</h2>
        <h4 className={styles.heading4}> Landing Page</h4>
        <p className={ `${styles.paragraph} max-w-[470px] mt-5`}>Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
        {/* <Button styles="mt-10" />  */}
      </div>
      <div className={layout.sectionImg}>
        <img src={project_01} alt="card" className="w-[100%] h-[100%]" />

      </div>
     
    </section>
  )

export default Projects