import Layout from "@/components/Layout";
import samHeadshot from "@/assets/sam-headshot.jpg";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-[70vh] gap-16">
        {/* Content - Left side */}
        <div className="max-w-2xl text-left flex-1 order-2 lg:order-1">
          <div className="mb-8">
            <h1 className="heading-xl mb-6 text-primary">
              Hi, I'm Sam.
            </h1>
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground mb-8 readable">
            <p>
              I love building useful tools for people.
            </p>
            
            <p>
              I currently lead Ecosystem @ Vimeo. Our team empowers developers to infuse the power of video into their products and launch{" "}
              <a 
                href="https://vimeo.com/integrations" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-colors duration-200"
              >
                value-adding integrations
              </a>{" "}
              with Vimeo. I've also worked on tools to{" "}
              <a 
                href="https://vimeo.com/1024186484" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-colors duration-200"
              >
                help marketers maximize video ROI
              </a>{" "}
              
               and owned our suite of live products.
            </p>
            
            <p>
              From Aug-19 to Feb-20, I took six months off of working to fulfill a lifelong dream of extended solo travel. You can read dispatches from my trip{" "}
              <a 
                href="https://medium.com/shappy-travels" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-colors duration-200"
              >
                here
              </a>. I also{" "}
              <a 
                href="https://www.blurb.com/bookstore/invited/8668003/7623ed4eaa663480c4ac57b87de759a8c1ad5884" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-colors duration-200"
              >
                self-published a coffee table book
              </a>{" "}
              about it.
            </p>

            <p>
              Before that, I helped scale{" "}
              <a 
                href="https://www.peekpro.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-colors duration-200"
              >
                Peek Pro
              </a>{" "}
              and was a management consultant at PwC.
            </p>

            <p>
              If you'd like to get in touch, go ahead and book some time!
            </p>
          </div>

          <div className="flex justify-start">
            <a 
              href="https://calendly.com/hisamshap/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button text-center"
            >
              LET'S CHAT
            </a>
          </div>
        </div>

        {/* Profile Image - Right side */}
        <div className="flex-shrink-0 relative order-1 lg:order-2">
          <img
            src={samHeadshot}
            alt="Sam's profile photo"
            className="max-w-80 lg:max-w-96 object-contain"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;