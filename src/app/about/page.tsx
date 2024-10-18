import { rejects } from "node:assert";
import { resolve } from "node:path";

export default async function About() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  return (
    <div>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        At Elegant Peace , we belive in creating a space where simplicity and
        serenity come togather. our goal is to inspire tranquility through
        timless design and a calm aesthetic, bringing balance to your life.
      </p>
    </div>
  );
}
