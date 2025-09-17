import Layout from "@/components/Layout";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-neon-cyan">
          Get in Touch
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12">
          I'd love to hear from you. Whether you want to discuss product ideas, share travel stories, or just say hello.
        </p>

        <div className="bg-card/50 backdrop-blur-lg rounded-xl p-12 neon-border">
          <div className="flex flex-col items-center gap-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center glow-cyan">
              <Mail className="w-10 h-10 text-primary" />
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4 text-neon-purple">
                Let's Connect
              </h2>
              <p className="text-foreground mb-6">
                Feel free to reach out via email for any questions, collaborations, or just to chat.
              </p>
              
              <a
                href="mailto:hi@samshap.com"
                className="inline-flex items-center gap-3 retro-button hover-glow-pink text-lg px-8 py-4"
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
              className="text-neon-purple hover:text-accent transition-colors duration-300"
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