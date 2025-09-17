import Layout from "@/components/Layout";
import samProfile from "@/assets/sam-profile.jpg";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-[60vh] gap-12">
        <div className="flex-shrink-0">
          <img
            src={samProfile}
            alt="Sam's profile photo"
            className="w-64 h-64 object-cover profile-glow"
          />
        </div>
        
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-neon-cyan">
            Hi, my name is Sam.
          </h1>
          
          <div className="space-y-6 text-lg leading-relaxed text-foreground">
            <p>
              I love building products that reduce friction in peoples' lives.
            </p>
            
            <p>
              I'm currently on the product team at{" "}
              <a 
                href="https://vimeo.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neon-purple hover:text-accent transition-colors duration-300"
              >
                Vimeo
              </a>, where I'm helping developers build with Vimeo.
            </p>
            
            <p>
              From Aug-19 to Feb-20, I took six months off of working to fulfill a lifelong dream of extended solo travel. You can read dispatches from my trip{" "}
              <a 
                href="#" 
                className="text-neon-purple hover:text-accent transition-colors duration-300"
              >
                here
              </a>. I also self-published a coffee table book about it.
            </p>
            
            <p>
              Before that, I was a Senior PM for{" "}
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neon-purple hover:text-accent transition-colors duration-300"
              >
                Peek Pro
              </a>, where I helped tour and activity operators grow sales, save time, and delight their customers.
            </p>
            
            <p>
              I'm based in New York. I enjoy reading, cooking, playing the piano, and being in nature (skiing, fishing, hiking).
            </p>
            
            <p>
              If you'd like to get in touch, please{" "}
              <a 
                href="mailto:hi@samshap.com"
                className="text-neon-pink hover:text-accent transition-colors duration-300"
              >
                shoot me an email
              </a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;