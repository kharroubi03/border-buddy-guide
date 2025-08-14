import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, FileText, Shield, AlertTriangle, Heart, Plane } from "lucide-react";

// Sample countries data
const countries = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Italy", "Spain", 
  "Japan", "South Korea", "China", "India", "Brazil", "Mexico", "Argentina", "South Africa",
  "Egypt", "Morocco", "Thailand", "Singapore", "Malaysia", "Indonesia", "Philippines", "Vietnam",
  "Russia", "Turkey", "Greece", "Portugal", "Netherlands", "Belgium", "Switzerland", "Austria",
  "Sweden", "Norway", "Denmark", "Finland", "Poland", "Czech Republic", "Hungary", "Romania"
];

// Sample travel requirements data
const sampleRequirements = {
  documents: [
    { type: "Passport", requirement: "Valid for at least 6 months", status: "required" },
    { type: "Visa", requirement: "Tourist visa required", status: "required" },
    { type: "Travel Insurance", requirement: "Medical coverage minimum €30,000", status: "recommended" }
  ],
  health: [
    { type: "Vaccinations", requirement: "Yellow fever vaccination required", status: "required" },
    { type: "COVID-19", requirement: "Vaccination certificate or negative test", status: "required" },
    { type: "Health Insurance", requirement: "Valid health insurance coverage", status: "recommended" }
  ],
  customs: [
    { type: "Currency", requirement: "Declare amounts over €10,000", status: "info" },
    { type: "Alcohol", requirement: "Maximum 1L spirits, 2L wine", status: "info" },
    { type: "Tobacco", requirement: "Maximum 200 cigarettes", status: "info" }
  ],
  cultural: [
    { type: "Dress Code", requirement: "Conservative clothing in religious sites", status: "important" },
    { type: "Photography", requirement: "No photos of government buildings", status: "warning" },
    { type: "Tipping", requirement: "10-15% in restaurants is customary", status: "info" }
  ]
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "required": return "bg-destructive text-destructive-foreground";
    case "recommended": return "bg-travel-blue text-white";
    case "important": return "bg-secondary text-secondary-foreground";
    case "warning": return "bg-yellow-500 text-white";
    case "info": return "bg-muted text-muted-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

const getStatusIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "passport":
    case "visa":
    case "travel insurance":
      return <FileText className="w-4 h-4" />;
    case "vaccinations":
    case "covid-19":
    case "health insurance":
      return <Heart className="w-4 h-4" />;
    case "currency":
    case "alcohol":
    case "tobacco":
      return <Shield className="w-4 h-4" />;
    default:
      return <AlertTriangle className="w-4 h-4" />;
  }
};

export default function TravelRequirementsHub() {
  const [fromCountry, setFromCountry] = useState("");
  const [toCountry, setToCountry] = useState("");
  const [travelPurpose, setTravelPurpose] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (fromCountry && toCountry) {
      setShowResults(true);
    }
  };

  const resetSearch = () => {
    setFromCountry("");
    setToCountry("");
    setTravelPurpose("");
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-hero rounded-full shadow-travel">
              <Plane className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Global Travel Hub
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your personal border-control advisor. Get instant travel requirements, visa info, and cultural insights for any destination.
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-8 shadow-card-custom bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Plan Your Journey
            </CardTitle>
            <CardDescription>
              Select your departure and destination countries to get personalized travel requirements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">From</label>
                <Select value={fromCountry} onValueChange={setFromCountry}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select departure country" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">To</label>
                <Select value={toCountry} onValueChange={setToCountry}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select destination country" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Purpose (Optional)</label>
              <Select value={travelPurpose} onValueChange={setTravelPurpose}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Select travel purpose" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  <SelectItem value="tourism">Tourism</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="study">Study</SelectItem>
                  <SelectItem value="work">Work</SelectItem>
                  <SelectItem value="transit">Transit</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handleSearch} 
                disabled={!fromCountry || !toCountry}
                className="flex-1 bg-gradient-hero hover:opacity-90 shadow-travel"
              >
                Get Travel Requirements
              </Button>
              {showResults && (
                <Button variant="outline" onClick={resetSearch}>
                  New Search
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {showResults && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">
                Travel Requirements: {fromCountry} → {toCountry}
              </h2>
              <p className="text-muted-foreground">
                {travelPurpose && `Purpose: ${travelPurpose.charAt(0).toUpperCase() + travelPurpose.slice(1)}`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Documents */}
              <Card className="shadow-card-custom bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <FileText className="w-5 h-5" />
                    Required Documents
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {sampleRequirements.documents.map((doc, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                      {getStatusIcon(doc.type)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{doc.type}</span>
                          <Badge className={getStatusColor(doc.status)}>{doc.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{doc.requirement}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Health Requirements */}
              <Card className="shadow-card-custom bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-secondary">
                    <Heart className="w-5 h-5" />
                    Health Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {sampleRequirements.health.map((health, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                      {getStatusIcon(health.type)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{health.type}</span>
                          <Badge className={getStatusColor(health.status)}>{health.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{health.requirement}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Customs */}
              <Card className="shadow-card-custom bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-accent">
                    <Shield className="w-5 h-5" />
                    Customs & Restrictions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {sampleRequirements.customs.map((custom, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                      {getStatusIcon(custom.type)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{custom.type}</span>
                          <Badge className={getStatusColor(custom.status)}>{custom.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{custom.requirement}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Cultural Tips */}
              <Card className="shadow-card-custom bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-travel-green">
                    <AlertTriangle className="w-5 h-5" />
                    Cultural Do's & Don'ts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {sampleRequirements.cultural.map((cultural, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                      {getStatusIcon(cultural.type)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{cultural.type}</span>
                          <Badge className={getStatusColor(cultural.status)}>{cultural.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{cultural.requirement}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}