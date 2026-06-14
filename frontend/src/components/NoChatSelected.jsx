import { MessageCircle } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <span className="absolute -bottom-1 -right-1 size-4 bg-primary rounded-full ring-4 ring-base-100" />
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">LetsChat</h2>
        <p className="text-base-content/60">
          Pick someone from the sidebar to start the conversation
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;