import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "Adobe_Photoshop",
    "Docker",
    "Express",
    "Figma",
    "Git",
    "JavaScript",
    "Material UI",
    "MongoDB",
    "MySQL",
    "PostgresSQL",
    "Socket.io",
    "Three.js",
    "Tailwind_CSS",
    "Adobe_XD",
    "Next.js",
    "PyTorch",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.png`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.png`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
