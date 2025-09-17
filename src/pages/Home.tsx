import Layout from "@/components/Layout";
import samProfile from "@/assets/sam-profile.jpg";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-[70vh] gap-16">
        {/* Content - Left side */}
        <div className="max-w-2xl text-left flex-1 order-2 lg:order-1">
          <div className="mb-8">
            <div className="text-lg text-muted-foreground mb-4">
              Hello, I'm Sam,
              <br />
              a UI/UX
            </div>
            <h1 className="heading-xl mb-6">
              <span className="text-accent">Designer.</span>
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
          <div className="relative">
            {/* Decorative dots */}
            <div className="dots-pattern absolute -top-4 -right-4 w-24 h-24"></div>
            
            <img
              src={samProfile}
              alt="Sam's profile photo"
              className="w-80 h-80 lg:w-96 lg:h-96 object-cover profile-modern"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;