import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Users Say
      </h2>
      <div className="bg-gray-100 rounded-lg p-8">
        <blockquote className="text-xl italic text-center text-gray-700">
          "Flowrise has completely transformed how I approach my work day. I'm
          more productive than ever and feel great doing it!"
        </blockquote>
        <div className="mt-4 text-center">
          <Image
            src="/user-avatar.jpg"
            alt="User avatar"
            width={64}
            height={64}
            className="rounded-full mx-auto mb-2"
          />
          <p className="font-semibold">Jane Doe</p>
          <p className="text-gray-600">Marketing Manager</p>
        </div>
      </div>
    </div>
  );
}
