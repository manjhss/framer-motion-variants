### **Framer Motion Variants - Effortless Animations (framer-motion-variants)**

**Boost your React animations with a collection of pre-built variants for Framer Motion.** This package empowers you to create stunning animations effortlessly, saving you development time and ensuring visual consistency across your project.

**Key Features:**

-   Ready-to-use Variants
-   Built for Reusability

**Get Started:**

Installation:

```console
npm install framer-motion framer-motion-variants
```

Usage:

1. Import `motion` and `fadeIn` variant from their packages:

```tsx
import { motion } from "framer-motion";
import { fadeIn } from "framer-motion-variants";
```

2. Wrap your component with a `motion.div` element and assign the `fadeIn` variant to the variants prop:

```tsx
const MyComponent = () => {
	return (
		<motion.div variants={fadeIn}>
			{/* Your component content */}
		</motion.div>
	);
};
```
