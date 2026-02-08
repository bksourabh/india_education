import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Section } from '../types';
import { useGrade } from '../context/GradeContext';
import { useProgress } from '../context/ProgressContext';
import { getExercises, sections } from '../data';
import Card from '../components/ui/Card';
import StarRating from '../components/ui/StarRating';
import Badge from '../components/ui/Badge';

interface SectionPageProps {
  sectionId: Section;
}

export default function SectionPage({ sectionId }: SectionPageProps) {
  const navigate = useNavigate();
  const { grade } = useGrade();
  const { progress } = useProgress();

  const section = sections.find((s) => s.id === sectionId)!;
  const exercises = getExercises(sectionId, grade);

  const difficultyConfig = {
    easy: { label: 'Easy', color: 'bg-success-100 text-success-600', emoji: '🟢' },
    medium: { label: 'Medium', color: 'bg-warning-100 text-warning-600', emoji: '🟡' },
    challenging: { label: 'Challenging', color: 'bg-fun-pink/10 text-fun-pink', emoji: '🔴' },
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{section.emoji}</span>
          <h1 className="text-3xl font-extrabold text-gray-800">{section.title}</h1>
        </div>
        <p className="text-gray-600">{section.description}</p>
        <p className="text-sm text-primary-600 font-bold mt-2">
          Grade {grade} — {exercises.length} exercises available
        </p>
      </motion.div>

      {exercises.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
          <span className="text-5xl mb-4 block">📭</span>
          <p className="text-gray-500 font-medium">No exercises available for this grade yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exercises.map((exercise, index) => {
            const ep = progress[exercise.id];
            const diff = difficultyConfig[exercise.difficulty];

            return (
              <motion.div
                key={exercise.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  hover
                  onClick={() => navigate(`/exercise/${exercise.id}`)}
                  className={`border-2 ${ep?.completed ? 'border-success-200 bg-success-50/30' : 'border-transparent'}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-extrabold text-gray-800">{exercise.title}</h3>
                    <Badge label={diff.label} color={diff.color} emoji={diff.emoji} />
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{exercise.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium">
                      {exercise.questions.length} questions
                    </span>
                    {ep?.completed && (
                      <div className="flex items-center gap-2">
                        <StarRating score={ep.score} total={ep.totalQuestions} size="sm" />
                        <span className="text-xs font-bold text-success-600">
                          {ep.score}/{ep.totalQuestions}
                        </span>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
