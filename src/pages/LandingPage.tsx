
import { Link } from "react-router-dom";
import { Heart, Users, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FeatureSection } from "@/components/landing/FeatureSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary via-primary/80 to-accent/90 text-primary-foreground">
        {/* Nav */}
        <nav className="container py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Heart className="h-6 w-6 mr-2" />
            <span className="text-2xl font-bold">DateVibe</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link to="/search" className="text-primary-foreground/90 hover:text-white">
              Browse
            </Link>
            <Link to="/edit-profile" className="text-primary-foreground/90 hover:text-white">
              Create Profile
            </Link>
            <Link to="/" className="text-primary-foreground/90 hover:text-white">
              Features
            </Link>
            <Button asChild variant="secondary">
              <Link to="/">Sign In</Link>
            </Button>
          </div>
        </nav>

        {/* Hero content */}
        <div className="container py-20 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            MAKE THE PERFECT CONNECTION
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            It's better when connections are genuine
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary">
              Create Account
            </Button>
            <Button size="lg" asChild variant="outline" className="border-white text-white hover:text-primary hover:bg-white">
              <Link to="/">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature highlight section */}
      <FeatureSection
        title="FIND YOUR PERFECT MATCH"
        description="You deserve better, so we've designed great ways for you to make connections and find love."
        image="/lovable-uploads/78dcdc76-143f-4763-87b1-e33c4df8ad29.png"
        imageAlt="Happy couple"
        bgColor="bg-accent"
        textColor="text-accent-foreground"
      >
        <Button className="group">
          See what's new <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </FeatureSection>

      {/* Multi-features section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            WE'RE NOT JUST FOR DATING
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Heart />}
              title="Meet someone special"
              description="Discover new connections, talk to people who share your interests, and find your perfect match."
            />
            <FeatureCard 
              icon={<Users />}
              title="Find new friends"
              description="Expand your social circle. Meet new people, join meetups, and build meaningful connections."
            />
            <FeatureCard 
              icon={<Globe />}
              title="Build your network"
              description="Connect with professionals in your field to find mentors, partners or career opportunities."
            />
          </div>
        </div>
      </section>

      {/* CTA section */}
      <FeatureSection
        title="MAKE THE FIRST MOVE™"
        description="We're the only app that encourages users to get to know each other more deeply, creating connections that lead to meaningful relationships."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=3570&ixlib=rb-4.0.3"
        imageAlt="Happy user"
        bgColor="bg-primary"
        textColor="text-primary-foreground"
        reversed={true}
        imageRatio={4/5}
      >
        <Button variant="secondary">
          About DateVibe
        </Button>
      </FeatureSection>

      {/* Success stories */}
      <section className="bg-accent text-accent-foreground py-20">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            IF IT WORKED FOR THEM,<br className="hidden md:block" />
            IT COULD WORK FOR YOU
          </h2>
          <div className="max-w-4xl mx-auto bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              <div>
                <AspectRatio ratio={1/1} className="h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=3570&ixlib=rb-4.0.3"
                    alt="Success story" 
                    className="object-cover h-full w-full"
                  />
                </AspectRatio>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Sarah & Michael Found Love</h3>
                <p className="mb-4">
                  "After months of searching, we finally found each other on DateVibe. Our first date was magical, and now we're planning our future together."
                </p>
                <p className="text-sm text-muted-foreground">
                  Sarah & Michael met on DateVibe in 2022 and got engaged last month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-muted py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Ready to find your match?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Join Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Heart className="h-5 w-5 mr-2" />
              <span className="font-bold text-lg">DateVibe</span>
            </div>
            <div className="flex gap-8">
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Help
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            © 2025 DateVibe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature card component
const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default LandingPage;
