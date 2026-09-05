import React, { useState, useRef, useEffect, ReactElement } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../context/ThemeContext";

export interface TooltipProps {
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number; // milliseconds before showing, default 1500ms
  children: ReactElement;
  id?: string;
}

export function Tooltip({
  content,
  position = "top",
  delay = 1500,
  children,
  id,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState<{
    x: number;
    y: number;
    actualPosition: "top" | "bottom" | "left" | "right";
  } | null>(null);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const { isDark } = useTheme();

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const hide = () => {
    clearTimer();
    setVisible(false);
  };

  const calculatePosition = () => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return;

    let actualPosition = position;
    // Auto-flip if near the viewport boundary
    if (position === "top" && rect.top < 48) {
      actualPosition = "bottom";
    } else if (position === "bottom" && window.innerHeight - rect.bottom < 48) {
      actualPosition = "top";
    }

    let x = rect.left + rect.width / 2;
    let y = rect.top;

    if (actualPosition === "top") {
      y = rect.top - 8;
    } else if (actualPosition === "bottom") {
      y = rect.bottom + 8;
    } else if (actualPosition === "left") {
      x = rect.left - 8;
      y = rect.top + rect.height / 2;
    } else if (actualPosition === "right") {
      x = rect.right + 8;
      y = rect.top + rect.height / 2;
    }

    // Clamp horizontal coordinate to stay comfortably inside viewport
    const clampedX = Math.max(20, Math.min(window.innerWidth - 20, x));

    setCoords({ x: clampedX, y, actualPosition });
  };

  const show = () => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      calculatePosition();
      setVisible(true);
    }, delay);
  };

  // Dismiss on window scroll, resize, or key press (like Escape)
  useEffect(() => {
    const handleDismiss = () => {
      hide();
    };

    if (visible) {
      window.addEventListener("scroll", handleDismiss, { passive: true });
      window.addEventListener("resize", handleDismiss, { passive: true });
      window.addEventListener("keydown", handleDismiss);
    }

    return () => {
      window.removeEventListener("scroll", handleDismiss);
      window.removeEventListener("resize", handleDismiss);
      window.removeEventListener("keydown", handleDismiss);
    };
  }, [visible]);

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  // Merge child ref with our triggerRef
  const handleRef = (node: HTMLElement | null) => {
    triggerRef.current = node;
    const childRef = (children as unknown as { ref?: React.Ref<HTMLElement> })?.ref;
    if (typeof childRef === "function") {
      childRef(node);
    } else if (childRef && typeof childRef === "object" && "current" in childRef) {
      (childRef as React.MutableRefObject<HTMLElement | null>).current = node;
    }
  };

  const childProps = children.props as Record<string, unknown>;

  const clonedChild = React.cloneElement(children, {
    ref: handleRef,
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      if (typeof childProps.onMouseEnter === "function") {
        childProps.onMouseEnter(e);
      }
      show();
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      if (typeof childProps.onMouseLeave === "function") {
        childProps.onMouseLeave(e);
      }
      hide();
    },
    onMouseDown: (e: React.MouseEvent<HTMLElement>) => {
      if (typeof childProps.onMouseDown === "function") {
        childProps.onMouseDown(e);
      }
      hide();
    },
    onClick: (e: React.MouseEvent<HTMLElement>) => {
      if (typeof childProps.onClick === "function") {
        childProps.onClick(e);
      }
      hide();
    },
    onTouchStart: (e: React.TouchEvent<HTMLElement>) => {
      if (typeof childProps.onTouchStart === "function") {
        childProps.onTouchStart(e);
      }
      hide();
    },
    onBlur: (e: React.FocusEvent<HTMLElement>) => {
      if (typeof childProps.onBlur === "function") {
        childProps.onBlur(e);
      }
      hide();
    },
  });

  return (
    <>
      {clonedChild}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {visible && coords && (
              <div
                className="fixed z-[99999] pointer-events-none select-none"
                style={{
                  top: coords.y,
                  left: coords.x,
                  transform:
                    coords.actualPosition === "top"
                      ? "translate(-50%, -100%)"
                      : coords.actualPosition === "bottom"
                      ? "translate(-50%, 0)"
                      : coords.actualPosition === "left"
                      ? "translate(-100%, -50%)"
                      : "translate(0, -50%)",
                }}
              >
                <motion.div
                  id={id}
                  role="tooltip"
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                    y: coords.actualPosition === "top" ? 3 : coords.actualPosition === "bottom" ? -3 : 0,
                  }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                >
                  <div
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide shadow-xl border ${
                      isDark
                        ? "bg-[#181b22] text-white border-white/20 shadow-black/80"
                        : "bg-neutral-900 text-white border-neutral-800 shadow-neutral-900/30"
                    }`}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {content}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
