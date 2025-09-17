import Layout from "@/components/Layout";
import samProfile from "@/assets/sam-profile.jpg";

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          <div className="flex-shrink-0">
            <img
              src={samProfile}
              alt="Sam's profile photo"
              className="w-48 h-48 object-cover profile-glow"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold mb-6 text-neon-cyan">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground">
              A deeper look into my background, experiences, and what drives me.
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          <section className="bg-card/50 backdrop-blur-lg rounded-xl p-8 neon-border">
            <h2 className="text-2xl font-semibold mb-4 text-neon-purple">Professional Background</h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                I love building products that reduce friction in peoples' lives. Currently, I'm on the product team at Vimeo, where I'm helping developers build with Vimeo's powerful video infrastructure and APIs.
              </p>
              <p>
                Before joining Vimeo, I was a Senior Product Manager for Peek Pro, where I helped tour and activity operators grow sales, save time, and delight their customers. This role taught me the importance of understanding user workflows and building tools that truly solve real-world problems.
              </p>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-lg rounded-xl p-8 neon-border">
            <h2 className="text-2xl font-semibold mb-4 text-neon-purple">Personal Journey</h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                From August 2019 to February 2020, I took six months off from work to fulfill a lifelong dream of extended solo travel. This experience was transformative, allowing me to explore different cultures, challenge my comfort zone, and gain new perspectives on life and work.
              </p>
              <p>
                I documented this journey through regular dispatches and eventually self-published a coffee table book capturing the visual stories and experiences from my travels. This project combined my love for storytelling with my appreciation for beautiful design and meaningful content.
              </p>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-lg rounded-xl p-8 neon-border">
            <h2 className="text-2xl font-semibold mb-4 text-neon-purple">Life in New York</h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                I'm based in New York, where I enjoy the perfect balance of urban energy and access to nature. The city provides endless opportunities for cultural experiences, while still being close enough to mountains for skiing and lakes for fishing.
              </p>
              <p>
                When I'm not working on products, you'll find me reading everything from fiction to product strategy books, experimenting in the kitchen with new recipes, or practicing piano. I'm particularly drawn to activities that require patience and continuous improvement – whether that's perfecting a piece of music or finding the perfect hiking trail.
              </p>
            </div>
          </section>

          <section className="bg-card/50 backdrop-blur-lg rounded-xl p-8 neon-border">
            <h2 className="text-2xl font-semibold mb-4 text-neon-purple">Philosophy & Approach</h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                I believe in building products with empathy and attention to detail. Every friction point removed, every interaction made smoother, every workflow optimized – these small improvements compound to create meaningful impact in people's lives.
              </p>
              <p>
                Whether I'm working on developer tools at Vimeo or planning my next outdoor adventure, I approach challenges with curiosity, systematic thinking, and a focus on outcomes that matter.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;