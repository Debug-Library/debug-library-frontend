import { useEffect, useState } from "react";

export function useVisibleCards(): number {
  const [visible, setVisible] = useState<number>(5);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setVisible(1); // mobile
      else if (window.innerWidth < 768) setVisible(2); // sm
      else if (window.innerWidth < 1024) setVisible(3); // md
      else if (window.innerWidth < 1280) setVisible(4); // lg
      else setVisible(5); // xl+
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return visible;
} 