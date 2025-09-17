import Layout from "@/components/Layout";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-fredoka mb-6 text-rainbow">
          Get in Touch
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12">
          I'd love to hear from you. Whether you want to discuss product ideas, share travel stories, or just say hello.
        </p>

        <div className="bg-card backdrop-blur-lg rounded-lg p-12 bevel-border">
          <div className="flex flex-col items-center gap-8">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center glow-pink">
              <Mail className="w-10 h-10 text-90s-pink" />
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-90s-lime">
                Let's Connect
              </h2>
              <p className="text-foreground mb-6">
                Feel free to reach out via email for any questions, collaborations, or just to chat.
              </p>
              
              <a
                href="mailto:hi@samshap.com"
                className="inline-flex items-center gap-3 geocities-button hover-glow-blue text-lg px-8 py-4"
              >
                <Mail className="w-5 h-5" />
                hi@samshap.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            You can also find me on{" "}
            <a
              href="https://linkedin.com/in/samshap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-90s-lime hover:text-90s-blue transition-colors duration-300"
            >
              LinkedIn
            </a>{" "}
            where I occasionally share thoughts on product management and travel.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;