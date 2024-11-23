// This is the bolierplate Code for Motion&Animation

import { motion } from "framer-motion"

 () => {


    const variants = {
        hidden: { x: 0, y: 70, opacity: 0.25 },
        visible: { x: 0, y: -10, opacity: 1, transition: { delay: 0.05 } },

        
    }
    return (
        <div>
    
    
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}>
            </motion.div>


        </div>
    )
}
