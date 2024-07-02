## **Framer Motion Variants - Effortless Animations**

**Boost your React animations with a collection of pre-built variants for Framer Motion. This package empowers you to create stunning animations effortlessly, saving you development time and ensuring visual consistency across your project.**

https://github.com/surendra-manjhi/framer-motion-variants/assets/121970162/1ddc7622-0929-4314-9a67-10c0f21bf616

### **Key Features**

-   Ready-to-use Variants
-   Built for Reusability

### **Get Started**

```bash
npm install framer-motion framer-motion-variants
```

### **Usage**

1. Import `motion` and `fadeIn` variant from their packages.

```tsx
import { motion } from "framer-motion";
import { fadeIn } from "framer-motion-variants";
```

2. Wrap your component with a `motion.div` element and assign the `fadeIn` variant to the variants prop.

```tsx
const MyComponent = () => {
    return (
       <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
       >
          {/* Your component content */}
       </motion.div>
    );
};
```
