import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export const ContactInfo = () => (
  <div>
    <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
    <p className="text-muted-foreground mb-8">
      I'm open to freelance and full-time opportunities.
    </p>

    <div className="space-y-4 mb-8">
      <InfoItem icon={Mail} label="Email" value="ranel.dahil@example.com" />
      <InfoItem icon={MapPin} label="Location" value="Philippines" />
    </div>

    <div className="flex gap-3">
      <Social href="https://github.com/Ranel4142001" Icon={Github} />
      <Social href="https://www.linkedin.com/in/ranel-dahil-594b44293/" Icon={Linkedin} />
    </div>
  </div>
);

const InfoItem = ({ icon: Icon, label, value }: any) => (
  <div className="flex items-center gap-4 p-4 rounded-xl border">
    <Icon className="w-5 h-5 text-primary" />
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

const Social = ({ href, Icon }: any) => (
  <a href={href} target="_blank" rel="noreferrer" className="p-3 rounded-lg border">
    <Icon className="w-5 h-5" />
  </a>
);
