import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: ["Energy tracking", "Basic task management", "Daily insights"],
    },
    {
      name: "Pro",
      price: "$9.99/month",
      features: [
        "Everything in Basic",
        "Smart scheduling",
        "Advanced analytics",
        "Priority support",
      ],
    },
    {
      name: "Team",
      price: "$49.99/month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Admin controls",
        "Custom integrations",
      ],
    },
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Choose Your Plan</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col"
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="mb-8 flex-grow">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="mb-2 flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/signup"
              className="bg-primary text-white px-4 py-2 rounded-full text-center hover:bg-primary-dark transition duration-300"
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
