import styles from "./style";
import { Navbar, Hero, Stats, About, Projects, Testimonials, CTA, Footer }  from "./components";
import { projects } from "./constants";



const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <About /> 
        <Projects projects={projects}/>
        <Testimonials />

        {/* <Services />  */}
        <CTA /> 
        <Footer />  
      </div>
    </div>
    
    </div>
);
export default App;
