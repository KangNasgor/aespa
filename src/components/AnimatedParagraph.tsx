import { motion } from "motion/react"; 

export default function Paragraph( { text, className } : { text : string, className : string }){
    const words = text.split(" ");


    const containerVariant = {
        hidden : {
            opacity : 0
        },
        visible : {
            opacity : 1,

        }
    }

    return(
        <motion.p
        className={className}
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ 
            once: true,
            amount: 0.3 
        }}
        >
            {words.map((item, index) => (
                <motion.span key={index} initial={{ opacity : 0, y : 12 }} whileInView={{ opacity : 1, y : 0 }} transition={{ delay : 0.1 + index/100, type : "spring" }}  className="inline-block mr-[0.25em]">
                    {item}
                </motion.span>
            ) )}
        </motion.p>
    )
}