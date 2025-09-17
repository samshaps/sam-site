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
          
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground mb-8">
            <p>
              I love building products that reduce friction in peoples' lives.
            </p>
            
            <p>
              I'm currently on the product team at{" "}
              <a 
                href="https://vimeo.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-colors duration-200"
              >
                Vimeo
              </a>, where I'm helping developers build with Vimeo.
            </p>
            
            <p>
              From Aug-19 to Feb-20, I took six months off of working to fulfill a lifelong dream of extended solo travel. You can read dispatches from my trip{" "}
              <a 
                href="#" 
                className="text-primary hover:underline transition-colors duration-200"
              >
                here
              </a>. I also self-published a coffee table book about it.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:hi@samshap.com"
              className="modern-button text-center"
            >
              HIRE ME
            </a>
            <a 
              href="/highlights"
              className="modern-button-outline text-center"
            >
              VIEW WORK
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