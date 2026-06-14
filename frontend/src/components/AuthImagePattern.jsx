import { MessageCircle, Mail, Phone, Video, Send, Bell, Users} from "lucide-react";

const OrbitIcon = ({ icon: Icon, className = "", delay = "0s" }) => {
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 flex size-12 items-center justify-center rounded-full bg-base-100 border border-base-300 shadow-sm ${className}`}
      style={{ animationDelay: delay }}
    >
      <Icon className="size-5 text-primary" />
    </div>
  );
};

const OrbitRing = ({ sizeClass, spinClass, iconA, iconB, iconDelayA, iconDelayB, ringClass }) => {
  return (
    <div className={`absolute ${sizeClass} ${ringClass}`}>
      {/* Ring outline */}
      <div className="absolute inset-0 rounded-full border border-primary/10" />

      {/* Rotating orbit */}
      <div className={`absolute inset-0 ${spinClass}`}>
        <OrbitIcon icon={iconA} className="top-0 -translate-y-1/2" delay={iconDelayA} />
        <OrbitIcon icon={iconB} className="bottom-0 translate-y-1/2" delay={iconDelayB} />
      </div>
    </div>
  );
};

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="relative w-full aspect-square mb-8 flex items-center justify-center overflow-visible">
          {/* Outer rings */}
          <div className="absolute inset-0 rounded-full border border-primary/10" />
          <div className="absolute inset-8 rounded-full border border-primary/10" />
          <div className="absolute inset-16 rounded-full border border-primary/10" />

          {/* Orbit rings with 2 icons each */}
          <OrbitRing
            sizeClass="inset-0"
            spinClass="animate-[spin_18s_linear_infinite]"
            iconA={Mail}
            iconB={Phone}
            iconDelayA="0s"
            iconDelayB="0.2s"
          />

          <OrbitRing
            sizeClass="inset-8"
            spinClass="animate-[spin_14s_linear_infinite_reverse]"
            iconA={Video}
            iconB={Send}
            iconDelayA="0.4s"
            iconDelayB="0.6s"
            ringClass="opacity-90"
          />

          <OrbitRing
            sizeClass="inset-16"
            spinClass="animate-[spin_22s_linear_infinite]"
            iconA={Bell}
            iconB={Users}
            iconDelayA="0.8s"
            iconDelayB="1s"
            ringClass="opacity-80"
          />

          {/* Center icon */}
          <div className="relative z-20 size-20 rounded-full bg-primary flex items-center justify-center shadow-sm">
            <MessageCircle className="size-10 text-primary-content" />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;