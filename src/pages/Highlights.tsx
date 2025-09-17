import Layout from "@/components/Layout";
import { ExternalLink } from "lucide-react";

interface Highlight {
  id: number;
  title: string;
  description: string;
  link: string;
  type: "project" | "media";
  videoUrl?: string;
}

const highlights: Highlight[] = [
  {
    id: 1,
    title: "Travel Dispatches",
    description: "A collection of stories and insights from my six-month solo travel journey, documenting experiences across different cultures and landscapes.",
    link: "#",
    type: "media",
  },
  {
    id: 2,
    title: "Solo Travel Coffee Table Book",
    description: "A self-published photography and story collection capturing the visual narrative of extended solo travel through diverse countries and experiences.",
    link: "#",
    type: "project",
  },
  {
    id: 3,
    title: "Vimeo Developer Platform",
    description: "Leading product initiatives to help developers build powerful video experiences with Vimeo's API and infrastructure tools.",
    link: "https://developer.vimeo.com",
    type: "project",
  },
  {
    id: 4,
    title: "Peek Pro Product Strategy",
    description: "Developed features and workflows that helped tour and activity operators streamline their operations and enhance customer experiences.",
    link: "#",
    type: "project",
  },
  {
    id: 5,
    title: "Product Management Insights",
    description: "Thoughts on building user-centered products, reducing friction, and creating meaningful impact through thoughtful design and strategy.",
    link: "#",
    type: "media",
  },
  {
    id: 6,
    title: "NYC Urban Exploration",
    description: "Discovering hidden gems, local favorites, and unique experiences throughout New York City's diverse neighborhoods.",
    link: "#",
    type: "media",
  },
];

const Highlights = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="heading-lg mb-4">
            Works
          </h1>
          <p className="text-xl text-muted-foreground">
            A collection of projects, writings, and experiences that showcase my work and interests.
          </p>
        </div>

        <div className="grid gap-6">
          {highlights.map((highlight) => (
            <article
              key={highlight.id}
              className="modern-card p-8 group hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h2>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    highlight.type === 'project' 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-secondary/20 text-secondary-foreground'
                  }`}>
                    {highlight.type === 'project' ? 'Project' : 'Media'}
                  </span>
                </div>
                
                {highlight.link !== "#" && (
                  <a
                    href={highlight.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                    aria-label={`External link to ${highlight.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              
              <p className="text-foreground leading-relaxed">
                {highlight.description}
              </p>
              
              {highlight.videoUrl && (
                <div className="mt-6">
                  <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center border border-border">
                    <p className="text-muted-foreground">Video player would be embedded here</p>
                  </div>
                </div>
              )}
              
              {highlight.link !== "#" && (
                <div className="mt-6">
                  <a
                    href={highlight.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 modern-button"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Highlights;