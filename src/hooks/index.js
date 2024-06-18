import React, { useState, useRef, useEffect } from "react";
const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      const el = ref?.current;
      if (!el || el.contains(event?.target || null)) {
        return;
      }

      handler(event); // Call the handler only if the click is outside of the element passed.
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Reload only if ref or handler changes
};

export default useOnClickOutside;
export const handleKeyDown = (event) => {
  if (
    !(
      /[0-9]/.test(event.key) ||
      event.key === "Backspace" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown"
    )
  ) {
    event.preventDefault();
  }
};

export const Counter = ({ start, end, durationTime }) => {
  const [count, setCount] = useState(start);
  const prevEndRef = useRef(end);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const prevEnd = prevEndRef.current;
          if (prevEnd !== end) {
            prevEndRef.current = end;
            const diff = Math.abs(end - count);
            const duration = 1000;
            const increment = Math.ceil(diff / (duration / 10));
            let currentCount = count;
            const interval = setInterval(() => {
              if (currentCount < end) {
                currentCount += increment;
                if (currentCount >= end) {
                  clearInterval(interval);
                  setCount(end);
                } else {
                  setCount(currentCount);
                }
              } else if (currentCount > end) {
                currentCount -= increment;
                if (currentCount <= end) {
                  clearInterval(interval);
                  setCount(end);
                } else {
                  setCount(currentCount);
                }
              } else {
                clearInterval(interval);
              }
            }, durationTime);
            return () => clearInterval(interval);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, count, durationTime]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};
