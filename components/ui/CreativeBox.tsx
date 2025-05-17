"use client";

import React, { useRef, useEffect } from "react";
import { Zap, Cloud, Shield } from "lucide-react";
import styles from "./CreativeBox.module.css";

type IconKey = "zap" | "cloud" | "shield";

interface CreativeBoxProps {
  icon: IconKey;
  title: string;
  description: string;
}

const iconMap: Record<IconKey, React.FC<React.SVGProps<SVGSVGElement>>> = {
  zap: Zap,
  cloud: Cloud,
  shield: Shield,
};

const CreativeBox: React.FC<CreativeBoxProps> = ({ icon, title, description }) => {
  const IconComponent = iconMap[icon];

  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const circle = circleRef.current;
    if (!container || !circle) return;

    const circleRadius = 25;

    function handleMouseMove(e: MouseEvent) {
      const rect = container.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      x = Math.max(circleRadius, Math.min(x, rect.width - circleRadius));
      y = Math.max(circleRadius, Math.min(y, rect.height - circleRadius));

      circle.style.transform = `translate(${x - circleRadius}px, ${y - circleRadius}px)`;
    }

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.circle} ref={circleRef} >
        <div className={styles.icon}>
            <IconComponent className="h-12 w-12 text-[#024ee672]" />
        </div>
      </div>

      <div className={styles.text}>{title}</div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default CreativeBox;
