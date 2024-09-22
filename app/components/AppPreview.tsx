import Image from "next/image";

export default function AppPreview() {
  return (
    <div className="flex justify-center mb-16">
      <div className="bg-gray-100 rounded-lg p-8 shadow-lg max-w-4xl w-full">
        <div className="flex items-start space-x-4 mb-6">
          <Image
            src="/app-icon.svg"
            alt="Flowrise app"
            width={48}
            height={48}
            className="rounded"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Profile</h2>
            <p className="text-gray-600">
              Visualize your energy, track your progress, and optimize your day
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 flex justify-between items-center">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-400 rounded-full"></div>
              <span className="text-gray-700">High Energy</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
              <span className="text-gray-700">Medium Energy</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-400 rounded-full"></div>
              <span className="text-gray-700">Low Energy</span>
            </div>
          </div>
          <div className="relative w-48 h-48">
            <Image
              src="/energy-chart.svg"
              alt="Energy chart"
              layout="fill"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
