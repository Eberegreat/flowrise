import {
  ChartPieIcon,
  ClockIcon,
  SparklesIcon,
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

export default function Features() {
  const features = [
    {
      icon: ChartPieIcon,
      title: "Energy Tracking",
      description:
        "Monitor your energy levels throughout the day and optimize your schedule.",
    },
    {
      icon: ClockIcon,
      title: "Smart Scheduling",
      description:
        "Automatically plan your tasks based on your energy patterns and priorities.",
    },
    {
      icon: SparklesIcon,
      title: "Habit Building",
      description:
        "Develop positive habits aligned with your natural rhythms for lasting change.",
    },
    {
      icon: BoltIcon,
      title: "Productivity Boost",
      description:
        "Increase your overall productivity by working with your body's natural cycles.",
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      title: "AI-Powered Insights",
      description:
        "Receive personalized recommendations to improve your workflow.",
    },
    {
      icon: ArrowPathIcon,
      title: "Sync Across Devices",
      description:
        "Access your schedule and insights on all your devices, always in sync.",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Flowrise Features</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <feature.icon className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
