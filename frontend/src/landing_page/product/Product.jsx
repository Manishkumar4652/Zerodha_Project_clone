import Hero from "./Hero"
import LeftSection from './LeftSection';
import LeftSecondSection from './LeftSecondSection';
import LeftThirdSection from './LeftThirdSection';
import RightSection from './RightSection';
import RightSecondSection from './RightSecondSection';
import Universe from './Universe';

export default function Product(){
    return(
        <div>
            <Hero />
            <LeftSection />
            <RightSection />
            <LeftSecondSection />
            <RightSecondSection />
            <LeftThirdSection />
            <Universe />
        </div>
    )
}