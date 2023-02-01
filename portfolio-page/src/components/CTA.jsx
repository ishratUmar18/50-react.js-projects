import styles from "../style";
import CTAButton from "./CTAButton";

const CTA = () => (
    <section>
      <div className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur adipisci eum. amet consectetur adipisicing elit. Pariatur adipisci eum.</p>
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <CTAButton />
      </div>
        
      </div>
    </section>
  )


export default CTA