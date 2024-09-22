import {
  ChartPieIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function Features() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <ChartPieIcon className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Energy Tracking</h3>
          <p className="text-gray-600">
            Monitor your energy levels throughout the day and optimize your
            schedule.
          </p>
        </div>
        <div className="text-center">
          <ClockIcon className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
          <p className="text-gray-600">
            Automatically plan your tasks based on your energy patterns and
            priorities.
          </p>
        </div>
        <div className="text-center">
          <SparklesIcon className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Habit Building</h3>
          <p className="text-gray-600">
            Develop positive habits aligned with your natural rhythms for
            lasting change.
          </p>
        </div>
      </div>
    </div>
  );
}
