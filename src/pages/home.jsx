import { Helmet } from "react-helmet-async";
import Banner from "../components/banner";
import FeatureItem from "../components/featureItem";
import iconChat from '../assets/icon-chat.png';
import iconMoney from '../assets/icon-money.png';
import iconSecurity from '../assets/icon-security.png';


function Home() {

  return (
    <>
    <Helmet>
      <title>Argent Bank - Home Page</title>
    </Helmet>
    <main>
      <Banner/>
      <section className="flex flex-col tablet:flex-row">
        <h2 className="sr-only">Features</h2>
        <FeatureItem icon={iconChat} altIcon="Chat Icon" title="You are our #1 priority" paragraph="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."/>
        <FeatureItem icon={iconMoney} altIcon="Money Icon" title="More savings means higher rates" paragraph="The more you save with us, the higher your interest rate will be!"/>
        <FeatureItem icon={iconSecurity} altIcon="Security Icon" title="Security you can trust" paragraph="We use top of the line encryption to make sure your data and money is always safe."/>
      </section>
    </main>
    </>

  )
}

export default Home
