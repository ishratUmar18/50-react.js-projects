import { project_01, apple, google } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const Projects = () => (
  <>
  // Project_01 and Project_02
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Some of my projects</h2>
        <img src={project_01} alt="card" className="w-[100%] h-[100%]" />
        <h4 className={styles.heading4}> Landing Page</h4>
        <p className={ `${styles.paragraph} max-w-[470px] mt-5`}>Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
        <Button styles="mt-10" /> 
      </div>
      <div className={layout.sectionInfo}>
      <p className={styles.paragraph}>Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibusCras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus</p>
        <img src={project_01} alt="card" className="w-[100%] h-[100%]" />
        <h4 className={styles.heading4}> Landing Page</h4>
        <p className={ `${styles.paragraph} max-w-[470px] mt-5`}>Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
        <Button styles="mt-10" /> 
      </div>
     
    </section>
    // Project_03 and Project_04
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Some of my projects</h2>
        <img src={project_01} alt="card" className="w-[100%] h-[100%]" />
        <h4 className={styles.heading4}> Landing Page</h4>
        <p className={ `${styles.paragraph} max-w-[470px] mt-5`}>Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
        <Button styles="mt-10" /> 
      </div>
      <div className={layout.sectionInfo}>
      <p className={styles.paragraph}>Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibusCras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus</p>
        <img src={project_01} alt="card" className="w-[100%] h-[100%]" />
        <h4 className={styles.heading4}> Landing Page</h4>
        <p className={ `${styles.paragraph} max-w-[470px] mt-5`}>Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
        <Button styles="mt-10" /> 
      </div>
     
    </section>

{/* // Project_02
<section id="product" className={ layout.sectionReverse }>
      <div className={layout.sectionImgReverse}>
        <img src={project_01} alt="about" className="w-[100%] relative z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h4 className={styles.heading4}> Passionate Developer</h4>
        <p className={ `${styles.paragraph} max-w-[470px] mt-5`}> Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button styles="mt-10" /> 
        </div>
      </div>
    </section>

    // Project_03
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h4 className={styles.heading4}> Landing Page</h4>
        <p className={ `${styles.paragraph} max-w-[470px] mt-5`}>Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
        <Button styles="mt-10" /> 
      </div>
      <div className={layout.sectionImg}>
        <img src={project_01} alt="card" className="w-[100%] h-[100%]" />

      </div>
     
    </section>

    // Project_04
    <section id="product" className={ layout.sectionReverse }>
      <div className={layout.sectionImgReverse}>
        <img src={project_01} alt="about" className="w-[100%] relative z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h4 className={styles.heading4}> Passionate Developer</h4>
        <p className={ `${styles.paragraph} max-w-[470px] mt-5`}> Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button styles="mt-10" /> 
        </div>
      </div>
    </section> */}
    </>
  )

export default Projects