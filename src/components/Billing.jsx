import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
    <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
            <div className="absolute z-[3] -left-50 bottom-100 w-[50%] h-[50%] ronded-full blue__gradient"></div>
            <div className="absolute z-[0] -left-2 top-10 w-[50%] h-[50%] ronded-full blue__gradient"></div>
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden' />billing & invoice</h2>
            <p className={`${styles.paragraph} mt-5`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure debitis voluptates alias. Neque obcaecati ducimus odio, quaerat et itaque cupiditate laborum minus culpa commodi cum, cumque dolor, placeat fugiat!</p>
            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                <img src={apple} alt="apple" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
                <img src={google} alt="google-playstore" className='w-[128px] h-[42px] object-contain cursor-pointer' />
            </div>
        </div>


    </section>
)


export default Billing