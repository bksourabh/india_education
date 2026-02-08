import { motion } from 'framer-motion';

const features = [
  { emoji: '🎮', title: 'Play & Learn', desc: 'Interactive exercises that feel like games' },
  { emoji: '📊', title: 'Track Progress', desc: 'See your stars and scores grow' },
  { emoji: '💡', title: 'Helpful Hints', desc: 'Get clues when you need them' },
  { emoji: '🏆', title: 'Earn Stars', desc: 'Collect stars for every exercise' },
];

export default function Features() {
  return (
    <section className="py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="text-center p-4 bg-white rounded-2xl shadow-md"
          >
            <div className="text-3xl mb-2">{f.emoji}</div>
            <h4 className="font-bold text-gray-800 text-sm">{f.title}</h4>
            <p className="text-xs text-gray-500 mt-1">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
