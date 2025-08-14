import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Lovable Project</h1>
          <p className="text-xl text-muted-foreground">Discover the powerful features at your fingertips</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>🎨 Refine & Customize</CardTitle>
              <CardDescription>
                Tweak the design, animations, and layouts via prompts or visual edits.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Use Visual Edits to select elements directly on the page and make instant changes to text, colors, fonts, or use prompts for complex adjustments.
              </p>
              <Button variant="outline" size="sm">
                Try Visual Edits
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>💬 Master Prompting</CardTitle>
              <CardDescription>
                Use "chat mode" to plan out your project without making edits.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Use clear, detailed, and iterative prompts for best results. Break down complex features into smaller, manageable steps.
              </p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🔄 GitHub Sync</CardTitle>
              <CardDescription>
                Transfer your project's code to GitHub for two-way sync of edits.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Connect your GitHub account to automatically sync changes between Lovable and your repository in real-time.
              </p>
              <Button variant="outline" size="sm">
                Connect GitHub
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🗄️ Supabase Integration</CardTitle>
              <CardDescription>
                Need to save information, add user accounts, or connect with other services?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Supabase is a simple way to add these features without complex technical setup. Get authentication, databases, and APIs instantly.
              </p>
              <Button variant="outline" size="sm">
                Connect Supabase
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg">
            Start Building Your App
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
