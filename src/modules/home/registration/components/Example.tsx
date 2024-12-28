import { motion } from 'framer-motion'

export const Example: React.FC<{ axisX: number }> = ({ axisX }) => {
    return (
        <motion.div
            className=' bg-red-500 h-10'
            initial={{ opacity: 0, x: axisX }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
        >
            <div>TEXT</div>
        </motion.div>
    )
}
