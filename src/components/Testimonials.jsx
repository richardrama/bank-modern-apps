import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h1 className={`${styles.heading2} text-right mr-10`}>What people are <br className='sm:block hidden' /> saying about us</h1>
            <div className='w-full md:mt-0 mt-6'>
                <p className={`${styles.paragraph} text-left max-w-[470px]`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quod impedit nam laborum voluptatem cum quibusdam sint cumque sequi aliquam, velit voluptate, accusantium laudantium expedita amet! Est veniam velit delectus? </p>
            </div>
        </div>

        <div className='flex flex-wrap justify-center w-full feedback-container relative z-[1]'>
            {feedback.map((card) => (
                <FeedbackCard key={card.id} {...card} />
            ))}
        </div>
    </section>
)


export default Testimonials