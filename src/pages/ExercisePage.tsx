import { useParams, useNavigate } from 'react-router-dom';
import { getExerciseById } from '../data';
import ExerciseShell from '../components/exercises/ExerciseShell';

export default function ExercisePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const exercise = id ? getExerciseById(id) : undefined;

  if (!exercise) {
    return (
      <div className="text-center py-16">
        <span className="text-6xl block mb-4">🔍</span>
        <h2 className="text-2xl font-extrabold text-gray-800 mb-2">Exercise Not Found</h2>
        <p className="text-gray-500 mb-6">We couldn't find the exercise you're looking for.</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-primary-500 text-white rounded-2xl font-bold hover:bg-primary-600 transition-colors"
        >
          Go Home
        </button>
      </div>
    );
  }

  return <ExerciseShell exercise={exercise} />;
}
