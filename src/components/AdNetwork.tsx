import { useState, useEffect } from "react";

interface AdNetworkProps {
  network: string;
  onComplete: () => void;
}

export const AdNetwork = ({ network, onComplete }: AdNetworkProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate ad network loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(onComplete, 1000); // Complete after showing ad for 1 second
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const adNetworkStyles = {
    "Cuty.io": {
      bg: "bg-gradient-to-r from-blue-500 to-cyan-500",
      logo: "💎"
    },
    "AdFly": {
      bg: "bg-gradient-to-r from-green-500 to-emerald-500", 
      logo: "🚀"
    },
    "ShrinkMe": {
      bg: "bg-gradient-to-r from-purple-500 to-pink-500",
      logo: "⚡"
    }
  };

  const style = adNetworkStyles[network as keyof typeof adNetworkStyles] || adNetworkStyles["Cuty.io"];

  return (
    <div className="relative w-full h-40 rounded-lg overflow-hidden">
      {!isLoaded ? (
        <div className="w-full h-full bg-muted/50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
            <p className="text-sm text-muted-foreground">Loading {network} advertisement...</p>
          </div>
        </div>
      ) : (
        <div className={`w-full h-full ${style.bg} flex items-center justify-center text-white relative`}>
          <div className="text-center">
            <div className="text-4xl mb-2">{style.logo}</div>
            <h3 className="text-xl font-bold">{network}</h3>
            <p className="text-sm opacity-90">Premium Ad Network</p>
          </div>
          
          {/* Fake ad content */}
          <div className="absolute top-2 left-2 bg-black/20 px-2 py-1 rounded text-xs">
            AD
          </div>
          <div className="absolute bottom-2 right-2 bg-black/20 px-2 py-1 rounded text-xs">
            {network}
          </div>
        </div>
      )}
    </div>
  );
};