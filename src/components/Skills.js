import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import Lottie from 'react-lottie';
import ReactNativeimg from '../assets/img/animation_llqj9j5w.json'
import C_Cpp from '../assets/img/animation_llqjbcw7.json'
import colorSharp from "../assets/img/color-sharp.png"
import Nodejsimg from '../assets/img/animation_llqjc9xk.json'
import HCjsimg from '../assets/img/animation_llqjdn5d.json'
import PyImg from '../assets/img/animation_llqje87l.json'
import Wordimg from '../assets/img/animation_llqjezgx.json'
import pybg from '../assets/img/animation_llqjfxbh.json'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

 
  const ReactImgOption = {
    loop: true,
    autoplay: true, 
    animationData: ReactNativeimg,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  const CppImgOption = {
    loop: true,
    autoplay: true, 
    animationData: C_Cpp,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  const NodeImgOption= {
    loop: true,
    autoplay: true, 
    animationData: Nodejsimg,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const HCJImgOption= {
    loop: true,
    autoplay: true, 
    animationData: HCjsimg,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  const PYImgOption= {
    loop: true,
    autoplay: true, 
    animationData: PyImg,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };




  const WordImgOption= {
    loop: true,
    autoplay: true, 
    animationData: Wordimg,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };



  const PYBgImgOption= {
    loop: true,
    autoplay: true, 
    animationData: pybg,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };






  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider"> */}
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                            <div className="item">
                              <Lottie
                              options={ReactImgOption}
                              width={170}
                              height={170}
                              />
                                <h5>React Native</h5>
                            </div>
                            <div className="item">
                              <Lottie
                              options={ReactImgOption}
                              width={170}
                              height={170}
                              />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                              <Lottie
                              options={CppImgOption}
                              width={160}
                              height={160}
                              />
                              <h5>C / Cpp</h5>
                            </div>
                            <div className="item">
                              <Lottie
                              options={NodeImgOption}
                              width={160}
                              height={160}
                              />
                                <h5>Node JS</h5>
                            </div>
                            </div>
                            <div style={{display:'flex',justifyContent:'space-between',marginTop:40}}>
                            <div className="item">
                              <Lottie
                              options={HCJImgOption}
                              width={160}
                              height={160}
                              />
                                <h5>HTML / CSS / JS</h5>
                            </div>
                            <div className="item">
                              <Lottie
                              options={PYImgOption}
                              width={160}
                              height={160}
                              />
                                <h5>Firebase</h5>
                            </div>
                            <div className="item">
                              <Lottie
                              options={WordImgOption}
                              width={160}
                              height={160}
                              />
                                <h5>Wordpress</h5>
                            </div>
                            <div className="item">
                              <Lottie
                              options={PYBgImgOption}
                              width={160}
                              height={160}
                              />
                                <h5>Python</h5>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
