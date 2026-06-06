import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type RevealProps = {
	children: ReactNode;
	className?: string;
	/** Entrance delay in seconds. Useful for staggering siblings. */
	delay?: number;
};

/**
 * Scroll-reveal wrapper built on framer-motion.
 *
 * `viewport={{ once: true }}` means each element animates exactly once and is
 * never re-triggered on re-scroll — the main source of "double animation".
 * Because this app does not use React.StrictMode there is no double-mount
 * either, so the entrance plays a single time on desktop and mobile alike.
 *
 * `useReducedMotion` short-circuits the animation entirely for users who ask
 * for reduced motion: content renders in its final state with no transition.
 *
 * `amount: "some"` (fire as soon as any part enters the region) is critical:
 * an explicit ratio like `0.2` combined with the negative bottom margin can be
 * unreachable for tall sections on short mobile viewports, leaving the content
 * stuck at its `initial` opacity:0 — i.e. the animation appears to "not load".
 */
export const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
	const reduce = useReducedMotion();

	return (
		<motion.div
			className={className}
			initial={reduce ? false : { opacity: 0, y: 28 }}
			whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
			viewport={{ once: true, amount: "some", margin: "0px 0px -10% 0px" }}
			transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
		>
			{children}
		</motion.div>
	);
};
